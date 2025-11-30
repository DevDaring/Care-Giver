import { NativeModules, Platform } from 'react-native';
import { ModelDownloader } from './ModelDownloader';

const { NativeAIModule } = NativeModules;

// Fallback rule-based system if native AI fails or device is too weak
const FALLBACK_RESPONSES: Record<string, string> = {
  'hello': 'Namaste! I am your Care-Giver assistant. (Basic Mode)',
  'help': 'I have alerted your emergency contacts.',
  'medicine': 'Please check your medicine schedule.',
  'default': 'I am running in basic mode. Please connect to internet for full features.'
};

export class AIService {
  private static instance: AIService;
  private isReady: boolean = false;
  private isLowEndDevice: boolean = false;
  private currentModel: string = 'NONE';

  private constructor() {}

  static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  async initialize(): Promise<void> {
    try {
      console.log('Initializing AI Service...');
      
      if (Platform.OS !== 'android') {
        console.warn('Native AI only supported on Android for now.');
        return;
      }

      const capabilities = await NativeAIModule.getDeviceCapabilities();
      console.log('Device Capabilities:', capabilities);

      this.isLowEndDevice = capabilities.isLowRam || capabilities.totalMemory < 6 * 1024 * 1024 * 1024; // < 6GB

      await this.loadBestModel();
    } catch (error) {
      console.error('Failed to initialize AI Service:', error);
    }
  }

  private async loadBestModel(): Promise<void> {
    try {
      let modelPath = '';
      
      if (this.isLowEndDevice) {
        console.log('Low-end device detected. Attempting to load Minimum Model (Gemma 2B / TinyLlama)...');
        modelPath = await ModelDownloader.ensureModelExists('gemma-2b-it-q4_k_m.gguf');
        this.currentModel = 'GEMMA_2B';
      } else {
        console.log('High-end device detected. Attempting to load Llama 3.2 3B...');
        modelPath = await ModelDownloader.ensureModelExists('llama-3.2-3b-instruct-q4_k_m.gguf');
        this.currentModel = 'LLAMA_3.2_3B';
      }

      if (modelPath) {
        await NativeAIModule.loadModel(modelPath, !this.isLowEndDevice); // Use GPU only if not low end (simplification)
        this.isReady = true;
        console.log(`Loaded model: ${this.currentModel}`);
      } else {
        console.warn('Model download failed or file missing. Switching to Rule-Based Fallback.');
        this.currentModel = 'RULE_BASED';
      }
    } catch (error) {
      console.error('Error loading model, falling back:', error);
      this.currentModel = 'RULE_BASED';
    }
  }

  async chat(message: string): Promise<string> {
    if (this.currentModel === 'RULE_BASED' || !this.isReady) {
      return this.getFallbackResponse(message);
    }

    try {
      // Format prompt based on model (simplified)
      const prompt = `<|user|>\n${message}\n<|assistant|>\n`;
      const response = await NativeAIModule.generateText(prompt, 256);
      return response;
    } catch (error) {
      console.error('Inference failed, using fallback:', error);
      return this.getFallbackResponse(message);
    }
  }

  private getFallbackResponse(message: string): string {
    const lowerMsg = message.toLowerCase();
    for (const key in FALLBACK_RESPONSES) {
      if (lowerMsg.includes(key)) {
        return FALLBACK_RESPONSES[key];
      }
    }
    return FALLBACK_RESPONSES['default'];
  }

  getStatus() {
    return {
      isReady: this.isReady,
      model: this.currentModel,
      isLowEnd: this.isLowEndDevice
    };
  }
}

import { Platform } from 'react-native';
import RNFS from 'react-native-fs';

// HF Token provided by user
// HF Token should be loaded from secure storage or env
const HF_TOKEN = "YOUR_HUGGING_FACE_TOKEN";

const MODELS = {
  'llama-3.2-3b-instruct-q4_k_m.gguf': 'https://huggingface.co/bartowski/Llama-3.2-3B-Instruct-GGUF/resolve/main/Llama-3.2-3B-Instruct-Q4_K_M.gguf',
  'gemma-2b-it-q4_k_m.gguf': 'https://huggingface.co/google/gemma-2-2b-it-GGUF/resolve/main/2b_it_v2.gguf' // Example URL
};

export class ModelDownloader {
  static async ensureModelExists(filename: keyof typeof MODELS): Promise<string> {
    const downloadDest = `${RNFS.DocumentDirectoryPath}/${filename}`;
    
    const exists = await RNFS.exists(downloadDest);
    if (exists) {
      console.log(`Model ${filename} already exists at ${downloadDest}`);
      return downloadDest;
    }

    console.log(`Downloading ${filename}...`);
    const url = MODELS[filename];

    try {
      const options = {
        fromUrl: url,
        toFile: downloadDest,
        headers: {
          'Authorization': `Bearer ${HF_TOKEN}`
        },
        background: true,
        begin: (res: any) => {
          console.log('Download has begun:', res);
        },
        progress: (res: any) => {
          const progress = (res.bytesWritten / res.contentLength) * 100;
          if (progress % 10 === 0) console.log(`Progress: ${progress.toFixed(0)}%`);
        }
      };

      const ret = RNFS.downloadFile(options);
      await ret.promise;
      console.log('Download complete!');
      return downloadDest;
    } catch (error) {
      console.error('Download failed:', error);
      return '';
    }
  }
}

// Gemini Text API integration

import {getTextModel, defaultGenerationConfig, SYSTEM_PROMPT} from './geminiConfig';
import {GeminiTextRequest, GeminiTextResponse} from '@/types/api.types';
import {LanguageCode} from '@/types/common.types';

/**
 * Send a text message to Gemini and get response
 */
export const sendTextToGemini = async (
  request: GeminiTextRequest,
): Promise<GeminiTextResponse> => {
  try {
    const model = getTextModel();

    // Build conversation history
    const history = request.context?.map(msg => ({
      role: 'user',
      parts: [{text: msg}],
    })) || [];

    // Start chat with system prompt and history
    const chat = model.startChat({
      generationConfig: defaultGenerationConfig,
      history: [
        {
          role: 'user',
          parts: [{text: SYSTEM_PROMPT}],
        },
        {
          role: 'model',
          parts: [{text: 'I understand. I am ready to assist as a compassionate care-giver.'}],
        },
        ...history,
      ],
    });

    // Add language instruction if specified
    let prompt = request.prompt;
    if (request.language && request.language !== 'en') {
      prompt = `Please respond in ${request.language} language. ${prompt}`;
    }

    // Send message
    const result = await chat.sendMessage(prompt);
    const response = result.response;
    const text = response.text();

    return {
      text,
      language: request.language || 'en',
      confidence: 0.9, // Placeholder, Gemini doesn't provide confidence scores
    };
  } catch (error) {
    console.error('Error sending text to Gemini:', error);
    throw new Error(`Gemini API error: ${error}`);
  }
};

/**
 * Classify user intent from text
 */
export const classifyIntent = async (
  text: string,
  language: LanguageCode = 'en',
): Promise<{
  intent: string;
  entities: Record<string, any>;
  confidence: number;
}> => {
  try {
    const model = getTextModel();

    const prompt = `Analyze this user message and classify the intent. Return ONLY a JSON object with no markdown formatting.

Message: "${text}"
Language: ${language}

Return format:
{
  "intent": "ALARM|CALL|EMERGENCY|CHAT|STORY|CAMERA|LOCATION|MUSIC",
  "entities": {
    "time": "extracted time if any",
    "person": "extracted person name if any",
    "location": "extracted location if any",
    "action": "extracted action if any"
  },
  "confidence": 0.0-1.0
}`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const responseText = response.text();

    // Remove markdown code blocks if present
    let cleanedText = responseText.trim();
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/```\n?/g, '');
    }

    const parsed = JSON.parse(cleanedText);

    return {
      intent: parsed.intent || 'CHAT',
      entities: parsed.entities || {},
      confidence: parsed.confidence || 0.7,
    };
  } catch (error) {
    console.error('Error classifying intent:', error);
    // Default to CHAT intent if classification fails
    return {
      intent: 'CHAT',
      entities: {},
      confidence: 0.5,
    };
  }
};

/**
 * Generate a story for the user
 */
export const generateStory = async (
  theme: string,
  language: LanguageCode = 'en',
  userName?: string,
): Promise<{title: string; content: string}> => {
  try {
    const model = getTextModel();

    const languageInstruction = language !== 'en' ? `in ${language} language` : '';
    const nameInstruction = userName ? `featuring a character named ${userName}` : '';

    const prompt = `Generate a short, heartwarming story ${languageInstruction} ${nameInstruction} about: ${theme}

The story should be:
- 3-4 paragraphs long
- Appropriate for all ages
- Positive and uplifting
- Easy to understand

Return in JSON format: {"title": "story title", "content": "story content"}`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const responseText = response.text();

    // Clean markdown formatting
    let cleanedText = responseText.trim();
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/```\n?/g, '');
    }

    const parsed = JSON.parse(cleanedText);

    return {
      title: parsed.title || 'A Story for You',
      content: parsed.content || '',
    };
  } catch (error) {
    console.error('Error generating story:', error);
    throw new Error(`Story generation error: ${error}`);
  }
};

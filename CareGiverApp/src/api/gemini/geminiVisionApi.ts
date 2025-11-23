// Gemini Vision API integration

import {getVisionModel, defaultGenerationConfig} from './geminiConfig';
import {GeminiVisionRequest, GeminiVisionResponse} from '@/types/api.types';

/**
 * Analyze an image using Gemini Vision
 */
export const analyzeImage = async (
  request: GeminiVisionRequest,
): Promise<GeminiVisionResponse> => {
  try {
    const model = getVisionModel();

    // Add language instruction
    let prompt = request.prompt;
    if (request.language && request.language !== 'en') {
      prompt = `Please respond in ${request.language} language. ${prompt}`;
    }

    // Prepare image part
    const imagePart = {
      inlineData: {
        data: request.imageBase64,
        mimeType: 'image/jpeg', // Default, can be made configurable
      },
    };

    // Generate content with image and prompt
    const result = await model.generateContent({
      contents: [{
        role: 'user',
        parts: [
          {text: prompt},
          imagePart,
        ],
      }],
      generationConfig: defaultGenerationConfig,
    });

    const response = result.response;
    const text = response.text();

    return {
      text,
      language: request.language || 'en',
      detectedObjects: [], // Gemini doesn't provide structured object detection
      textContent: text, // OCR text extracted from image (if any)
    };
  } catch (error) {
    console.error('Error analyzing image with Gemini:', error);
    throw new Error(`Gemini Vision API error: ${error}`);
  }
};

/**
 * Analyze a medicine bottle
 */
export const analyzeMedicine = async (
  imageBase64: string,
  language: string = 'en',
): Promise<{
  name: string;
  purpose: string;
  dosage: string;
  warnings: string[];
  fullAnalysis: string;
}> => {
  try {
    const prompt = `Analyze this medicine bottle image and provide detailed information. Return ONLY a JSON object with no markdown formatting.

Extract:
1. Medicine name
2. Purpose/indication
3. Dosage instructions
4. Important warnings or precautions
5. Any other relevant information

Return format:
{
  "name": "medicine name",
  "purpose": "what it's used for",
  "dosage": "how to take it",
  "warnings": ["warning 1", "warning 2"],
  "fullAnalysis": "complete analysis"
}`;

    const result = await analyzeImage({
      imageBase64,
      prompt,
      language,
    });

    // Parse the JSON response
    let cleanedText = result.text.trim();
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/```\n?/g, '');
    }

    const parsed = JSON.parse(cleanedText);

    return {
      name: parsed.name || 'Unknown',
      purpose: parsed.purpose || '',
      dosage: parsed.dosage || '',
      warnings: parsed.warnings || [],
      fullAnalysis: parsed.fullAnalysis || result.text,
    };
  } catch (error) {
    console.error('Error analyzing medicine:', error);
    // Return a fallback response
    return {
      name: 'Unable to read',
      purpose: 'Please consult the label or a pharmacist',
      dosage: 'Follow label instructions',
      warnings: [],
      fullAnalysis: 'Could not analyze the image clearly. Please try again with better lighting.',
    };
  }
};

/**
 * Analyze a document
 */
export const analyzeDocument = async (
  imageBase64: string,
  language: string = 'en',
): Promise<{
  type: string;
  extractedText: string;
  summary: string;
}> => {
  try {
    const prompt = `Analyze this document image and extract all text. Return ONLY a JSON object.

Return format:
{
  "type": "document type (prescription, letter, form, etc.)",
  "extractedText": "all text from the document",
  "summary": "brief summary of the document content"
}`;

    const result = await analyzeImage({
      imageBase64,
      prompt,
      language,
    });

    let cleanedText = result.text.trim();
    if (cleanedText.startsWith('```json')) {
      cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
    } else if (cleanedText.startsWith('```')) {
      cleanedText = cleanedText.replace(/```\n?/g, '');
    }

    const parsed = JSON.parse(cleanedText);

    return {
      type: parsed.type || 'Document',
      extractedText: parsed.extractedText || '',
      summary: parsed.summary || result.text,
    };
  } catch (error) {
    console.error('Error analyzing document:', error);
    return {
      type: 'Unknown',
      extractedText: '',
      summary: 'Could not analyze document clearly.',
    };
  }
};

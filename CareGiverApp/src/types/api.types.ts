// API request and response types

import {LanguageCode} from './common.types';

// Gemini API Types
export interface GeminiTextRequest {
  prompt: string;
  language?: LanguageCode;
  context?: string[];
  maxTokens?: number;
}

export interface GeminiTextResponse {
  text: string;
  language: LanguageCode;
  intent?: string;
  confidence?: number;
}

export interface GeminiVisionRequest {
  imageBase64: string;
  prompt: string;
  language?: LanguageCode;
}

export interface GeminiVisionResponse {
  text: string;
  detectedObjects?: string[];
  textContent?: string;
  language: LanguageCode;
}

export interface GeminiImageGenRequest {
  prompt: string;
  style?: 'realistic' | 'artistic' | 'cartoon';
  aspectRatio?: '1:1' | '16:9' | '9:16';
}

export interface GeminiImageGenResponse {
  imageBase64: string;
  prompt: string;
}

// Google Cloud TTS Types
export interface TTSRequest {
  text: string;
  languageCode: string;
  voiceGender?: 'MALE' | 'FEMALE' | 'NEUTRAL';
  speakingRate?: number;
  pitch?: number;
}

export interface TTSResponse {
  audioContent: string; // base64
  duration?: number;
}

// Google Cloud STT Types
export interface STTRequest {
  audioContent: string; // base64
  languageCode: string;
  alternativeLanguages?: string[];
}

export interface STTResponse {
  transcript: string;
  confidence: number;
  detectedLanguage?: string;
  isFinal: boolean;
}

// Intent Classification
export interface IntentClassificationRequest {
  text: string;
  context?: string[];
  userId: string;
}

export interface IntentClassificationResponse {
  intent: 'ALARM' | 'CALL' | 'EMERGENCY' | 'CHAT' | 'STORY' | 'CAMERA' | 'LOCATION' | 'UNKNOWN';
  entities: Record<string, any>;
  confidence: number;
}

// Voice Command Processing
export interface VoiceCommandRequest {
  transcript: string;
  language: LanguageCode;
  userId: string;
}

export interface VoiceCommandResponse {
  action: string;
  parameters: Record<string, any>;
  confirmation: string;
  requiresConfirmation: boolean;
}

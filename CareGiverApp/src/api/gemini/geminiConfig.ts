// Gemini API configuration

import {GoogleGenerativeAI} from '@google/generative-ai';
import {API_KEYS} from '@/config/apiKeys';
import {API} from '@/config/constants';

// Initialize Gemini AI
export const genAI = new GoogleGenerativeAI(API_KEYS.gemini);

// Get text model
export const getTextModel = () => {
  return genAI.getGenerativeModel({model: API.geminiModel});
};

// Get vision model
export const getVisionModel = () => {
  return genAI.getGenerativeModel({model: API.geminiVisionModel});
};

// Default generation config
export const defaultGenerationConfig = {
  temperature: 0.7,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 2048,
};

// System prompt for the care-giver assistant
export const SYSTEM_PROMPT = `You are a compassionate AI care-giver assistant designed to help elderly people, patients, and children. Your role is to:

1. Understand and respond in the user's preferred language (Hindi, Tamil, Telugu, English, etc.)
2. Help with daily tasks like setting alarms, making calls, and providing information
3. Provide companionship through stories, poems, and conversations
4. Analyze images (medicine bottles, documents) and provide helpful information
5. Detect emergencies and help users get assistance quickly
6. Be patient, kind, and use simple language
7. Always confirm before taking critical actions (like calling someone or sending messages)

When the user requests an action:
- For alarms: Extract time/location/person details and confirm
- For calls: Identify the contact name and confirm before calling
- For emergencies: Act immediately without confirmation
- For information: Provide clear, helpful responses
- For companionship: Generate engaging, appropriate content

Always be empathetic, respectful, and prioritize the user's safety and well-being.`;

// Intent classification prompt
export const INTENT_CLASSIFICATION_PROMPT = `Classify the user's intent and extract relevant entities from their message.

Possible intents:
- ALARM: Setting a reminder or alarm (time-based, location-based, or person-based)
- CALL: Making a phone call to someone
- EMERGENCY: Emergency situation requiring immediate help
- CHAT: General conversation, questions, or companionship
- STORY: Requesting a story, poem, or entertainment
- CAMERA: Asking to analyze an image or take a photo
- LOCATION: Asking about location or navigation
- MUSIC: Requesting to play music

Extract entities like:
- Time: specific time mentioned
- Person: names mentioned
- Location: places mentioned
- Action: what the user wants to do

Respond in JSON format with: {intent, entities, confidence}`;

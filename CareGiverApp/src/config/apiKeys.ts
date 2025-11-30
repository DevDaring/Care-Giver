// API Keys Configuration
// WARNING: DO NOT commit this file with real API keys
// Use environment variables in production

import { SECRETS } from './secrets';

export const API_KEYS = {
  gemini: SECRETS.GEMINI_API_KEY || '',
  gcpProjectId: SECRETS.GCP_PROJECT_ID || '',
  gcpTts: SECRETS.GCP_TTS_API_KEY || '',
  gcpStt: SECRETS.GCP_STT_API_KEY || '',
};

export const validateApiKeys = (): {isValid: boolean; missing: string[]} => {
  const missing: string[] = [];

  if (!API_KEYS.gemini) {
    missing.push('GEMINI_API_KEY');
  }
  if (!API_KEYS.gcpProjectId) {
    missing.push('GCP_PROJECT_ID');
  }
  if (!API_KEYS.gcpTts) {
    missing.push('GCP_TTS_API_KEY');
  }
  if (!API_KEYS.gcpStt) {
    missing.push('GCP_STT_API_KEY');
  }

  return {
    isValid: missing.length === 0,
    missing,
  };
};

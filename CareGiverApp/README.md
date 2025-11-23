# 🤖❤️ AI Care-Giver Companion App

## Voice-First, Multilingual AI Care System

The **AI Care-Giver Companion** is a revolutionary voice-first, multilingual mobile application powered by Gemini 2.5 that serves as a 24/7 digital care-giver for elderly individuals, patients, and children across 100+ languages.

---

## 🌟 Key Features

### 🎤 Voice-First Interface
- **Natural Conversation**: Talk naturally in any language (Hindi, Tamil, Telugu, English, etc.)
- **No Complex Forms**: Simply speak what you need
- **Real-time Speech Recognition**: Powered by Google Cloud STT
- **Text-to-Speech**: AI responds with natural voice

### 🤖 AI-Powered by Gemini 2.5
- **Multimodal Understanding**: Text, voice, and vision
- **Context-Aware**: Remembers conversation history
- **Intent Classification**: Automatically understands what you want
- **Story & Poem Generation**: Companionship through creative content

### ⏰ Smart Alarms (3 Types)
1. **Time-Based**: "Remind me to take medicine at 8 AM"
2. **Location-Based**: "Tell me when I reach the hospital"
3. **Person-Based**: "Remind me when Mom arrives at 6 PM"

### 🚨 Emergency Response
- Say "Help" or "Emergency" in any language
- Instantly sends SMS to all emergency contacts with GPS location
- Initiates phone calls to emergency contacts
- Works even in low connectivity

### 📸 Vision Analysis
- **Medicine Recognition**: Point camera at medicine bottle
- **Document Reading**: Extract text from prescriptions, reports
- **OCR in Regional Languages**: Read Hindi, Tamil, Telugu scripts

### 👥 Dual Role System
- **USER Role**: For elderly, patients, children (simple interface)
- **ADMIN Role**: For family, caregivers (monitoring & control)

### 🌍 100% Multilingual
- Supports 14+ languages out of the box
- Works entirely in regional languages
- Code-switching support (e.g., Hinglish)

### 🔒 Privacy-First
- **100% Local Storage**: SQLite database on device
- **No Cloud Database**: Your data never leaves your phone
- **Encrypted**: Sensitive data encrypted at rest

---

## 🏗️ Architecture

### Tech Stack

| Component | Technology |
|-----------|-----------|
| **Framework** | React Native 0.76.5 |
| **Language** | TypeScript 5.7 |
| **AI Model** | Google Gemini 2.5 Flash |
| **State Management** | Redux Toolkit |
| **Database** | SQLite (react-native-sqlite-storage) |
| **Speech-to-Text** | Google Cloud STT |
| **Text-to-Speech** | react-native-tts |
| **Navigation** | React Navigation 7 |
| **Internationalization** | i18next |
| **Camera** | react-native-vision-camera |
| **Maps** | react-native-maps |
| **Permissions** | react-native-permissions |

### Folder Structure

```
CareGiverApp/
├── src/
│   ├── api/                    # API integrations
│   │   ├── gemini/             # Gemini text, vision, image gen
│   │   └── googleCloud/        # GCP TTS/STT
│   ├── components/             # Reusable UI components
│   │   ├── common/             # Button, Input, Modal, etc.
│   │   ├── voice/              # Voice input components
│   │   ├── chat/               # Chat bubbles, input bar
│   │   ├── alarm/              # Alarm cards
│   │   └── admin/              # Admin controls
│   ├── config/                 # App configuration
│   │   ├── constants.ts        # Colors, sizes, fonts
│   │   ├── languages.ts        # Supported languages
│   │   ├── permissions.ts      # Permission strings
│   │   └── emergencyNumbers.ts # Country-wise emergency numbers
│   ├── database/               # SQLite database
│   │   ├── schema.ts           # Table definitions
│   │   ├── index.ts            # DB initialization
│   │   └── queries/            # CRUD operations
│   ├── hooks/                  # Custom React hooks
│   ├── localization/           # i18n translations
│   │   ├── i18n.ts             # i18next config
│   │   └── languages/          # Translation files (en, hi, ta, te)
│   ├── navigation/             # Navigation structure
│   │   ├── RootNavigator.tsx   # Main navigator
│   │   ├── AuthStack.tsx       # Auth screens
│   │   ├── UserStack.tsx       # User screens
│   │   └── AdminStack.tsx      # Admin screens
│   ├── screens/                # All app screens
│   │   ├── auth/               # Login, signup, onboarding
│   │   ├── user/               # User role screens
│   │   ├── admin/              # Admin role screens
│   │   └── shared/             # Shared screens
│   ├── services/               # Business logic
│   │   ├── VoiceCommandProcessor.ts
│   │   ├── AlarmScheduler.ts
│   │   ├── EmergencyHandler.ts
│   │   └── ContextManager.ts
│   ├── store/                  # Redux store
│   │   ├── store.ts            # Store configuration
│   │   └── slices/             # Redux slices
│   │       ├── authSlice.ts
│   │       ├── chatSlice.ts
│   │       ├── alarmSlice.ts
│   │       ├── contactSlice.ts
│   │       ├── settingsSlice.ts
│   │       └── restrictionSlice.ts
│   ├── styles/                 # Styling
│   ├── types/                  # TypeScript types
│   ├── utils/                  # Utility functions
│   └── App.tsx                 # Root component
├── android/                    # Android native code
├── ios/                        # iOS native code
├── package.json                # Dependencies
├── tsconfig.json               # TypeScript config
├── babel.config.js             # Babel configuration
├── metro.config.js             # Metro bundler config
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: >= 18.x
- **npm**: >= 9.x
- **React Native CLI**: `npm install -g react-native-cli`
- **iOS**: Xcode 14+ (macOS only)
- **Android**: Android Studio with SDK 33+

### Installation

1. **Clone the repository**
   ```bash
   cd CareGiverApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your API keys:
   ```
   GEMINI_API_KEY=your_gemini_api_key_here
   GCP_PROJECT_ID=your_gcp_project_id
   GCP_TTS_API_KEY=your_gcp_tts_api_key
   GCP_STT_API_KEY=your_gcp_stt_api_key
   ```

4. **iOS Setup** (macOS only)
   ```bash
   cd ios
   pod install
   cd ..
   ```

5. **Run the app**

   **For iOS:**
   ```bash
   npm run ios
   ```

   **For Android:**
   ```bash
   npm run android
   ```

---

## 🔑 API Keys Setup

### 1. Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy the key to `.env` as `GEMINI_API_KEY`

### 2. Google Cloud Speech APIs

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable **Cloud Text-to-Speech API**
3. Enable **Cloud Speech-to-Text API**
4. Create API credentials
5. Add to `.env` file

---

## 📱 Usage Examples

### Setting Alarms via Voice

```
USER: "हर रोज़ सुबह 8 बजे दवा की याद दिलाओ"
       (Remind me to take medicine every day at 8 AM)

AI: "बिल्कुल! मैंने आपके लिए रोज़ाना सुबह 8 बजे दवा लेने की याद दिलाने वाला अलार्म बना दिया है। 💊⏰"
    (Sure! I've created a daily alarm at 8 AM to remind you to take medicine.)
```

### Emergency Response

```
USER: "Emergency!" or "मदद!" or "Help!"

APP:
1. Shows emergency alert screen
2. Sends SMS to all emergency contacts
3. Includes GPS location
4. Plays loud alarm sound

AI: "Emergency alert sent to all your contacts. Stay calm, help is coming."
```

### Medicine Analysis

```
USER: *Points camera at medicine bottle*
      "ये दवा किस लिए है?"
      (What is this medicine for?)

AI: "यह Paracetamol 500mg है। इसका उपयोग बुखार और दर्द के लिए किया जाता है।
खुराक: दिन में 3 बार, खाना खाने के बाद।"
```

---

## 🧪 Testing

```bash
# Run tests
npm test

# Type check
npm run type-check

# Lint code
npm run lint

# Format code
npm run format
```

---

## 📦 Building for Production

### Android

```bash
cd android
./gradlew assembleRelease
```

APK will be at: `android/app/build/outputs/apk/release/app-release.apk`

### iOS

```bash
cd ios
xcodebuild -workspace CareGiverApp.xcworkspace \
           -scheme CareGiverApp \
           -configuration Release \
           -archivePath build/CareGiverApp.xcarchive \
           archive
```

---

## 🌐 Supported Languages

| Code | Language | Native Name |
|------|----------|-------------|
| en | English | English |
| hi | Hindi | हिंदी |
| ta | Tamil | தமிழ் |
| te | Telugu | తెలుగు |
| bn | Bengali | বাংলা |
| mr | Marathi | मराठी |
| gu | Gujarati | ગુજરાતી |
| kn | Kannada | ಕನ್ನಡ |
| ml | Malayalam | മലയാളം |
| pa | Punjabi | ਪੰਜਾਬੀ |
| es | Spanish | Español |
| ar | Arabic | العربية |
| fr | French | Français |
| zh | Chinese | 中文 |

---

## 🔐 Security & Privacy

- **Local-First**: All data stored locally in encrypted SQLite database
- **No Cloud Sync**: Your conversations never leave your device
- **Encrypted Storage**: Sensitive data (PINs, passwords) encrypted using crypto-js
- **Minimal Permissions**: Only requests necessary permissions
- **Open Source**: Full transparency in code

---

## 🛣️ Roadmap

### v1.1 - Enhancements
- [ ] Video calling with family
- [ ] Integration with wearables (heart rate, steps)
- [ ] Medication refill reminders
- [ ] Doctor appointment booking

### v2.0 - AI Doctor
- [ ] Symptom checker (AI-powered)
- [ ] Vital signs analysis
- [ ] Health trend predictions
- [ ] Telemedicine support

### v3.0 - Smart Home
- [ ] Control lights, TV via voice
- [ ] IoT device management
- [ ] Fall detection
- [ ] Smart medication dispenser

---

## 🤝 Contributing

We welcome contributions! This project is designed to help millions of people who need care.

### Development Status

✅ **Completed:**
- Project structure & configuration
- TypeScript types & interfaces
- Redux store & slices
- Database schema
- Gemini API integration
- i18n setup (4 languages)
- Authentication flow
- Navigation structure

🚧 **In Progress:**
- Voice input/output components
- Chat interface
- Alarm system
- Camera & vision features
- Emergency response system

📋 **Todo:**
- Admin dashboard
- Location tracking
- Geofencing
- Complete test coverage
- Production build optimization

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Google Gemini 2.5**: For powerful multimodal AI capabilities
- **React Native Community**: For amazing open-source libraries
- **Indian Languages Community**: For helping with translations

---

## 📞 Support

For support, email support@caregiverapp.com or open an issue on GitHub.

---

## 💡 Impact

This app addresses a critical need:

- **300M+ elderly people in India** need care
- **Shortage of professional care-givers** globally
- **Language barriers** in healthcare technology
- **Social isolation** and loneliness
- **Medication non-compliance**
- **Emergency response delays**

**This app is not just technology - it's compassion, delivered through code.**

---

**Made with ❤️ for Humanity**

**Powered by Gemini 2.5, Google Cloud, and React Native**

**Privacy-First | Multilingual | Voice-First | Care-First**

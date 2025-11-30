# 🌟 AI Care-Giver Companion App - FINAL COMPREHENSIVE DEVELOPMENT PLAN
## **Voice-First, Chat-First, Multilingual AI Care System**

---

# AI Care-Giver Companion App - Executive Summary

The **AI Care-Giver Companion** is a revolutionary voice-first, multilingual mobile application powered by Gemini 2.5 that serves as a 24/7 digital care-giver for elderly individuals, patients, and children across 100+ languages including Hindi, Tamil, Telugu, and other regional languages. Users interact entirely through natural conversation—simply speaking "मुझे सुबह 8 बजे दवा की याद दिलाओ" (remind me to take medicine at 8 AM) creates an alarm, saying "मम्मी को कॉल करो" (call Mom) initiates a phone call, or pointing the camera at a medicine bottle while asking "ये दवा किस लिए है?" (what is this medicine for?) provides instant AI-powered analysis. The app features three intelligent alarm types (time-based, location-based when reaching places like hospitals, and person-based detecting when someone is mentioned in conversation), emergency response activated by simply saying "Help" in any language, AI companionship generating personalized stories and poems with illustrations, and a comprehensive admin control system where family members can remotely monitor activity, set safety geofences, and manage feature restrictions—all while maintaining 100% privacy through local device storage with no cloud database, making it accessible even in remote areas and breaking down language barriers to deliver dignified, intelligent care to hundreds of millions of people who need assistance but lack access to traditional care-givers.

## 📋 **EXECUTIVE PROJECT OVERVIEW**

### **Revolutionary Concept: Conversational Care-Giving**

This is **NOT a traditional form-filling app**. This is a **conversational AI companion** where users interact primarily through:

1. **🎤 Voice Commands** - Natural speech in any language (Hindi, Tamil, Telugu, etc.)
2. **💬 Chat Interface** - Type or speak, AI understands and acts
3. **📱 Minimal UI Taps** - Only for confirmation or when voice/chat isn't preferred

**Example Interactions:**

```
USER: "मुझे सुबह 8 बजे दवा लेने की याद दिला दो"
       (Remind me to take medicine at 8 AM)
APP: Creates time alarm automatically ✅

USER: "जब मैं अस्पताल पहुंचूं तो मुझे बताना"
       (Tell me when I reach the hospital)
APP: Creates location alarm using GPS ✅

USER: "मम्मी को कॉल करो"
       (Call Mom)
APP: Looks up Mom's contact and initiates call ✅

USER: *Points camera at medicine bottle*
      "ये दवा किस लिए है?"
      (What is this medicine for?)
APP: Analyzes image, reads label, explains purpose ✅

USER: "मुझे उदास लग रहा है, कोई कहानी सुनाओ"
       (I'm feeling sad, tell me a story)
APP: Generates comforting story in Hindi with images ✅

USER: "Emergency!"
APP: Sends SMS to all emergency contacts with location ✅
```

### **What Makes This Groundbreaking?**

#### **1. True Voice/Chat-First Design**
- **NO complex forms to fill** - Just talk or type naturally
- **Gemini 2.5 understands intent** from natural conversation
- **Context-aware** - Remembers what you said 5 messages ago
- **Proactive suggestions** - "It's 8 PM, should I remind your son you're waiting?"

#### **2. Dual-Role Architecture (USER & ADMIN)**

| Aspect | USER Role | ADMIN Role |
|--------|-----------|------------|
| **Primary Interface** | Voice/Chat with AI | Voice/Chat + Control Dashboard |
| **Capabilities** | Daily care features, limited autonomy | Full app control, monitoring, restrictions |
| **Typical Users** | Elderly, patients, children | Family members, nurses, caregivers |
| **Login** | Simple PIN/Voice auth | Secure password |
| **Can Do** | Set alarms, chat, call contacts, get help | Block features, monitor activity, set rules |
| **Language** | Preferred regional language | Any language |

#### **3. 100% Multilingual Through Gemini 2.5**
- **No English Required** - Entire app works in regional languages
- **Code-Switching** - Mix Hindi-English naturally (Hinglish)
- **Cultural Understanding** - Gemini knows Indian festivals, foods, customs
- **Regional Script Vision** - Read medicine labels in Devanagari, Tamil, Telugu scripts
- **Voice in Any Language** - GCP STT supports 100+ languages

#### **4. Multimodal Intelligence**
- **Voice** - Speak naturally
- **Vision** - Show something to camera, AI analyzes
- **Text** - Type in any script
- **Image Generation** - AI creates comforting/relevant images
- **Location** - GPS-based smart assistance

#### **5. Zero Forms, Pure Conversation**
```
❌ OLD WAY (Form-Based Apps):
1. Click "Add Alarm"
2. Select "Time Alarm"
3. Scroll time picker
4. Type reminder message
5. Select repeat days
6. Click Save

✅ OUR WAY (Conversational):
USER: "हर रोज़ सुबह 7 बजे मुझे योग करने के लिए बोलना"
       (Tell me to do yoga every morning at 7)
APP: "Done! I'll remind you daily at 7 AM for yoga 🧘"
```

---

## 🏗️ **COMPLETE PROJECT ARCHITECTURE**

### **System Architecture Diagram**

```
┌─────────────────────────────────────────────────────────┐
│                   USER INTERFACE LAYER                   │
│  ┌──────────────────┐  ┌──────────────────────────────┐ │
│  │  Voice Input     │  │     Chat Interface           │ │
│  │  (Microphone)    │  │  (Text + Voice Bubbles)      │ │
│  └────────┬─────────┘  └──────────┬───────────────────┘ │
│           │                       │                      │
│           └───────────┬───────────┘                      │
│                       ↓                                  │
│  ┌────────────────────────────────────────────────────┐ │
│  │         NATURAL LANGUAGE PROCESSOR                 │ │
│  │         (Intent Recognition via Gemini 2.5)        │ │
│  └────────────────────┬───────────────────────────────┘ │
└─────────────────────────┼─────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              BUSINESS LOGIC LAYER                        │
│  ┌──────────┐ ┌──────────┐ ┌───────────┐ ┌───────────┐ │
│  │  Alarm   │ │ Contact  │ │Emergency  │ │   AI      │ │
│  │ Manager  │ │ Manager  │ │  Handler  │ │Companion  │ │
│  └──────────┘ └──────────┘ └───────────┘ └───────────┘ │
│  ┌──────────┐ ┌──────────┐ ┌───────────┐ ┌───────────┐ │
│  │Location  │ │ Media    │ │ Vision    │ │  Admin    │ │
│  │ Service  │ │ Player   │ │ Analyzer  │ │Controller │ │
│  └──────────┘ └──────────┘ └───────────┘ └───────────┘ │
└─────────────────────────┬───────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│              DATA & API LAYER                            │
│  ┌───────────────┐  ┌────────────────────────────────┐ │
│  │ Local SQLite  │  │   Google Cloud Platform        │ │
│  │   Database    │  │  ┌──────────┐  ┌────────────┐  │ │
│  │   (Encrypted) │  │  │ Gemini   │  │  GCP TTS   │  │ │
│  │               │  │  │ 2.5 Pro  │  │  GCP STT   │  │ │
│  │               │  │  │ (Vision) │  │            │  │ │
│  │               │  │  └──────────┘  └────────────┘  │ │
│  └───────────────┘  └────────────────────────────────┘ │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│         DEVICE SERVICES (React Native Modules)           │
│  Camera | Microphone | GPS | Phone | SMS | Notifications│
└─────────────────────────────────────────────────────────┘
```

---

## 🎭 **DUAL ROLE SYSTEM - USER vs ADMIN**

### **USER Role - Care Receiver**
**WHO**: Elderly person, patient, child, anyone needing assistance

**CAPABILITIES**:
- ✅ Talk to AI companion (unlimited)
- ✅ Set alarms via voice/chat
- ✅ Make calls to approved contacts
- ✅ Send messages (if allowed by admin)
- ✅ Listen to stories, poems, music
- ✅ Get image analysis help
- ✅ Trigger emergency help
- ✅ View their own profile
- ❌ Cannot change admin settings
- ❌ Cannot add new contacts (if restricted)
- ❌ Cannot disable location tracking (if set by admin)

**DEFAULT UI**: Large buttons, voice-first, simplified

---

### **ADMIN Role - Care Giver**
**WHO**: Family member, nurse, caregiver, parent

**CAPABILITIES**:
- ✅ Everything USER can do
- ✅ Monitor USER activity
- ✅ View conversation logs (with consent)
- ✅ Block/allow features for USER
- ✅ Set time restrictions
- ✅ Manage emergency contacts
- ✅ Configure geofencing
- ✅ Receive alerts when USER needs help
- ✅ Remote check-in via notifications
- ✅ Export health/activity reports

**DEFAULT UI**: Dashboard with analytics, control panels

---

## 📁 **COMPLETE FOLDER STRUCTURE WITH DETAILED DESCRIPTIONS**

```
CareGiverApp/
│
├── android/                              # Android native modules
│   ├── app/
│   │   └── src/main/
│   │       ├── AndroidManifest.xml      # Permissions, background services
│   │       └── java/com/caregiverapp/
│   │           ├── MainActivity.java
│   │           ├── BackgroundLocationService.java
│   │           ├── AlarmReceiver.java
│   │           ├── VoiceWakeModule.java
│   │           └── CallModule.java
│   └── build.gradle
│
├── ios/                                  # iOS native modules
│   ├── CareGiverApp/
│   │   ├── AppDelegate.m
│   │   ├── Info.plist                   # Privacy permissions
│   │   ├── LocationManager.swift
│   │   └── BackgroundTaskManager.swift
│   └── Podfile
│
├── src/
│   │
│   ├── api/                              # External API Integration
│   │   ├── gemini/
│   │   │   ├── geminiTextApi.ts         # Text conversation with Gemini 2.5
│   │   │   ├── geminiVisionApi.ts       # Image analysis (medicine, docs, faces)
│   │   │   ├── geminiImageGenApi.ts     # Generate comforting/story images
│   │   │   └── geminiConfig.ts          # API key, model settings
│   │   ├── googleCloud/
│   │   │   ├── textToSpeech.ts          # GCP TTS (supports 100+ languages)
│   │   │   ├── speechToText.ts          # GCP STT (real-time streaming)
│   │   │   └── languageDetection.ts     # Auto-detect spoken language
│   │   └── index.ts                     # API orchestrator
│   │
│   ├── assets/                           # Static Resources
│   │   ├── images/
│   │   │   ├── onboarding/              # Welcome screens
│   │   │   │   ├── welcome_1.png        # "Talk to me in your language"
│   │   │   │   ├── welcome_2.png        # "I understand voice & text"
│   │   │   │   └── welcome_3.png        # "I'm here 24/7"
│   │   │   ├── icons/
│   │   │   │   ├── mic_icon.png         # Microphone
│   │   │   │   ├── camera_icon.png      # Camera
│   │   │   │   ├── alarm_icon.png       # Alarm
│   │   │   │   ├── emergency_icon.png   # SOS
│   │   │   │   └── admin_icon.png       # Admin shield
│   │   │   ├── avatars/
│   │   │   │   ├── ai_assistant.png     # AI avatar (friendly face)
│   │   │   │   └── default_user.png     # Default profile pic
│   │   │   └── illustrations/
│   │   │       ├── empty_chat.png       # "Start conversation"
│   │   │       ├── no_alarms.png        # "No alarms set"
│   │   │       └── listening.gif        # Animated listening indicator
│   │   ├── audio/
│   │   │   ├── notification_sounds/
│   │   │   │   ├── alarm_gentle.mp3
│   │   │   │   ├── alarm_urgent.mp3
│   │   │   │   └── emergency_alert.mp3
│   │   │   └── voice_prompts/           # Pre-recorded for offline
│   │   │       ├── hello_hi.mp3         # "नमस्ते"
│   │   │       ├── hello_ta.mp3         # "வணக்கம்"
│   │   │       └── listening_en.mp3     # "I'm listening"
│   │   ├── fonts/                        # Support all scripts
│   │   │   ├── NotoSans-Regular.ttf
│   │   │   ├── NotoSansDevanagari-Regular.ttf  # Hindi, Marathi, Nepali
│   │   │   ├── NotoSansTamil-Regular.ttf
│   │   │   ├── NotoSansTelugu-Regular.ttf
│   │   │   ├── NotoSansBengali-Regular.ttf
│   │   │   ├── NotoSansGujarati-Regular.ttf
│   │   │   ├── NotoSansKannada-Regular.ttf
│   │   │   ├── NotoSansMalayalam-Regular.ttf
│   │   │   ├── NotoSansGurmukhi-Regular.ttf    # Punjabi
│   │   │   ├── NotoSansArabic-Regular.ttf
│   │   │   └── NotoSansCJK-Regular.ttf         # Chinese, Japanese, Korean
│   │   └── animations/
│   │       └── lottie/
│   │           ├── listening_wave.json         # Audio wave animation
│   │           ├── thinking.json               # AI thinking animation
│   │           └── success.json                # Success checkmark
│   │
│   ├── components/                       # Reusable UI Components
│   │   ├── common/
│   │   │   ├── Button.tsx               # Multilingual labels, voice feedback
│   │   │   ├── Card.tsx                 # Content container
│   │   │   ├── Input.tsx                # Text input (supports regional keyboards)
│   │   │   ├── Modal.tsx                # Dialog boxes
│   │   │   ├── Loader.tsx               # Loading spinner with text
│   │   │   └── EmptyState.tsx           # No data placeholder
│   │   │
│   │   ├── voice/
│   │   │   ├── VoiceChatButton.tsx      # MAIN: Floating mic button (always visible)
│   │   │   │                            # Description: Large circular button
│   │   │   │                            # - Default: Mic icon, blue color
│   │   │   │                            # - Listening: Pulsing red, wave animation
│   │   │   │                            # - Processing: Spinner inside
│   │   │   │                            # - Tap to start/stop listening
│   │   │   ├── VoiceWaveform.tsx        # Real-time audio visualization
│   │   │   ├── SpeechBubble.tsx         # Show recognized text
│   │   │   └── TTSController.tsx        # Play/pause AI speech
│   │   │
│   │   ├── chat/
│   │   │   ├── ChatBubble.tsx           # Individual message
│   │   │   │                            # - User messages: Right side, blue
│   │   │   │                            # - AI messages: Left side, grey
│   │   │   │                            # - Show timestamp
│   │   │   │                            # - Support text + images
│   │   │   ├── ChatInputBar.tsx         # Bottom input (text + voice button)
│   │   │   ├── TypingIndicator.tsx      # "AI is thinking..." dots
│   │   │   ├── QuickActionChips.tsx     # Suggested actions (chips)
│   │   │   │                            # Example: ["Set Alarm", "Call Someone", "Emergency"]
│   │   │   └── ImageInChat.tsx          # Generated image display
│   │   │
│   │   ├── camera/
│   │   │   ├── CameraView.tsx           # Live camera preview
│   │   │   ├── CaptureButton.tsx        # Take photo button
│   │   │   ├── AnalysisOverlay.tsx      # Show analysis results on image
│   │   │   └── GalleryPicker.tsx        # Select from gallery
│   │   │
│   │   ├── alarm/
│   │   │   ├── AlarmCard.tsx            # Display single alarm
│   │   │   │                            # - Show time/location/person icon
│   │   │   │                            # - Toggle switch (active/inactive)
│   │   │   │                            # - Swipe to delete
│   │   │   ├── AlarmRingingModal.tsx    # Full-screen when alarm rings
│   │   │   │                            # - Large "Dismiss" and "Snooze" buttons
│   │   │   │                            # - Speaks reminder via TTS
│   │   │   │                            # - Cannot be dismissed easily (safety)
│   │   │   └── ActiveAlarmsBadge.tsx    # Show count of active alarms
│   │   │
│   │   ├── contact/
│   │   │   ├── ContactCard.tsx          # Single contact display
│   │   │   │                            # - Photo, name, relationship
│   │   │   │                            # - Quick call/message buttons
│   │   │   ├── EmergencyContactBanner.tsx # Highlighted emergency contacts
│   │   │   └── QuickDialGrid.tsx        # Speed dial grid (like phone)
│   │   │
│   │   ├── location/
│   │   │   ├── MapView.tsx              # Show current location
│   │   │   ├── GeofenceCircle.tsx       # Visual geofence boundary
│   │   │   └── LocationHistory.tsx      # Track visited places
│   │   │
│   │   ├── media/
│   │   │   ├── MusicPlayer.tsx          # Audio player
│   │   │   │                            # - Play/pause, next/prev
│   │   │   │                            # - Progress bar
│   │   │   │                            # - Volume control
│   │   │   ├── StoryCard.tsx            # Generated story display
│   │   │   └── PoemCard.tsx             # Generated poem display
│   │   │
│   │   └── admin/
│   │       ├── FeatureToggle.tsx        # ON/OFF switch for features
│   │       ├── TimeRestrictionSlider.tsx # Set time ranges
│   │       ├── ActivityLogCard.tsx      # Show user activity
│   │       ├── UsageLimitInput.tsx      # Set numeric limits
│   │       └── GeofenceEditor.tsx       # Draw safe zones on map
│   │
│   ├── config/                           # App Configuration
│   │   ├── constants.ts                 # Colors, sizes, timing
│   │   ├── languages.ts                 # Supported language codes
│   │   │                                # [en, hi, ta, te, bn, mr, gu, kn, ml, pa, es, ar, fr, zh]
│   │   ├── permissions.ts               # Android/iOS permission strings
│   │   ├── emergencyNumbers.ts          # Country-wise emergency numbers
│   │   │                                # India: 112, US: 911, UK: 999, etc.
│   │   └── apiKeys.ts                   # GCP API keys (DO NOT COMMIT)
│   │
│   ├── database/                         # Local SQLite Database
│   │   ├── schema.ts                    # All table definitions
│   │   ├── migrations.ts                # Version updates
│   │   ├── index.ts                     # Database initialization
│   │   └── queries/
│   │       ├── authQueries.ts           # Login, signup, session
│   │       ├── userQueries.ts           # User profile CRUD
│   │       ├── alarmQueries.ts          # Alarm CRUD + scheduling
│   │       ├── contactQueries.ts        # Contact CRUD
│   │       ├── conversationQueries.ts   # Chat history storage
│   │       ├── mediaQueries.ts          # Music, stories, poems
│   │       ├── restrictionQueries.ts    # Admin restrictions
│   │       ├── activityLogQueries.ts    # User activity tracking
│   │       └── settingsQueries.ts       # App settings
│   │
│   ├── hooks/                            # Custom React Hooks
│   │   ├── useAuth.ts                   # Login status, role (USER/ADMIN)
│   │   ├── useVoiceInput.ts             # Voice recognition, STT
│   │   ├── useVoiceOutput.ts            # TTS, speech synthesis
│   │   ├── useGeminiChat.ts             # Chat with Gemini 2.5
│   │   ├── useGeminiVision.ts           # Image analysis
│   │   ├── useImageGeneration.ts        # Generate images
│   │   ├── useCamera.ts                 # Camera access
│   │   ├── useLocation.ts               # GPS tracking
│   │   ├── useAlarms.ts                 # Alarm management
│   │   ├── useBackgroundService.ts      # Background tasks
│   │   ├── usePermissions.ts            # Runtime permissions
│   │   ├── useLanguage.ts               # Language switching
│   │   └── useNetworkStatus.ts          # Online/offline detection
│   │
│   ├── localization/                     # Internationalization (i18n)
│   │   ├── i18n.ts                      # i18next configuration
│   │   └── languages/                   # Translation files
│   │       ├── en.json                  # English
│   │       ├── hi.json                  # हिंदी (Hindi)
│   │       ├── ta.json                  # தமிழ் (Tamil)
│   │       ├── te.json                  # తెలుగు (Telugu)
│   │       ├── bn.json                  # বাংলা (Bengali)
│   │       ├── mr.json                  # मराठी (Marathi)
│   │       ├── gu.json                  # ગુજરાતી (Gujarati)
│   │       ├── kn.json                  # ಕನ್ನಡ (Kannada)
│   │       ├── ml.json                  # മലയാളം (Malayalam)
│   │       ├── pa.json                  # ਪੰਜਾਬੀ (Punjabi)
│   │       ├── es.json                  # Español (Spanish)
│   │       ├── ar.json                  # العربية (Arabic)
│   │       ├── fr.json                  # Français (French)
│   │       └── zh.json                  # 中文 (Chinese)
│   │
│   ├── navigation/                       # App Navigation
│   │   ├── RootNavigator.tsx            # Main navigation container
│   │   ├── AuthStack.tsx                # Login, signup screens
│   │   ├── UserStack.tsx                # USER role screens
│   │   ├── AdminStack.tsx               # ADMIN role screens
│   │   └── types.ts                     # Navigation types
│   │
│   ├── screens/                          # All App Screens (DETAILED BELOW)
│   │   ├── auth/
│   │   ├── user/
│   │   ├── admin/
│   │   └── shared/
│   │
│   ├── services/                         # Business Logic Services
│   │   ├── VoiceCommandProcessor.ts     # Parse voice → action
│   │   │                                # Input: "Call Mom"
│   │   │                                # Output: { action: 'CALL', contact: 'Mom' }
│   │   ├── IntentClassifier.ts          # Classify user intent via Gemini
│   │   │                                # Intent types: ALARM, CALL, CHAT, EMERGENCY, etc.
│   │   ├── AlarmScheduler.ts            # Schedule alarms (time/location/person)
│   │   ├── LocationMonitor.ts           # Background location tracking
│   │   ├── PersonDetector.ts            # Listen for person names in conversation
│   │   ├── EmergencyHandler.ts          # Trigger emergency protocol
│   │   ├── ContextManager.ts            # Maintain conversation context
│   │   ├── NotificationService.ts       # Local notifications
│   │   └── AdminRestrictionEnforcer.ts  # Check if action allowed for USER
│   │
│   ├── store/                            # State Management (Redux Toolkit)
│   │   ├── store.ts                     # Redux store configuration
│   │   └── slices/
│   │       ├── authSlice.ts             # Auth state (isLoggedIn, role, userId)
│   │       ├── chatSlice.ts             # Chat messages, history
│   │       ├── alarmSlice.ts            # Active alarms
│   │       ├── contactSlice.ts          # Contacts list
│   │       ├── settingsSlice.ts         # App settings (language, theme)
│   │       └── restrictionSlice.ts      # Admin restrictions (for USER)
│   │
│   ├── styles/                           # Styling
│   │   ├── theme.ts                     # Colors, fonts, spacing
│   │   ├── globalStyles.ts              # Common styles
│   │   └── responsive.ts                # Screen size utilities
│   │
│   ├── types/                            # TypeScript Types
│   │   ├── api.types.ts                 # API request/response types
│   │   ├── database.types.ts            # Database models
│   │   ├── navigation.types.ts          # Navigation params
│   │   └── common.types.ts              # Shared types
│   │
│   ├── utils/                            # Utility Functions
│   │   ├── dateTime.ts                  # Date formatting, timezone
│   │   ├── encryption.ts                # Encrypt sensitive data
│   │   ├── validation.ts                # Input validation
│   │   ├── fileSystem.ts                # File read/write operations
│   │   ├── logger.ts                    # Error logging
│   │   └── helpers.ts                   # General helpers
│   │
│   └── App.tsx                           # Root component
│
├── .env                                  # Environment variables
├── .gitignore                           
├── package.json                          # Dependencies
├── tsconfig.json                         # TypeScript config
├── README.md                             # Project documentation
└── app.json                              # React Native config
```

---

## 🎨 **DETAILED SCREEN-BY-SCREEN BREAKDOWN**

---

## 🔐 **AUTHENTICATION SCREENS**

### **Screen 1: SplashScreen.tsx**
**Location**: `src/screens/auth/SplashScreen.tsx`

**Purpose**: App loading screen, check auth status

**UI LAYOUT**:
```
┌─────────────────────────────────┐
│                                 │
│                                 │
│         [App Logo/Icon]         │
│                                 │
│      AI Care-Giver 🤖❤️         │
│                                 │
│     "Your 24/7 Companion"       │
│                                 │
│         [Loading dots]          │
│                                 │
└─────────────────────────────────┘
```

**FUNCTIONALITY**:
- Check if user is logged in
- Load app settings from database
- If logged in → Navigate to appropriate home (User/Admin)
- If not logged in → Navigate to Language Selection

**NO VOICE/CHAT** on this screen

---

### **Screen 2: LanguageSelectionScreen.tsx**
**Location**: `src/screens/auth/LanguageSelectionScreen.tsx`

**Purpose**: First-time language selection (critical for voice/chat)

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│                                     │
│   🌍 Choose Your Language           │
│   अपनी भाषा चुनें                    │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🇮🇳 हिंदी (Hindi)            │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ 🇮🇳 தமிழ் (Tamil)            │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ 🇮🇳 తెలుగు (Telugu)          │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ 🇮🇳 বাংলা (Bengali)          │   │
│  └─────────────────────────────┘   │
│  ┌─────────────────────────────┐   │
│  │ 🇺🇸 English                  │   │
│  └─────────────────────────────┘   │
│                                     │
│         [More Languages ▼]          │
│                                     │
│   Or say: "मैं हिंदी बोलता हूं"     │
│   🎤 [Tap mic to speak language]    │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:
- Display popular languages first (based on device location)
- Large, tap-friendly buttons
- Each button shows language in native script
- **Voice Option**: User can speak "I speak Hindi" in any language
- Gemini 2.5 detects language from speech
- Selected language stored in database
- Navigate to Onboarding

**VOICE COMMANDS SUPPORTED**:
- "मैं हिंदी बोलता हूं" → Selects Hindi
- "I speak English" → Selects English
- "நான் தமிழ் பேசுகிறேன்" → Selects Tamil

---

### **Screen 3: OnboardingScreen.tsx**
**Location**: `src/screens/auth/OnboardingScreen.tsx`

**Purpose**: Introduce app features (3-4 slides)

**UI LAYOUT** (Swipeable slides):

**Slide 1:**
```
┌─────────────────────────────────┐
│                                 │
│     [Illustration: Person       │
│      talking to phone]          │
│                                 │
│   Talk to Me in Any Language    │
│   किसी भी भाषा में बात करें      │
│                                 │
│  I understand voice and text    │
│                                 │
│         ● ○ ○ ○                 │
│                                 │
│  [Skip]            [Next →]     │
└─────────────────────────────────┘
```

**Slide 2:**
```
┌─────────────────────────────────┐
│                                 │
│     [Illustration: Alarm        │
│      clock + location pin]      │
│                                 │
│  Smart Reminders Everywhere     │
│                                 │
│  Time, place, or person-based   │
│                                 │
│         ○ ● ○ ○                 │
│                                 │
│  [Skip]            [Next →]     │
└─────────────────────────────────┘
```

**Slide 3:**
```
┌─────────────────────────────────┐
│                                 │
│     [Illustration: SOS button   │
│      with contact icons]        │
│                                 │
│    Emergency Help Instantly     │
│                                 │
│  Just say "Help" or "Emergency" │
│                                 │
│         ○ ○ ● ○                 │
│                                 │
│  [Skip]            [Next →]     │
└─────────────────────────────────┘
```

**Slide 4:**
```
┌─────────────────────────────────┐
│                                 │
│     [Illustration: AI with      │
│      heart, camera, mic]        │
│                                 │
│    I See, Hear, and Understand  │
│                                 │
│  Show me medicine, ask anything │
│                                 │
│         ○ ○ ○ ●                 │
│                                 │
│              [Get Started]      │
└─────────────────────────────────┘
```

**FUNCTIONALITY**:
- Horizontal swipe or auto-advance
- Skip button to go directly to login
- Get Started → Navigate to Role Selection

**NO VOICE/CHAT** on this screen

---

### **Screen 4: RoleSelectionScreen.tsx**
**Location**: `src/screens/auth/RoleSelectionScreen.tsx`

**Purpose**: Choose USER or ADMIN role before signup/login

**UI LAYOUT**:
```
┌─────────────────────────────────┐
│                                 │
│      Who are you?               │
│      आप कौन हैं?                 │
│                                 │
│                                 │
│  ┌─────────────────────────┐   │
│  │      👤 USER              │   │
│  │                           │   │
│  │  I need care & help       │   │
│  │  मुझे देखभाल चाहिए         │   │
│  │                           │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │      🛡️ ADMIN             │   │
│  │                           │   │
│  │  I manage someone's care  │   │
│  │  मैं किसी की देखभाल       │   │
│  │  करता/करती हूं             │   │
│  └─────────────────────────┘   │
│                                 │
│                                 │
│  Or say: "I am a user"          │
│  🎤 [Voice input]               │
│                                 │
└─────────────────────────────────┘
```

**FUNCTIONALITY**:
- Two large cards (USER and ADMIN)
- Tap card to select role
- **Voice Option**: Say "I am a user" or "मैं उपयोगकर्ता हूं"
- Store role selection
- Navigate to Signup/Login based on selection

**VOICE COMMANDS**:
- "I am a user" / "मैं यूज़र हूं" → USER role
- "I am admin" / "मैं एडमिन हूं" → ADMIN role

---

### **Screen 5: SignupScreen.tsx**
**Location**: `src/screens/auth/SignupScreen.tsx`

**Purpose**: Create new account (minimal info, conversational)

**UI LAYOUT**:
```
┌─────────────────────────────────┐
│  [← Back]           Signup       │
│                                 │
│  Tell me about yourself         │
│  अपने बारे में बताएं             │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 👤 Your Name              │   │
│  │ [___________________]     │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 🔑 Create a PIN           │   │
│  │    (4 digits)             │   │
│  │ [_ _ _ _]                 │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 📞 Emergency Contact       │   │
│  │    (Optional)             │   │
│  │ [___________________]     │   │
│  └─────────────────────────┘   │
│                                 │
│                                 │
│     [Create Account]            │
│                                 │
│  Or just say: "My name is Raj,  │
│  PIN 1234"                      │
│  🎤 [Voice signup]              │
│                                 │
└─────────────────────────────────┘
```

**FUNCTIONALITY**:
- **For USER**: Simple 4-digit PIN (elderly-friendly)
- **For ADMIN**: Strong password required
- Name is mandatory
- Emergency contact optional (can add later)
- **Voice Signup**: 
  - User says: "मेरा नाम राज है, PIN 1234"
  - Gemini extracts: name="Raj", PIN="1234"
  - App confirms: "Great! Creating account for Raj"
- Store encrypted credentials in SQLite
- Navigate to Home (User/Admin based on role)

**VOICE COMMANDS**:
- "My name is [Name], PIN [number]"
- "मेरा नाम [नाम] है, पिन [संख्या]"

---

### **Screen 6: LoginScreen.tsx**
**Location**: `src/screens/auth/LoginScreen.tsx`

**Purpose**: Login for existing users

**UI LAYOUT**:
```
┌─────────────────────────────────┐
│  [← Back]           Login        │
│                                 │
│       Welcome Back! 👋           │
│       वापसी पर स्वागत है!        │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 👤 Your Name              │   │
│  │ [___________________]     │   │
│  └─────────────────────────┘   │
│                                 │
│  ┌─────────────────────────┐   │
│  │ 🔑 PIN / Password         │   │
│  │ [___________________]     │   │
│  └─────────────────────────┘   │
│                                 │
│                                 │
│     [Login]                     │
│                                 │
│  Forgot PIN?                    │
│                                 │
│  Don't have account? [Signup]   │
│                                 │
│  Or say: "Login as Raj"         │
│  🎤 [Voice login]               │
│                                 │
└─────────────────────────────────┘
```

**FUNCTIONALITY**:
- Simple login (name + PIN/password)
- "Forgot PIN?" → Security questions
- **Voice Login**:
  - Say: "Login as Raj"
  - App fetches user, asks: "Please say your PIN"
  - User speaks PIN digits
  - Voice recognition converts to numbers
- After login → Navigate to Home

**VOICE COMMANDS**:
- "Login as [Name]"
- "लॉगिन राज" (Login Raj)

---

## 👤 **USER ROLE SCREENS**

---

### **Screen 7: UserHomeScreen.tsx**
**Location**: `src/screens/user/UserHomeScreen.tsx`

**Purpose**: Main dashboard for USER - The heart of the app, fully voice/chat controlled

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│ ☰   Good Morning, Raj! 👋      [⚙️] │
│     शुभ प्रभात राज!                 │
├─────────────────────────────────────┤
│                                     │
│  ┌─────────────────────────────┐   │
│  │  💬 CHAT WITH AI             │   │
│  │                              │   │
│  │  [Previous messages...]      │   │
│  │                              │   │
│  │  AI: How can I help today?   │   │
│  │      मैं आज कैसे मदद कर    │   │
│  │      सकता हूं?                │   │
│  │                              │   │
│  │  [Type or say anything...]   │   │
│  │  🎤 [Hold to speak]  [Send]  │   │
│  └─────────────────────────────┘   │
│                                     │
│  Quick Actions:                     │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐  │
│  │ ⏰  │ │ 📞  │ │ 📸  │ │ 🆘  │  │
│  │Alarm│ │Call │ │Camera│ │Help│  │
│  └─────┘ └─────┘ └─────┘ └─────┘  │
│                                     │
│  Active Alarms: 3                   │
│  ┌─────────────────────────────┐   │
│  │ ⏰ Medicine at 8:00 AM       │   │
│  │ 📍 Hospital reminder         │   │
│  │ 👤 Mom will arrive at 6 PM   │   │
│  └─────────────────────────────┘   │
│                                     │
│                                     │
│       🎤 ALWAYS LISTENING           │
│   (Say anything, I'll respond)      │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. CHAT INTERFACE (Primary Interaction)**
- Center of screen: Scrollable chat messages
- User messages on right (blue bubbles)
- AI responses on left (grey bubbles)
- **Always active** - user can type or speak anytime
- Gemini 2.5 Pro powers all conversations
- Context retained across messages

**2. VOICE INPUT (Bottom Button)**
- Large microphone button (always visible)
- **Hold to speak** mode
- Real-time speech-to-text
- Visual feedback (wave animation)
- Supports 100+ languages
- Auto-detects language

**3. QUICK ACTION BUTTONS**
- Four large icon buttons:
  - **⏰ Alarm**: Quick access to alarm creation
  - **📞 Call**: Quick dial contacts
  - **📸 Camera**: Analyze images
  - **🆘 Help**: Emergency button
- Tapping buttons opens respective screens
- **Voice alternative**: Say the action

**4. ACTIVE ALARMS WIDGET**
- Show next 3 upcoming alarms
- Tap to view all alarms
- Swipe alarm to dismiss/snooze

**5. HAMBURGER MENU (Top Left)**
- Profile
- Settings
- Contacts
- Music Player
- Logout

**6. SETTINGS ICON (Top Right)**
- Quick settings
- Language change
- Volume control

**CONVERSATIONAL EXAMPLES**:

**Example 1: Setting Alarm via Chat**
```
USER (types): "हर रोज़ सुबह 8 बजे दवा की याद दिलाओ"
              (Remind me to take medicine every day at 8 AM)

AI: "बिल्कुल! मैंने आपके लिए रोज़ाना सुबह 8 बजे दवा लेने की याद दिलाने वाला अलार्म बना दिया है। 💊⏰"
    (Sure! I've created a daily alarm at 8 AM to remind you to take medicine.)

[Alarm automatically created in database]

AI: "क्या मुझे कुछ और करना चाहिए?"
    (Should I do anything else?)
```

**Example 2: Emergency via Voice**
```
USER (speaks): "Emergency!" or "मदद!" or "Help!"

[App immediately:]
1. Shows emergency alert screen
2. Sends SMS to all emergency contacts
3. Includes GPS location
4. Plays loud alarm sound

AI (speaks): "Emergency alert sent to all your contacts. Stay calm, help is coming."
             "आपातकालीन संदेश भेज दिया गया है। शांत रहें।"
```

**Example 3: Image Analysis via Chat**
```
USER: *Taps camera button, takes photo of medicine bottle*
      (types): "ये दवा किस लिए है?"
               (What is this medicine for?)

[Photo sent to Gemini 2.5 Vision API]

AI (after 2-3 seconds): 
"यह Paracetamol 500mg है। इसका उपयोग बुखार और दर्द के लिए किया जाता है। 
खुराक: दिन में 3 बार, खाना खाने के बाद। 
⚠️ याद रखें: 24 घंटे में 8 गोलियों से ज्यादा न लें।"

(This is Paracetamol 500mg. Used for fever and pain.
Dosage: 3 times daily, after meals.
⚠️ Remember: Don't exceed 8 tablets in 24 hours.)

[Shows analyzed image with labels overlaid]
```

**Example 4: Location Alarm via Voice**
```
USER (speaks): "जब मैं अस्पताल पहुंचूं तो मुझे बताना"
               (Tell me when I reach the hospital)

AI: "कौन सा अस्पताल? या मैं आपकी वर्तमान लोकेशन के पास वाले अस्पताल ढूंढ दूं?"
    (Which hospital? Or should I find hospitals near your current location?)

USER: "Apollo Hospital"

AI: "ठीक है! मुझे Apollo Hospital मिल गया। जब आप वहां से 100 मीटर दूर होंगे तो मैं आपको याद दिला दूंगा। 📍"
    (Got it! Found Apollo Hospital. I'll remind you when you're 100m away.)

[Location alarm created with geofencing]
```

**Example 5: Person Alarm via Chat**
```
USER: "मेरे बेटे को आज शाम 6 बजे आना है"
      (My son is coming today at 6 PM)

AI: "समझ गया! क्या मुझे 6 बजे आपको याद दिलाना है कि आपके बेटे को आना है?"
    (Got it! Should I remind you at 6 PM that your son is coming?)

USER: "हाँ"

AI: "बिल्कुल! मैंने शाम 6 बजे के लिए अलार्म सेट कर दिया। मैं आपको बताऊंगा। 👨‍👦"
    (Sure! Alarm set for 6 PM. I'll remind you.)

[Person alarm created: "Son arriving at 6 PM"]
```

**Example 6: Calling Someone**
```
USER (speaks): "मम्मी को कॉल करो"
               (Call Mom)

AI: "आपकी मम्मी को कॉल कर रहा हूं..." 
    (Calling your Mom...)

[Looks up "Mom" in contacts]
[Initiates phone call to Mom's number]

[If multiple "Mom" entries exist:]
AI: "मुझे 2 contacts मिले 'मम्मी' नाम से। कौन सा नंबर?"
    (Found 2 contacts named 'Mom'. Which number?)
    - Mom Home: +91-9876543210
    - Mom Mobile: +91-9988776655

USER: "Mobile"
[Calls Mom Mobile]
```

**Example 7: Companionship**
```
USER: "मुझे बोर हो रहा है"
      (I'm feeling bored)

AI: "क्या मैं आपको कोई कहानी सुनाऊं? या कोई मज़ेदार कविता? 📖"
    (Should I tell you a story? Or a funny poem?)

USER: "कहानी सुनाओ"

AI: "ठीक है! एक बार की बात है... राज नाम का एक बुजुर्ग व्यक्ति..."

[Gemini generates story with user's name]
[TTS narrates story]
[Shows generated illustration of the story scene]
```

**Example 8: Mood-Based Image Generation**
```
USER: "मैं उदास हूं"
      (I'm sad)

AI: "मुझे यह सुनकर दुख हुआ। क्या मैं आपके लिए कुछ सुखदायक बना सकता हूं?"
    (Sorry to hear that. Can I create something soothing for you?)

USER: "हाँ"

AI: "बस एक सेकंड..."
    (Just a second...)

[Generates peaceful nature image via Gemini]
[Shows image of mountains, sunset, peaceful scenery]

AI: "यह देखें। गहरी सांस लें। सब ठीक हो जाएगा। 🌄💙"
    (Look at this. Take a deep breath. Everything will be okay.)
```

**VOICE COMMANDS THAT WORK FROM HOME**:
- "Set alarm for [time]" / "अलार्म सेट करो"
- "Call [name]" / "[नाम] को कॉल करो"
- "Open camera" / "कैमरा खोलो"
- "Emergency" / "मदद"
- "Play music" / "गाना बजाओ"
- "Tell me a story" / "कहानी सुनाओ"
- "What's the time?" / "समय क्या हुआ?"
- "Where am I?" / "मैं कहां हूं?"
- "Show my alarms" / "मेरे अलार्म दिखाओ"

**PERMISSIONS REQUIRED**:
- Microphone (for voice)
- Location (for location alarms)
- Camera (for image analysis)
- Contacts (for calling)
- Notifications (for alarms)

---

### **Screen 8: AlarmManagementScreen.tsx**
**Location**: `src/screens/user/AlarmManagementScreen.tsx`

**Purpose**: View all alarms, manage via voice/chat

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│ [← Back]   My Alarms            [+] │
│                                     │
│  💬 "Create alarms by chatting      │
│      below or tap + button"         │
│      "नीचे बात करके अलार्म बनाएं"  │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ Chat: Set Alarm               │   │
│  │                              │   │
│  │ AI: What kind of alarm?       │   │
│  │ - ⏰ Time-based               │   │
│  │ - 📍 Location-based           │   │
│  │ - 👤 Person-based             │   │
│  │                              │   │
│  │ [Type or speak...]   🎤       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ━━━ Active Alarms (5) ━━━          │
│                                     │
│  ⏰ TIME ALARMS                     │
│  ┌─────────────────────────────┐   │
│  │ 💊 Medicine                   │   │
│  │ 8:00 AM • Daily              │   │
│  │ [🔔 ON]  [✏️ Edit] [🗑️]       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🧘 Yoga Time                  │   │
│  │ 7:00 AM • Mon, Wed, Fri      │   │
│  │ [🔔 ON]  [✏️ Edit] [🗑️]       │   │
│  └─────────────────────────────┘   │
│                                     │
│  📍 LOCATION ALARMS                 │
│  ┌─────────────────────────────┐   │
│  │ 🏥 Hospital Reminder          │   │
│  │ Apollo Hospital              │   │
│  │ Notify when within 100m      │   │
│  │ [🔔 ON]  [✏️ Edit] [🗑️]       │   │
│  └─────────────────────────────┘   │
│                                     │
│  👤 PERSON ALARMS                   │
│  ┌─────────────────────────────┐   │
│  │ 👨‍👦 Son Arrival                │   │
│  │ Today at 6:00 PM             │   │
│  │ [🔔 ON]  [✏️ Edit] [🗑️]       │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. CHAT-BASED ALARM CREATION** (Primary Method)
- Top section: Chat interface
- AI asks clarifying questions
- User provides details conversationally
- Alarm created automatically

**2. TRADITIONAL + BUTTON** (Secondary)
- Opens modal with alarm type selection
- Still uses chat within modal

**3. ALARM CARDS**
- Show alarm details
- Toggle ON/OFF
- Edit button → Opens edit chat
- Delete button → Confirms deletion
- Grouped by type

**4. SWIPE ACTIONS**
- Swipe left: Delete
- Swipe right: Edit

**CONVERSATIONAL FLOWS**:

**Flow 1: Time Alarm Creation**
```
USER: "हर रोज़ सुबह 6 बजे जगाओ"
      (Wake me up every morning at 6)

AI: "बिल्कुल! सुबह 6 बजे का अलार्म। मुझे क्या बोलना चाहिए जब यह बजे?"
    (Sure! 6 AM alarm. What should I say when it rings?)

USER: "उठो, योग का समय हो गया"
      (Wake up, time for yoga)

AI: "परफेक्ट! रोज़ाना सुबह 6 बजे योग का रिमाइंडर सेट कर दिया। ✅"
    (Perfect! Daily 6 AM yoga reminder set. ✅)

[Alarm appears in list immediately]
```

**Flow 2: Location Alarm Creation**
```
USER: "जब मैं दवा की दुकान के पास पहुंचूं तो बोलना"
      (Tell me when I reach the medicine shop)

AI: "कौन सी दवा की दुकान? या मैं आपके पास वाली ढूंढ दूं?"
    (Which medicine shop? Or should I find one nearby?)

USER: "पास वाली"

AI: "मुझे 3 pharmacy मिलीं आपके पास:
    1. Apollo Pharmacy - 500m
    2. MedPlus - 800m  
    3. Local Chemist - 1.2km
    
    कौन सी?"
    (Found 3 pharmacies nearby. Which one?)

USER: "Apollo"

AI: "ठीक है! जब आप Apollo Pharmacy से 100 मीटर दूर होंगे तो मैं बताऊंगा। 📍"
    (Okay! I'll notify when you're 100m from Apollo Pharmacy.)

[Location alarm created with geofence]
```

**Flow 3: Person Alarm via Name Detection**
```
[USER is having a conversation with AI]

USER: "मेरी बेटी को आज शाम आना है"
      (My daughter is coming this evening)

AI: "अच्छा! क्या आप चाहते हैं कि मैं आपको याद दिलाऊं?"
    (Nice! Do you want me to remind you?)

USER: "हाँ, 5 बजे"

AI: "बिल्कुल! 5 बजे शाम को मैं आपको बताऊंगा कि आपकी बेटी आने वाली है। 👧"
    (Sure! At 5 PM I'll remind you that your daughter is coming.)

[Person alarm created: "Daughter arriving at 5 PM"]
```

**Flow 4: Editing Alarm**
```
USER: "8 बजे वाली दवा की याद को 9 बजे कर दो"
      (Change the 8 o'clock medicine reminder to 9)

AI: "समझ गया। दवा का रिमाइंडर अब सुबह 9 बजे बजेगा। ✅"
    (Got it. Medicine reminder will now ring at 9 AM.)

[Alarm updated in database]
```

**Flow 5: Deleting Alarm**
```
USER: "Yoga alarm delete कर दो"

AI: "क्या आप confirm करते हैं? योग का अलार्म हटा दूं?"
    (Confirm? Remove yoga alarm?)

USER: "हाँ"

AI: "योग अलार्म हटा दिया गया।"
    (Yoga alarm removed.)

[Alarm deleted, disappears from list]
```

**VOICE COMMANDS**:
- "Create alarm" / "अलार्म बनाओ"
- "Set reminder for [time/place/person]"
- "Delete [alarm name]"
- "Edit [alarm name]"
- "Show all alarms" / "सभी अलार्म दिखाओ"
- "Turn off [alarm name]"

---

### **Screen 9: ContactsScreen.tsx**
**Location**: `src/screens/user/ContactsScreen.tsx`

**Purpose**: Manage contacts, make calls/messages via voice

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│ [← Back]   Contacts             [+] │
│                                     │
│  💬 "Call or message by saying:     │
│      'Call Mom' or 'Message Dad'"   │
│                                     │
│  🔍 [Search contacts...] 🎤          │
│                                     │
│  ⭐ EMERGENCY CONTACTS               │
│  ┌─────────────────────────────┐   │
│  │ 👨 Son - Rahul                │   │
│  │ +91-9876543210               │   │
│  │ [📞 Call]  [💬 Message]       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 👩 Daughter - Priya           │   │
│  │ +91-9988776655               │   │
│  │ [📞 Call]  [💬 Message]       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ━━━ ALL CONTACTS (12) ━━━          │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 👴 Brother - Suresh           │   │
│  │ +91-9123456789               │   │
│  │ [📞 Call]  [💬 Message]       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 👩‍⚕️ Doctor - Dr. Sharma      │   │
│  │ +91-9111222333               │   │
│  │ [📞 Call]  [💬 Message]       │   │
│  └─────────────────────────────┘   │
│                                     │
│  [... more contacts ...]            │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. VOICE-ACTIVATED CALLING** (Primary)
- User says: "Call [Name]"
- App finds contact
- Asks confirmation
- Initiates call

**2. VOICE-ACTIVATED MESSAGING**
- User says: "Message [Name]"
- App asks: "What message?"
- User dictates message
- App confirms and sends

**3. SEARCH BAR**
- Type name
- **Voice search**: Tap mic, say name
- Filters list in real-time

**4. EMERGENCY CONTACTS**
- Marked with ⭐
- Shown at top
- Used in emergency protocol

**5. QUICK ACTIONS**
- Each contact card has Call/Message buttons
- Large, tap-friendly

**6. ADD CONTACT (+)**
- Opens chat to add contact
- Voice-based entry

**CONVERSATIONAL FLOWS**:

**Flow 1: Making a Call**
```
USER: "मम्मी को कॉल करो"
      (Call Mom)

AI: "आपकी मम्मी (Sunita: +91-9876543210) को कॉल कर रहा हूं..."
    (Calling your Mom (Sunita: +91-9876543210)...)

[Initiates phone call]

[After call ends]
AI: "Call ended. Duration: 5 minutes 32 seconds"
```

**Flow 2: Sending Message**
```
USER: "बेटे को message भेजो"
      (Send message to son)

AI: "ठीक है। Rahul को क्या message भेजना है?"
    (Okay. What message for Rahul?)

USER: "मैं घर पहुंच गया हूं"
      (I've reached home)

AI: "Message भेज दिया: 'मैं घर पहुंच गया हूं' → Rahul"
    (Message sent: 'I've reached home' → Rahul)

[SMS sent via device]
```

**Flow 3: Adding Contact via Voice**
```
USER: "नया contact add करो"
      (Add new contact)

AI: "बिल्कुल! नाम क्या है?"
    (Sure! What's the name?)

USER: "Doctor Sharma"

AI: "Phone number?"

USER: "9111222333"

AI: "Relationship or notes? (optional)"

USER: "Family doctor"

AI: "Perfect! Dr. Sharma saved as Family doctor. 
    क्या यह emergency contact है?"
    (Is this an emergency contact?)

USER: "नहीं"

AI: "Contact saved! ✅"
```

**Flow 4: Ambiguous Name Resolution**
```
USER: "Amit को call करो"

AI: "मुझे 2 contacts मिले 'Amit' नाम से:
    1. Amit Kumar (Brother) - +91-9123456789
    2. Amit Singh (Friend) - +91-9988776655
    
    कौन सा?"
    (Found 2 contacts named 'Amit'. Which one?)

USER: "Brother"

AI: "Amit Kumar को call कर रहा हूं..."
    (Calling Amit Kumar...)
```

**Flow 5: Emergency Contact Management**
```
USER: "Rahul को emergency contact बनाओ"
      (Make Rahul an emergency contact)

AI: "Done! Rahul is now marked as emergency contact. ⭐
    Emergency के समय उसे automatic message भेज दिया जाएगा।"
    (During emergency, he'll get automatic message.)
```

**VOICE COMMANDS**:
- "Call [name]" / "[नाम] को कॉल करो"
- "Message [name]" / "[नाम] को मैसेज भेजो"
- "Add contact" / "नया contact ऐड करो"
- "Show emergency contacts"
- "Make [name] emergency contact"
- "Delete contact [name]"

---

### **Screen 10: CameraAnalysisScreen.tsx**
**Location**: `src/screens/user/CameraAnalysisScreen.tsx`

**Purpose**: Capture images, analyze via Gemini 2.5 Vision

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│ [← Back]   AI Vision                │
│                                     │
│  💬 "Point camera and ask anything" │
│      "कैमरा दिखाओ और कुछ भी पूछो"  │
│                                     │
│  ┌─────────────────────────────┐   │
│  │                              │   │
│  │     [LIVE CAMERA FEED]       │   │
│  │                              │   │
│  │                              │   │
│  │                              │   │
│  │                              │   │
│  │                              │   │
│  └─────────────────────────────┘   │
│                                     │
│  [📸 Capture]  [🖼️ Gallery]         │
│                                     │
│  Quick Questions:                   │
│  ┌──────────────────────────────┐  │
│  │ "What is this?" • "ये क्या है?"│  │
│  │ "Read this text" • "इसे पढ़ो" │  │
│  │ "Is this medicine safe?"      │  │
│  │ "What should I eat?"          │  │
│  └──────────────────────────────┘  │
│                                     │
│  Or type your question:             │
│  [____________________________] 🎤  │
│                                     │
│  Recent Analyses:                   │
│  ┌─────────────────────────────┐   │
│  │ [📸 Thumbnail] Paracetamol    │   │
│  │ 5 minutes ago                │   │
│  └─────────────────────────────┘   │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. LIVE CAMERA FEED**
- Real-time preview
- Auto-focus
- Flash toggle

**2. VOICE QUESTIONS WHILE SHOWING**
- Hold up medicine bottle
- Say: "ये दवा किस लिए है?"
- Gemini 2.5 Vision analyzes + responds

**3. CAPTURE & ASK**
- Take photo first
- Then ask question about it
- Or ask question first, then capture

**4. GALLERY PICKER**
- Select existing photo
- Analyze old images

**5. QUICK QUESTION CHIPS**
- Tap common questions
- Or voice custom question

**6. ANALYSIS HISTORY**
- See past analyzed images
- Tap to view full analysis

**USE CASES**:

**Use Case 1: Medicine Identification**
```
[User points camera at medicine bottle]

USER (speaks): "ये दवा किस लिए है?"
               (What is this medicine for?)

[Captures image automatically when user stops speaking]

AI (after 2-3 seconds):
"यह Paracetamol 500mg की tablet है।

उपयोग: बुखार और दर्द के लिए
खुराक: 1-2 tablet हर 4-6 घंटे में
Max: दिन में 8 tablets से ज्यादा नहीं

⚠️ चेतावनी:
- खाली पेट न लें
- शराब के साथ न लें
- अगर liver की problem है तो doctor से पूछें

Expiry: March 2026 ✅ (Safe to use)"

[Shows image with labeled parts highlighted]
```

**Use Case 2: Document Reading**
```
[User shows prescription to camera]

USER: "ये prescription क्या कह रही है?"
      (What does this prescription say?)

AI: "Dr. Sharma ने ये medicines prescribe की हैं:

1. Amoxicillin 500mg
   - 1 capsule, दिन में 3 बार, 5 दिन तक
   
2. Paracetamol 650mg
   - बुखार होने पर 1 tablet
   
3. Cetirizine 10mg
   - रात को सोने से पहले 1 tablet

Next visit: 15 December 2024"

[Would you like me to set reminders for these medicines?]
```

**Use Case 3: Food Recognition**
```
[User shows plate of food]

USER: "ये खाने में कितनी calories हैं?"
      (How many calories in this food?)

AI: "मुझे दिख रहा है:
- Rice (1 cup) ~ 200 calories
- Dal (1 bowl) ~ 150 calories
- Mixed vegetables ~ 100 calories
- Roti (2) ~ 140 calories

Total: लगभग 590 calories

यह healthy balanced meal है! 
Protein ✅ Carbs ✅ Fiber ✅"

[Shows image with food items circled]
```

**Use Case 4: Text Extraction**
```
[User shows electricity bill]

USER: "इस bill को पढ़ो"
      (Read this bill)

AI: "यह आपका electricity bill है:

Bill Amount: ₹1,250
Due Date: 30 November 2024
Consumer Number: 123456789
Units Consumed: 280 kWh

क्या मैं due date के लिए reminder set कर दूं?"
(Should I set a reminder for due date?)
```

**Use Case 5: Face Recognition**
```
[User points camera at visitor]

USER: "ये कौन है?"
      (Who is this?)

AI: "मुझे face recognition allowed नहीं है privacy के लिए।
    
    लेकिन अगर आप चाहें तो मैं उनकी photo save कर सकता हूं 
    और नाम याद रख सकता हूं।"
    
    (Face recognition not allowed for privacy.
    But I can save their photo and remember name if you want.)
```

**VOICE COMMANDS**:
- "What is this?" / "ये क्या है?"
- "Read this" / "इसे पढ़ो"
- "Analyze this image"
- "What medicine is this?"
- "Is this food healthy?"
- "How many calories?"
- "Translate this text"

**GEMINI 2.5 VISION CAPABILITIES USED**:
- OCR (Optical Character Recognition)
- Object detection
- Text extraction (multilingual)
- Medicine/pill identification
- Food recognition
- Document analysis
- Scene understanding
- Color detection

---

### **Screen 11: StoryCompanionScreen.tsx**
**Location**: `src/screens/user/StoryCompanionScreen.tsx`

**Purpose**: Generate stories, poems, comforting images for companionship

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│ [← Back]   My Companion          [♪]│
│                                     │
│  💬 "Tell me a story, poem, or      │
│      I'll create something for you" │
│                                     │
│  What would you like?               │
│  ┌──────┐ ┌──────┐ ┌──────┐       │
│  │ 📖   │ │ ✍️   │ │ 🎨   │       │
│  │Story │ │Poem  │ │Image │       │
│  └──────┘ └──────┘ └──────┘       │
│                                     │
│  ━━━ Recent Creations ━━━           │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 📖 The Brave Raj              │   │
│  │ [Generated image showing      │   │
│  │  elderly man in garden]       │   │
│  │                              │   │
│  │ "Once upon a time, Raj was   │   │
│  │  walking in his garden..."   │   │
│  │                              │   │
│  │ [▶️ Read Aloud] [❤️ Save]     │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ ✍️ Poem: "Sunset Peace"       │   │
│  │                              │   │
│  │ "जब सूरज ढलता है आसमान में..." │   │
│  │                              │   │
│  │ [▶️ Read Aloud] [❤️ Save]     │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🎨 Peaceful Mountain          │   │
│  │ [Image: Serene mountain       │   │
│  │  landscape with sunset]       │   │
│  │                              │   │
│  │ [❤️ Save] [Share]             │   │
│  └─────────────────────────────┘   │
│                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│                                     │
│  Chat with me:                      │
│  [Type or speak...] 🎤              │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. VOICE-REQUESTED CONTENT**
- User speaks: "मुझे कहानी सुनाओ"
- Gemini generates personalized story
- TTS reads it aloud
- Generated image accompanies story

**2. THREE CONTENT TYPES**
- **📖 Story**: Short stories (5-10 min)
- **✍️ Poem**: Various styles (haiku, ghazal, free verse)
- **🎨 Image**: Mood-appropriate images

**3. PERSONALIZATION**
- Uses user's name in stories
- References user's interests
- Culturally appropriate content
- Language-specific themes

**4. MOOD DETECTION**
- AI detects user's emotional state from conversation
- Generates appropriate content
- Comforting for sadness
- Exciting for boredom

**5. LIBRARY**
- Save favorite stories/poems/images
- Replay anytime
- Share with family

**CONVERSATIONAL FLOWS**:

**Flow 1: Storytelling**
```
USER: "मुझे बोर हो रहा है"
      (I'm feeling bored)

AI: "क्या मैं आपको एक interesting कहानी सुनाऊं? 
    किस बारे में - Adventure, Funny, या Inspirational?"
    (Should I tell you an interesting story?
    About what - Adventure, Funny, or Inspirational?)

USER: "Adventure"

AI: "बढ़िया! एक सेकंड, मैं आपके लिए कहानी बना रहा हूं..."
    (Great! One second, creating a story for you...)

[Gemini generates story with user's name]

AI: "यह देखिए! मैंने 'The Brave Raj' कहानी बनाई है।
    क्या मैं सुनाऊं?"
    (Look! I created story 'The Brave Raj'.
    Should I read it?)

USER: "हाँ"

[TTS narrates story]
[Shows generated illustration]

Story Text:
"एक बार की बात है, राज नाम के एक बुजुर्ग व्यक्ति ने अपने गांव में 
एक mysterious sound सुनी। बहादुरी से, उन्होंने investigate किया 
और पता चला..."

[After story ends]

AI: "कहानी कैसी लगी? क्या save करूं?"
    (How was the story? Should I save it?)
```

**Flow 2: Poem Generation**
```
USER: "कोई सुंदर कविता सुनाओ"
      (Tell me a beautiful poem)

AI: "किस topic पर? या मैं कुछ suggest करूं?"
    (On what topic? Or should I suggest?)

USER: "सूर्यास्त के बारे में"
      (About sunset)

AI: "बहुत खूब! सूर्यास्त की कविता आ रही है..."
    (Wonderful! Sunset poem coming...)

[Generates poem in Hindi]

AI: (reciting)

"जब सूरज ढलता है आसमान में,
रंग बिखरते हैं चारों ओर,
सोने सी लाली, नारंगी रोशनी,
दिन कहता है अलविदा, शांति से।

पंछी लौटते अपने घर को,
दिन की थकान लिए साथ में,
शाम की हवा सुकून भरी,
रात आती है धीरे-धीरे।"

[Shows sunset image]

AI: "कैसी लगी? ❤️"
```

**Flow 3: Mood-Based Image Generation**
```
[User has been chatting, seems sad from conversation]

AI: "राज ji, आज आप थोड़े उदास लग रहे हैं।
    क्या मैं आपके लिए कुछ सुखदायक बना सकता हूं?"
    (Raj ji, you seem a bit sad today.
    Can I create something soothing for you?)

USER: "हाँ"

AI: "एक सेकंड... आपके लिए कुछ special बना रहा हूं।"
    (One second... creating something special for you.)

[Gemini Imagen generates peaceful nature scene]

AI: "यह देखिए 🌄
    
    एक शांत पहाड़, सूर्यास्त, और झील।
    गहरी सांस लें। सब ठीक हो जाएगा।
    
    Remember: आप अकेले नहीं हैं। मैं यहां हूं। 💙"
    
    (Look at this. A peaceful mountain, sunset, lake.
    Take a deep breath. Everything will be okay.
    
    Remember: You're not alone. I'm here.)

[Shows calming image]

USER: "धन्यवाद" (Thank you)

AI: "हमेशा! 😊 कुछ और चाहिए?"
    (Always! Need anything else?)
```

**Flow 4: Cultural Story**
```
USER: "दिवाली के बारे में कोई कहानी"
      (A story about Diwali)

AI: "बढ़िया! मैं Diwali की एक traditional कहानी सुनाता हूं..."
    (Great! I'll tell a traditional Diwali story...)

[Generates story about Ram's return to Ayodhya]
[Shows illustration of diya, fireworks]
[Narrates in TTS]

Story:
"बहुत समय पहले, भगवान राम 14 साल के vanvas से लौटे...
लोगों ने घी के दीये जलाकर उनका स्वागत किया..."

[After story]

AI: "Happy Diwali! 🪔✨ 
    क्या मैं आपके लिए Diwali greeting image बनाऊं?"
    (Should I create a Diwali greeting image for you?)
```

**Flow 5: Interactive Story**
```
USER: "मुझे ऐसी कहानी सुनाओ जिसमें मैं decide कर सकूं"
      (Tell me a story where I can decide)

AI: "Interesting! एक choose-your-own-adventure कहानी!
    शुरू करते हैं..."
    (An interactive story! Let's begin...)

AI: "आप जंगल में हैं। सामने दो रास्ते हैं:
    1. बायां रास्ता - नदी की ओर
    2. दायां रास्ता - पहाड़ी की ओर
    
    आप कौन सा रास्ता choose करते हैं?"
    
USER: "नदी"

AI: "आप नदी की ओर गए। वहां एक नाव दिखी। 
    अचानक एक आवाज़ सुनाई दी..."
    
[Story continues based on user choices]
```

**VOICE COMMANDS**:
- "Tell me a story" / "कहानी सुनाओ"
- "Read me a poem" / "कविता सुनाओ"
- "Create an image" / "तस्वीर बनाओ"
- "I'm feeling sad/bored/lonely"
- "Tell me a funny story"
- "Read again" / "फिर से सुनाओ"

**GEMINI 2.5 CAPABILITIES USED**:
- **Text Generation**: Stories, poems
- **Image Generation (Imagen)**: Illustrations, mood images
- **Personalization**: Using user context
- **Cultural Awareness**: Festival stories, regional themes
- **Emotional Intelligence**: Mood-appropriate content

---

### **Screen 12: MusicPlayerScreen.tsx**
**Location**: `src/screens/user/MusicPlayerScreen.tsx`

**Purpose**: Play music, voice-controlled player

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│ [← Back]   Music Player             │
│                                     │
│  🎵 Now Playing                      │
│                                     │
│  ┌─────────────────────────────┐   │
│  │                              │   │
│  │   [Album Art / Visualizer]   │   │
│  │                              │   │
│  └─────────────────────────────┘   │
│                                     │
│  ♪ Lag Ja Gale - Lata Mangeshkar   │
│                                     │
│  ━━━━━●━━━━━━━━━━━━━━━━━━━━━━       │
│  2:15 / 4:30                        │
│                                     │
│  ┌─────┐  ┌─────┐  ┌─────┐        │
│  │ ⏮️  │  │ ⏯️  │  │ ⏭️  │        │
│  │Prev │  │Play │  │Next │        │
│  └─────┘  └─────┘  └─────┘        │
│                                     │
│  🔀 Shuffle    🔁 Repeat    ❤️      │
│                                     │
│  Voice Commands:                    │
│  "Play next" • "पिछला गाना"         │
│  "Volume up" • "तेज़ करो"           │
│  "Pause" • "रोको"                   │
│                                     │
│  ━━━ Playlist (25 songs) ━━━        │
│                                     │
│  1. ♪ Lag Ja Gale                   │
│  2. ♪ Tere Bina                     │
│  3. ♪ Ae Dil Hai Mushkil            │
│  [...more...]                       │
│                                     │
│  Say: "Play [song name]"            │
│  🎤 [Voice command]                 │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. VOICE PLAYBACK CONTROL**
- "Play" / "Pause" / "Stop"
- "Next song" / "Previous song"
- "Volume up" / "Volume down"
- "Play [song name]"
- Works even from other screens (background)

**2. PLAYER CONTROLS**
- Large, elderly-friendly buttons
- Visual progress bar
- Album art display

**3. PLAYLIST MANAGEMENT**
- View all songs
- Add/remove songs
- Create playlists

**4. RECOMMENDATION**
- "Play something relaxing"
- AI suggests based on mood, time of day

**CONVERSATIONAL FLOWS**:

**Flow 1: Playing Music**
```
USER: "कोई पुराना गाना बजाओ"
      (Play some old song)

AI: "ज़रूर! 1960s-70s के गाने? या कोई specific singer?"
    (Sure! 1960s-70s songs? Or specific singer?)

USER: "Lata Mangeshkar"

AI: "Perfect choice! Lata ji का 'Lag Ja Gale' बजा रहा हूं..."
    (Playing Lata ji's 'Lag Ja Gale'...)

[Music starts playing]

AI (after song): "अगला गाना बजाऊं या कुछ और?"
                 (Play next or something else?)
```

**Flow 2: Voice Control During Playback**
```
[Music is playing]

USER: "ये गाना skip करो"
      (Skip this song)

AI: "Next song: 'Tere Bina'..."

[Switches to next song]

USER: "Volume बढ़ाओ"

AI: "Volume increased to 80%"

USER: "Pause करो"

AI: "Music paused."
```

**Flow 3: Mood-Based Recommendation**
```
USER: "मुझे कुछ सुकून वाला सुनना है"
      (I want to listen to something peaceful)

AI: "समझ गया! कुछ relaxing instrumental बजाता हूं..."
    (Got it! Playing some relaxing instrumental...)

[Plays calm, soothing music]

AI: "कैसा लग रहा है? और कुछ?"
    (How is it? Anything else?)
```

**VOICE COMMANDS**:
- "Play music" / "गाना बजाओ"
- "Play [song name]"
- "Next song" / "अगला गाना"
- "Previous song" / "पिछला गाना"
- "Pause" / "Stop"
- "Volume up/down" / "तेज़/धीमा करो"
- "Shuffle on/off"
- "Repeat"

---

### **Screen 13: EmergencyScreen.tsx**
**Location**: `src/screens/user/EmergencyScreen.tsx`

**Purpose**: Emergency activation, SOS protocol

**UI LAYOUT (Triggered State)**:
```
┌─────────────────────────────────────┐
│                                     │
│         🚨 EMERGENCY! 🚨             │
│                                     │
│  Emergency alert sent to:           │
│  ✅ Son - Rahul                      │
│  ✅ Daughter - Priya                 │
│  ✅ Doctor - Dr. Sharma              │
│                                     │
│  📍 Your location shared:            │
│  [Mini map showing current location]│
│                                     │
│  Calling emergency contact...       │
│  📞 Rahul: +91-9876543210           │
│                                     │
│  ┌─────────────────────────────┐   │
│  │   🔴 EMERGENCY ACTIVE         │   │
│  │                              │   │
│  │   Loud alarm playing         │   │
│  │   Location tracking ON       │   │
│  │   Contacts notified          │   │
│  │                              │   │
│  │   [CANCEL EMERGENCY]         │   │
│  │   (Hold 5 seconds)           │   │
│  └─────────────────────────────┘   │
│                                     │
│  If you're safe, say:               │
│  "I'm okay" or "मैं ठीक हूं"         │
│  🎤                                 │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. EMERGENCY TRIGGERS**
- Voice: "Emergency" / "Help" / "मदद"
- Emergency button tap
- Fall detection (if sensors available)
- No response to multiple alarms

**2. EMERGENCY PROTOCOL**
- **Step 1**: Send SMS to all emergency contacts
- **Step 2**: Share GPS location
- **Step 3**: Play loud alarm sound
- **Step 4**: Call first emergency contact
- **Step 5**: If no answer, call next contact

**3. SMS CONTENT**
```
"🚨 EMERGENCY ALERT 🚨
[Name] needs help!

Location: https://maps.google.com/?q=[lat],[lng]
Time: 3:45 PM, 23 Nov 2024

This is an automated message from Care-Giver App.
Please check on them immediately."
```

**4. CANCELLATION**
- Requires holding "Cancel" button for 5 seconds
- Prevents accidental cancellation
- Voice confirmation: "I'm okay"

**5. ADMIN NOTIFICATION**
- Admin gets push notification
- Can see USER's location
- Call log of emergency

**CONVERSATIONAL FLOWS**:

**Flow 1: Emergency Activation**
```
USER: "Emergency!" or "मदद!"

AI (loud, clear voice): 
"EMERGENCY ACTIVATED!
Sending alerts to all contacts.
Calling Rahul now.
Stay calm, help is coming."

[Immediately:]
- SMS sent to all emergency contacts
- Location shared
- Loud alarm plays
- Calls first emergency contact

[After 30 seconds:]
AI: "Are you okay? Say 'I'm okay' to stop alert."

[If no response in 2 minutes:]
AI: "Calling next emergency contact: Priya..."
```

**Flow 2: False Alarm**
```
[Emergency triggered accidentally]

USER: "Wait! मैं ठीक हूं!"
      (Wait! I'm okay!)

AI: "Are you sure you're safe? 
    Hold 'Cancel Emergency' button for 5 seconds to confirm."

[User holds button]

AI: "Emergency cancelled. 
    Notifying contacts that you're safe."

[Sends follow-up SMS]:
"False alarm. [Name] is safe. Sorry for concern."
```

**Flow 3: Fall Detection**
```
[Device detects sudden fall motion]

AI (loud): "FALL DETECTED! Are you okay?
           Say 'I'm okay' within 30 seconds or emergency will be triggered."

[Countdown appears: 30...29...28...]

[If user says "I'm okay":]
AI: "Good! Fall detection cancelled. Be careful!"

[If no response after 30 seconds:]
AI: "NO RESPONSE. ACTIVATING EMERGENCY..."
[Triggers full emergency protocol]
```

**VOICE COMMANDS**:
- "Emergency" / "मदद" / "Help"
- "I'm okay" / "मैं ठीक हूं"
- "Cancel emergency"
- "Call ambulance"

---

## 🛡️ **ADMIN ROLE SCREENS**

---

### **Screen 14: AdminDashboardScreen.tsx**
**Location**: `src/screens/admin/AdminDashboardScreen.tsx`

**Purpose**: Admin control center, monitor USER activity

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│ ☰   Admin Dashboard          [⚙️][🔔]│
│                                     │
│  Managing: 👤 Raj (Father)          │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🟢 USER Status: Active       │   │
│  │ Last seen: 5 minutes ago     │   │
│  │ Location: Home               │   │
│  └─────────────────────────────┘   │
│                                     │
│  📊 Today's Activity                │
│  ┌─────────────────────────────┐   │
│  │ ⏰ Alarms: 3 active, 2 rang  │   │
│  │ 📞 Calls: 2 (Son, Daughter)  │   │
│  │ 💬 Conversations: 15 messages│   │
│  │ 📸 Camera: 1 usage (medicine)│   │
│  └─────────────────────────────┘   │
│                                     │
│  Quick Actions:                     │
│  ┌──────┐ ┌──────┐ ┌──────┐       │
│  │ 🛡️   │ │ 📊   │ │ 📍   │       │
│  │Restri│ │Stats │ │Track │       │
│  │ctions│ │      │ │      │       │
│  └──────┘ └──────┘ └──────┘       │
│                                     │
│  Recent Alerts:                     │
│  ┌─────────────────────────────┐   │
│  │ ⚠️ Missed medicine alarm      │   │
│  │ 8:00 AM today                │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ ✅ Emergency test successful  │   │
│  │ Yesterday, 3:00 PM           │   │
│  └─────────────────────────────┘   │
│                                     │
│  Users Under Care:                  │
│  ┌─────────────────────────────┐   │
│  │ 👴 Father - Raj (Active)      │   │
│  │ 👧 Daughter - Priya (Offline) │   │
│  └─────────────────────────────┘   │
│                                     │
│  Say: "Show Raj's activity log"     │
│  🎤 [Voice command]                 │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. USER MONITORING**
- Real-time status
- Last activity timestamp
- Current location (if tracking enabled)

**2. ACTIVITY SUMMARY**
- Alarms (set, triggered, missed)
- Calls made
- Messages sent
- App usage stats
- Camera usage

**3. ALERTS & NOTIFICATIONS**
- Missed alarms
- Emergency triggers
- Unusual activity
- Geofence violations

**4. MULTI-USER MANAGEMENT**
- If admin manages multiple USERs
- Switch between USERs
- Separate stats for each

**5. QUICK ACTIONS**
- Restrictions: Manage feature blocks
- Stats: Detailed analytics
- Track: Real-time location

**CONVERSATIONAL INTERACTION**:

Admin can also use voice commands:

```
ADMIN: "Show me Raj's activity today"

AI: "Here's Raj's activity for today:
    
    Alarms:
    - 8:00 AM Medicine alarm - Dismissed
    - 10:00 AM Yoga reminder - Missed
    
    Calls:
    - Called Son at 11:30 AM (5 minutes)
    - Called Daughter at 2:15 PM (3 minutes)
    
    Conversations: 15 AI interactions
    Camera: Used once to scan medicine bottle
    
    Location: Stayed at home all day
    
    Any concerns?"

ADMIN: "Why did he miss yoga alarm?"

AI: "The alarm rang but was not dismissed or snoozed.
    Possible reasons:
    - Was sleeping
    - Phone was not nearby
    - Volume was low
    
    Would you like to:
    1. Increase alarm volume?
    2. Set a follow-up alarm?
    3. Call Raj to check?"
```

---

### **Screen 15: RestrictionManagementScreen.tsx**
**Location**: `src/screens/admin/RestrictionManagementScreen.tsx`

**Purpose**: Control USER's feature access

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│ [← Back]   Feature Restrictions      │
│                                     │
│  Managing: 👤 Raj                    │
│                                     │
│  💬 "Block or allow features by     │
│      saying: 'Block calling feature'│
│                                     │
│  ━━━ CALLING & MESSAGING ━━━         │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 📞 Make Calls                │   │
│  │ [●]────────[  ] ALLOWED      │   │
│  │                              │   │
│  │ Whitelist Contacts (5)       │   │
│  │ Time Restrictions: None      │   │
│  │ [⚙️ Configure]                │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 💬 Send Messages              │   │
│  │ [  ]────────[●] BLOCKED      │   │
│  │                              │   │
│  │ Reason: Can make calls only  │   │
│  │ [⚙️ Configure]                │   │
│  └─────────────────────────────┘   │
│                                     │
│  ━━━ LOCATION & SAFETY ━━━          │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 📍 Location Tracking          │   │
│  │ [●]────────[  ] ALWAYS ON    │   │
│  │                              │   │
│  │ Cannot be disabled by USER   │   │
│  │ Safe Zone: Home (500m)       │   │
│  │ [⚙️ Configure]                │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🆘 Emergency Features         │   │
│  │ [●]────────[  ] ALWAYS ON    │   │
│  │                              │   │
│  │ Cannot be disabled           │   │
│  └─────────────────────────────┘   │
│                                     │
│  ━━━ CONTENT & MEDIA ━━━            │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 📸 Camera/Image Analysis      │   │
│  │ [●]────────[  ] ALLOWED      │   │
│  │                              │   │
│  │ Daily Limit: No limit        │   │
│  │ [⚙️ Configure]                │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🎵 Music Player               │   │
│  │ [●]────────[  ] ALLOWED      │   │
│  │                              │   │
│  │ Daily Limit: 2 hours         │   │
│  │ Time Allowed: 6 AM - 10 PM   │   │
│  │ [⚙️ Configure]                │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Save All Changes]                 │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. FEATURE TOGGLES**
- ON/OFF switch for each feature
- Some features (Emergency) cannot be disabled

**2. GRANULAR CONTROLS**
Each feature has additional settings:

**Calling:**
- Allow/block
- Whitelist specific contacts
- Time restrictions (e.g., no calls after 9 PM)
- Daily call limit

**Messaging:**
- Allow/block
- Require admin approval
- Template messages only

**Location:**
- Always on (recommended)
- Geofencing (safe zones)
- Alert if leaves safe zone

**Camera:**
- Allow/block
- Daily usage limit
- Purpose logging

**Music:**
- Allow/block
- Daily time limit
- Allowed hours

**Stories/Images:**
- Allow/block
- Content filtering
- Daily generation limit

**3. TIME-BASED RESTRICTIONS**
- Set allowed hours for features
- Example: Music only 6 AM - 10 PM
- Bedtime mode (disable entertainment)

**4. USAGE LIMITS**
- Daily/weekly limits
- Auto-block when limit reached
- Notify admin

**5. SAFE ZONES (Geofencing)**
- Draw safe zone on map
- Alert if USER leaves zone
- Auto-enable emergency if outside too long

**CONVERSATIONAL FLOWS**:

**Flow 1: Blocking Feature**
```
ADMIN: "Messaging feature block कर दो Raj के लिए"
       (Block messaging feature for Raj)

AI: "Understood. Should I:
    1. Completely block messaging?
    2. Allow only to emergency contacts?
    3. Require your approval for each message?"

ADMIN: "Completely block"

AI: "Done. Raj can no longer send messages.
    He can still make calls to all contacts.
    
    Should I notify Raj about this change?"

ADMIN: "Yes"

AI: "Notification sent to Raj."

[Raj's app shows:]
"Messaging feature has been disabled by your caregiver.
You can still make calls if you need to contact someone."
```

**Flow 2: Setting Time Restrictions**
```
ADMIN: "Music को रात 9 बजे के बाद बंद रखो"
       (Keep music off after 9 PM)

AI: "Got it. Music player will be disabled from 9:00 PM to 6:00 AM.
    
    Reason for Raj: 'Bedtime - no distractions'
    
    Should I allow exceptions for relaxing/sleep music?"

ADMIN: "Yes, sleep music allowed"

AI: "Perfect. Configured:
    - Regular music: 6 AM to 9 PM only
    - Sleep/meditation music: Allowed anytime
    
    This helps maintain sleep schedule. ✅"
```

**Flow 3: Geofencing Setup**
```
ADMIN: "अगर Raj घर से बहुत दूर चला जाए तो मुझे alert करो"
       (Alert me if Raj goes too far from home)

AI: "Understood. Let me set up a safe zone.
    
    [Shows map]
    
    I've marked your home. How far can Raj go?
    - 500 meters (5 min walk)
    - 1 km (10 min walk)
    - 2 km (20 min walk)"

ADMIN: "500 meters"

AI: "Safe zone set: 500m radius from home.
    
    What should I do if Raj leaves this zone?
    1. Notify you immediately
    2. Ask Raj where he's going
    3. Trigger emergency protocol after 30 minutes
    
    Or all of the above?"

ADMIN: "All"

AI: "Configured! You'll get alerts whenever Raj ventures out. 
    Safety first! 🛡️"
```

**Flow 4: Contact Whitelist**
```
ADMIN: "Raj केवल family को ही call कर सके"
       (Raj should only call family)

AI: "Understood. Restricting calls to family members only.
    
    Family contacts I found:
    ✅ Son - Rahul
    ✅ Daughter - Priya
    ✅ Wife - Sunita
    ✅ Brother - Suresh
    
    Are these correct? Any additions/removals?"

ADMIN: "Remove brother, add Doctor Sharma"

AI: "Updated whitelist:
    ✅ Son - Rahul
    ✅ Daughter - Priya
    ✅ Wife - Sunita
    ✅ Doctor - Dr. Sharma
    
    Raj can now only call these 4 contacts.
    All other calls blocked. ✅"
```

**VOICE COMMANDS**:
- "Block [feature] for [USER]"
- "Allow [feature] for [USER]"
- "Set time limit for [feature]"
- "Add [contact] to whitelist"
- "Remove [contact] from whitelist"
- "Show all restrictions"

---

### **Screen 16: ActivityLogScreen.tsx**
**Location**: `src/screens/admin/ActivityLogScreen.tsx`

**Purpose**: View detailed USER activity history

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│ [← Back]   Activity Log        [📅] │
│                                     │
│  Viewing: 👤 Raj                     │
│  Date: Today (23 Nov 2024)          │
│                                     │
│  💬 "Show me activity from last     │
│      week" or select date above     │
│                                     │
│  ━━━ Timeline ━━━                    │
│                                     │
│  ⏰ 8:00 AM                          │
│  ┌─────────────────────────────┐   │
│  │ 💊 Medicine Alarm Rang        │   │
│  │ Action: Dismissed            │   │
│  │ Location: Home               │   │
│  └─────────────────────────────┘   │
│                                     │
│  ⏰ 8:15 AM                          │
│  ┌─────────────────────────────┐   │
│  │ 💬 AI Conversation            │   │
│  │ User: "आज मौसम कैसा है?"      │   │
│  │ AI: "Partly cloudy, 28°C..." │   │
│  │ [View Full Chat]             │   │
│  └─────────────────────────────┘   │
│                                     │
│  ⏰ 9:30 AM                          │
│  ┌─────────────────────────────┐   │
│  │ 📞 Call Made                  │   │
│  │ To: Son - Rahul              │   │
│  │ Duration: 5 min 32 sec       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ⏰ 10:00 AM                         │
│  ┌─────────────────────────────┐   │
│  │ ⚠️ Yoga Alarm MISSED          │   │
│  │ No action taken              │   │
│  │ Location: Home               │   │
│  └─────────────────────────────┘   │
│                                     │
│  ⏰ 11:45 AM                         │
│  ┌─────────────────────────────┐   │
│  │ 📸 Camera Used                │   │
│  │ Purpose: Medicine analysis   │   │
│  │ Image: Paracetamol bottle    │   │
│  │ [View Image]                 │   │
│  └─────────────────────────────┘   │
│                                     │
│  ⏰ 2:15 PM                          │
│  ┌─────────────────────────────┐   │
│  │ 📞 Call Made                  │   │
│  │ To: Daughter - Priya         │   │
│  │ Duration: 3 min 18 sec       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ⏰ 3:00 PM                          │
│  ┌─────────────────────────────┐   │
│  │ 📍 Location Update            │   │
│  │ Left home (walking)          │   │
│  │ Destination: Park            │   │
│  │ [View on Map]                │   │
│  └─────────────────────────────┘   │
│                                     │
│  [Load More...]                     │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. CHRONOLOGICAL LOG**
- All USER activities timestamped
- Scrollable timeline
- Most recent at top

**2. ACTIVITY TYPES TRACKED**
- Alarms (set, triggered, dismissed, missed)
- Calls (outgoing, duration, contact)
- Messages sent
- AI conversations
- Camera usage
- Location changes
- Feature access attempts (if blocked)
- Emergency triggers
- Settings changes

**3. FILTERS**
- By date (today, yesterday, last week, custom)
- By activity type (only calls, only alarms, etc.)
- By location
- Search by keyword

**4. DETAILED VIEW**
- Tap any activity → See full details
- For conversations → Full chat transcript
- For images → View analyzed image
- For locations → See on map

**5. EXPORT**
- Export log as PDF/CSV
- Share with doctors
- Generate reports

**CONVERSATIONAL QUERIES**:

```
ADMIN: "पिछले हफ्ते Raj ने कितने calls किए?"
       (How many calls did Raj make last week?)

AI: "Last week (Nov 16-22), Raj made 14 calls:
    
    Most called:
    - Son (Rahul): 6 calls
    - Daughter (Priya): 4 calls
    - Doctor: 2 calls
    - Wife: 2 calls
    
    Average call duration: 4 minutes 15 seconds
    Total talk time: 59 minutes 30 seconds
    
    Would you like to see day-by-day breakdown?"
```

```
ADMIN: "क्या Raj ने आज अपनी सभी alarms ली?"
       (Did Raj take all his alarms today?)

AI: "Today's alarm status:
    
    ✅ 8:00 AM - Medicine (Dismissed)
    ❌ 10:00 AM - Yoga (Missed)
    ⏳ 6:00 PM - Evening walk (Upcoming)
    
    1 alarm was missed. 
    Would you like me to remind Raj about yoga now?"
```

```
ADMIN: "Show me all times Raj left home this month"

AI: "November 2024 - Locations visited:
    
    Frequent:
    - Apollo Hospital: 4 times
    - Park: 8 times
    - MedPlus Pharmacy: 3 times
    - Temple: 6 times
    
    Average time outside: 1 hour 20 minutes
    Longest trip: 3 hours (Nov 18, Hospital)
    
    All trips within safe zone ✅
    
    [View on Calendar]"
```

---

### **Screen 17: LocationTrackingScreen.tsx**
**Location**: `src/screens/admin/LocationTrackingScreen.tsx`

**Purpose**: Real-time location tracking, geofencing

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│ [← Back]   Location Tracking   [📊] │
│                                     │
│  Tracking: 👤 Raj                    │
│  Status: 🟢 At Home                  │
│                                     │
│  ┌─────────────────────────────┐   │
│  │        [MAP VIEW]            │   │
│  │                              │   │
│  │   🏠 Home                     │   │
│  │   (Safe Zone - 500m radius)  │   │
│  │                              │   │
│  │   📍 Current Location         │   │
│  │      [USER's position pin]   │   │
│  │                              │   │
│  │   [Zoom controls]            │   │
│  └─────────────────────────────┘   │
│                                     │
│  Current Status:                    │
│  📍 Location: Home (Living Room)    │
│  ⏱️ Last Update: 2 minutes ago      │
│  🏃 Movement: Stationary             │
│  🔋 Phone Battery: 85%              │
│                                     │
│  ━━━ Safe Zones ━━━                  │
│  ┌─────────────────────────────┐   │
│  │ 🏠 Home                       │   │
│  │ Radius: 500m                 │   │
│  │ Alert if left: ✅ Yes         │   │
│  │ [⚙️ Edit] [🗑️ Remove]         │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🏥 Apollo Hospital            │   │
│  │ Alert on arrival: ✅ Yes      │   │
│  │ [⚙️ Edit] [🗑️ Remove]         │   │
│  └─────────────────────────────┘   │
│                                     │
│  [+ Add Safe Zone]                  │
│                                     │
│  Recent Locations:                  │
│  - Park (2 hours ago)               │
│  - Pharmacy (Yesterday, 3 PM)       │
│  - Temple (Nov 22, 10 AM)           │
│                                     │
│  Say: "Where is Raj right now?"     │
│  🎤 [Voice query]                   │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. REAL-TIME TRACKING**
- Live location updates (every 2-5 minutes)
- Map view with USER's current position
- Movement detection (walking, stationary, driving)

**2. SAFE ZONES (GEOFENCING)**
- Define multiple safe zones
- Circular or polygon boundaries
- Alerts when entering/leaving zones

**3. LOCATION HISTORY**
- Timeline of visited places
- Duration at each location
- Route visualization

**4. SMART ALERTS**
- "Raj left home"
- "Raj reached hospital"
- "Raj has been outside safe zone for 30 minutes"

**5. PRIVACY CONTROLS**
- USER knows they're being tracked (shown in USER app)
- Can be temporarily disabled by admin (vacation mode)

**CONVERSATIONAL QUERIES**:

```
ADMIN: "Raj कहां है अभी?"
       (Where is Raj right now?)

AI: "Raj is currently at home, in the living room area.
    
    Last update: 2 minutes ago
    Movement: Stationary
    Phone battery: 85%
    
    Everything looks normal. ✅"
```

```
ADMIN: "अगर Raj घर से निकले तो मुझे बताओ"
       (Tell me if Raj leaves home)

AI: "Alert configured! 
    I'll notify you immediately when Raj leaves the home safe zone (500m radius).
    
    You'll get:
    - Push notification
    - SMS (if critical)
    - His destination (if known)
    
    Peace of mind activated! 🛡️"
```

```
ADMIN: "पिछले 3 दिनों में Raj कहां गया?"
       (Where did Raj go in last 3 days?)

AI: "Last 3 days (Nov 21-23) locations:
    
    Nov 23 (Today):
    - Home (all day)
    
    Nov 22:
    - Park (morning, 45 min)
    - Pharmacy (afternoon, 20 min)
    - Home (rest of day)
    
    Nov 21:
    - Hospital (morning, 2 hours)
    - Home (afternoon)
    - Temple (evening, 1 hour)
    
    All trips completed safely ✅
    Average time outside: 1.5 hours/day
    
    [View on Map]"
```

---

## 🔄 **SHARED SCREENS (Both USER & ADMIN)**

---

### **Screen 18: SettingsScreen.tsx**
**Location**: `src/screens/shared/SettingsScreen.tsx`

**Purpose**: App settings, preferences

**UI LAYOUT**:
```
┌─────────────────────────────────────┐
│ [← Back]   Settings                 │
│                                     │
│  ━━━ LANGUAGE & VOICE ━━━            │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🌍 App Language               │   │
│  │ Current: हिंदी (Hindi)        │   │
│  │ [Change Language]            │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🎤 Voice Language             │   │
│  │ Current: Hindi               │   │
│  │ [Change Voice Language]      │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🔊 Voice Speed                │   │
│  │ ●────────[  ] Normal         │   │
│  │ [Test Voice]                 │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🗣️ Voice Type                 │   │
│  │ Current: Female (Soft)       │   │
│  │ [Change Voice]               │   │
│  └─────────────────────────────┘   │
│                                     │
│  ━━━ DISPLAY ━━━                     │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🎨 Theme                      │   │
│  │ ○ Light  ● Dark  ○ Auto      │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 📝 Text Size                  │   │
│  │ ○ Small  ● Large  ○ XL       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ━━━ NOTIFICATIONS ━━━               │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 🔔 Alarm Sound                │   │
│  │ Current: Gentle Bell         │   │
│  │ [●]────────[  ] Enabled      │   │
│  │ [Change Sound]               │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 📳 Vibration                  │   │
│  │ [●]────────[  ] Enabled      │   │
│  └─────────────────────────────┘   │
│                                     │
│  ━━━ PRIVACY ━━━                     │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 💾 Chat History               │   │
│  │ [Clear History]              │   │
│  │ [Export Conversations]       │   │
│  └─────────────────────────────┘   │
│                                     │
│  ┌─────────────────────────────┐   │
│  │ 📍 Location Sharing           │   │
│  │ [●]────────[  ] Enabled      │   │
│  │ ℹ️ Required for location alarms│  │
│  └─────────────────────────────┘   │
│                                     │
│  ━━━ ABOUT ━━━                       │
│                                     │
│  App Version: 1.0.0                 │
│  [Privacy Policy] [Terms of Use]    │
│  [Help & Support]                   │
│  [Logout]                           │
│                                     │
└─────────────────────────────────────┘
```

**FUNCTIONALITY**:

**1. LANGUAGE SETTINGS**
- App UI language
- Voice recognition language
- TTS language (can be different)
- Multiple language support

**2. VOICE CUSTOMIZATION**
- Voice speed (slow, normal, fast)
- Voice type (male, female, age)
- Voice testing before applying

**3. DISPLAY OPTIONS**
- Theme (light, dark, auto)
- Text size (important for elderly)
- High contrast mode

**4. NOTIFICATION SETTINGS**
- Alarm sounds
- Vibration
- Volume levels

**5. PRIVACY**
- Clear chat history
- Export data
- Manage permissions

**VOICE INTERACTION**:

```
USER: "Language change करो"
      (Change language)

AI: "कौन सी language में बात करना चाहते हैं?"
    (Which language do you want to speak?)
    
[Shows language list]

USER: "Tamil"

AI: "நன்றி! இனி நான் தமிழில் பேசுவேன்."
    (Thank you! I'll speak in Tamil now.)
    
[All AI responses switch to Tamil]
[UI text changes to Tamil]
```

---

## 🗂️ **DATABASE SCHEMA**

```sql
-- Users Table
CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    role TEXT CHECK(role IN ('USER', 'ADMIN')) NOT NULL,
    language_preference TEXT DEFAULT 'hi',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP
);

-- Profiles Table
CREATE TABLE profiles (
    profile_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    full_name TEXT NOT NULL,
    age INTEGER,
    profile_image_path TEXT,
    medical_conditions TEXT, -- JSON array
    emergency_notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Time Alarms Table
CREATE TABLE time_alarms (
    alarm_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    message_to_speak TEXT NOT NULL,
    time TEXT NOT NULL, -- HH:MM format
    repeat_days TEXT, -- JSON: [0,1,2,3,4,5,6]
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Location Alarms Table
CREATE TABLE location_alarms (
    alarm_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    location_name TEXT NOT NULL,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    radius_meters INTEGER DEFAULT 100,
    message_to_speak TEXT NOT NULL,
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Person Alarms Table
CREATE TABLE person_alarms (
    alarm_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    person_name TEXT NOT NULL,
    contact_number TEXT,
    trigger_time TEXT, -- Optional: HH:MM
    trigger_location TEXT, -- Optional: location name
    message_to_speak TEXT NOT NULL,
    is_active BOOLEAN DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Emergency Contacts Table
CREATE TABLE emergency_contacts (
    contact_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    relationship TEXT,
    is_emergency BOOLEAN DEFAULT 0,
    priority_order INTEGER DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Conversation History Table
CREATE TABLE conversation_history (
    conversation_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    user_message TEXT NOT NULL,
    ai_response TEXT NOT NULL,
    context_type TEXT, -- 'chat', 'story', 'poem'
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Admin Restrictions Table
CREATE TABLE admin_restrictions (
    restriction_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL, -- USER being controlled
    admin_id INTEGER NOT NULL, -- ADMIN controlling
    feature_name TEXT NOT NULL, -- 'calling', 'messaging', 'camera', etc.
    is_blocked BOOLEAN DEFAULT 0,
    allowed_contacts TEXT, -- JSON array of contact IDs (whitelist)
    time_restrictions TEXT, -- JSON: {start: "09:00", end: "21:00"}
    usage_limit INTEGER, -- Daily limit (e.g., 5 calls per day)
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (admin_id) REFERENCES users(user_id)
);

-- Activity Log Table
CREATE TABLE activity_log (
    log_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    activity_type TEXT NOT NULL, -- 'alarm', 'call', 'message', 'camera', 'location'
    activity_details TEXT, -- JSON with specific details
    latitude REAL,
    longitude REAL,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- App Settings Table
CREATE TABLE app_settings (
    setting_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    voice_speed REAL DEFAULT 1.0,
    voice_type TEXT DEFAULT 'female_soft',
    voice_language TEXT DEFAULT 'hi',
    theme TEXT CHECK(theme IN ('light', 'dark', 'auto')) DEFAULT 'light',
    text_size TEXT CHECK(text_size IN ('small', 'large', 'xl')) DEFAULT 'large',
    notifications_enabled BOOLEAN DEFAULT 1,
    location_tracking_enabled BOOLEAN DEFAULT 1,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Media Library Table
CREATE TABLE media_library (
    media_id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    media_type TEXT CHECK(media_type IN ('song', 'story', 'poem', 'generated_image')) NOT NULL,
    title TEXT NOT NULL,
    content TEXT, -- Story/poem text or image URL
    file_path TEXT,
    duration INTEGER, -- For audio
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_favorite BOOLEAN DEFAULT 0,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

-- Geofences Table
CREATE TABLE geofences (
    geofence_id INTEGER PRIMARY KEY AUTOINCREMENT,
    admin_id INTEGER NOT NULL, -- ADMIN who created
    user_id INTEGER NOT NULL, -- USER being tracked
    name TEXT NOT NULL, -- "Home", "Hospital"
    latitude REAL NOT NULL,
    longitude REAL NOT NULL,
    radius_meters INTEGER NOT NULL,
    alert_on_enter BOOLEAN DEFAULT 0,
    alert_on_exit BOOLEAN DEFAULT 1,
    is_active BOOLEAN DEFAULT 1,
    FOREIGN KEY (admin_id) REFERENCES users(user_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);
```

---

## 🎙️ **VOICE COMMAND MAPPING TO FUNCTIONS**

### **Complete Voice Command Reference**

| User Says (Hindi) | User Says (English) | Function Triggered | Screen Affected |
|-------------------|---------------------|-------------------|----------------|
| "अलार्म सेट करो" | "Set alarm" | Open alarm creation chat | AlarmManagement |
| "मम्मी को कॉल करो" | "Call Mom" | Look up contact, initiate call | Contacts |
| "मुझे कहानी सुनाओ" | "Tell me a story" | Generate story via Gemini | StoryCompanion |
| "ये दवा किस लिए है?" | "What is this medicine for?" | Analyze image via Vision API | CameraAnalysis |
| "Emergency" / "मदद" | "Help" / "Emergency" | Trigger emergency protocol | Emergency |
| "मैं कहां हूं?" | "Where am I?" | Show current location | UserHome (inline) |
| "समय क्या हुआ?" | "What's the time?" | Speak current time | Any screen |
| "गाना बजाओ" | "Play music" | Open music player | MusicPlayer |
| "अगला गाना" | "Next song" | Skip to next track | MusicPlayer |
| "रुको" / "Pause करो" | "Stop" / "Pause" | Pause current activity | Any screen |
| "मेरे बेटे को मैसेज भेजो" | "Send message to my son" | Open messaging flow | Contacts |
| "मुझे उदास लग रहा है" | "I'm feeling sad" | Generate comforting content | StoryCompanion |
| "दवा की याद दिलाओ" | "Remind me about medicine" | Create medicine alarm | AlarmManagement |
| "जब मैं अस्पताल पहुंचूं" | "When I reach hospital" | Create location alarm | AlarmManagement |
| "Language change करो" | "Change language" | Open language settings | Settings |
| "Show my alarms" | "मेरे अलार्म दिखाओ" | Show alarm list | AlarmManagement |

*(This table can be expanded with 100+ more commands)*

---

## 🔧 **GEMINI 2.5 INTEGRATION DETAILS**

### **1. Text Conversation (Gemini 2.5 Pro)**

**File**: `src/api/gemini/geminiTextApi.ts`

**Purpose**: Power all conversational interactions

**System Prompt**:
```
You are a caring, patient AI assistant for elderly individuals. 
You understand multiple Indian languages (Hindi, Tamil, Telugu, Bengali, etc.).
You help with:
- Setting alarms conversationally
- Answering questions
- Providing companionship
- Understanding voice commands
- Generating stories and poems

User's name: {user_name}
User's language: {user_language}
User's context: {medical_conditions, preferences}

Be warm, respectful, and use simple language.
Always confirm actions before executing.
If unsure, ask clarifying questions.
```

**API Call Structure**:
```typescript
const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro:generateContent', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-goog-api-key': GEMINI_API_KEY
  },
  body: JSON.stringify({
    contents: [{
      role: 'user',
      parts: [{ text: userMessage }]
    }],
    systemInstruction: systemPrompt,
    generationConfig: {
      temperature: 0.7,
      maxOutputTokens: 500
    }
  })
});
```

---

### **2. Vision Analysis (Gemini 2.5 Pro Vision)**

**File**: `src/api/gemini/geminiVisionApi.ts`

**Purpose**: Analyze images (medicine, documents, food, etc.)

**API Call Structure**:
```typescript
// Convert image to base64
const base64Image = await imageToBase64(imageUri);

const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-2.5-pro-vision:generateContent', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-goog-api-key': GEMINI_API_KEY
  },
  body: JSON.stringify({
    contents: [{
      role: 'user',
      parts: [
        { text: "Analyze this image. User asked: " + userQuestion },
        { 
          inline_data: {
            mime_type: 'image/jpeg',
            data: base64Image
          }
        }
      ]
    }],
    systemInstruction: "You are analyzing images for elderly users in their language. Provide clear, detailed, and helpful information.",
    generationConfig: {
      temperature: 0.4,
      maxOutputTokens: 800
    }
  })
});
```

**Use Cases**:
- Medicine bottle → Extract name, dosage, expiry
- Prescription → Read text, extract medicines
- Food → Identify items, estimate calories
- Documents → OCR, summarize content
- Bills → Extract amount, due date

---

### **3. Image Generation (Gemini Imagen)**

**File**: `src/api/gemini/geminiImageGenApi.ts`

**Purpose**: Generate comforting, story illustrations, mood-based images

**API Call Structure**:
```typescript
const response = await fetch('https://generativelanguage.googleapis.com/v1/models/gemini-imagen-1:generateImages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-goog-api-key': GEMINI_API_KEY
  },
  body: JSON.stringify({
    prompt: imagePrompt,
    negativePrompt: "violent, scary, inappropriate",
    numberOfImages: 1,
    aspectRatio: "1:1",
    style: "realistic" // or "illustration", "artistic"
  })
});
```

**Prompt Examples**:

**For Sadness**:
```
"A peaceful mountain landscape at sunset, 
serene lake in foreground, 
warm golden light, 
calming atmosphere, 
photorealistic, 
beautiful nature scene"
```

**For Story Illustration**:
```
"An elderly Indian man walking in a beautiful garden, 
wearing traditional kurta, 
smiling gently, 
lush greenery, 
vibrant flowers, 
morning sunlight, 
heartwarming scene, 
illustration style"
```

**For Festival (Diwali)**:
```
"Traditional Indian diya lamps glowing warmly,
rangoli patterns on floor,
festive decorations,
warm orange and yellow lights,
celebration atmosphere,
artistic illustration"
```

---

## 🌐 **GOOGLE CLOUD TTS & STT INTEGRATION**

### **Text-to-Speech (GCP TTS)**

**File**: `src/api/googleCloud/textToSpeech.ts`

**Supported Languages**: 100+ (including all Indian languages)

**API Call**:
```typescript
const response = await fetch('https://texttospeech.googleapis.com/v1/text:synthesize', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': GCP_API_KEY
  },
  body: JSON.stringify({
    input: { text: textToSpeak },
    voice: {
      languageCode: languageCode, // 'hi-IN', 'ta-IN', 'te-IN', etc.
      name: voiceType, // 'hi-IN-Standard-A' (female), 'hi-IN-Standard-B' (male)
      ssmlGender: 'FEMALE' // or 'MALE'
    },
    audioConfig: {
      audioEncoding: 'MP3',
      speakingRate: 1.0, // 0.25 to 4.0
      pitch: 0.0, // -20.0 to 20.0
      volumeGainDb: 0.0
    }
  })
});

const audioContent = response.audioContent; // Base64 encoded audio
// Play audio using React Native Sound
```

**Voice Selection by Language**:
```typescript
const VOICES = {
  'hi': 'hi-IN-Standard-A', // Hindi Female
  'ta': 'ta-IN-Standard-A', // Tamil Female
  'te': 'te-IN-Standard-A', // Telugu Female
  'bn': 'bn-IN-Standard-A', // Bengali Female
  'mr': 'mr-IN-Standard-A', // Marathi Female
  'gu': 'gu-IN-Standard-A', // Gujarati Female
  'en': 'en-IN-Standard-A', // English (India) Female
  // ... more languages
};
```

---

### **Speech-to-Text (GCP STT)**

**File**: `src/api/googleCloud/speechToText.ts`

**Streaming Recognition** (Real-time):
```typescript
// Start microphone recording
const audioStream = await startAudioRecording();

// Stream to GCP STT
const ws = new WebSocket('wss://speech.googleapis.com/v1/speech:streamingRecognize');

ws.on('open', () => {
  // Send config
  ws.send(JSON.stringify({
    config: {
      encoding: 'LINEAR16',
      sampleRateHertz: 16000,
      languageCode: languageCode, // 'hi-IN', 'en-IN', etc.
      alternativeLanguageCodes: ['en-IN', 'hi-IN'], // Multi-language support
      enableAutomaticPunctuation: true,
      model: 'default'
    },
    interimResults: true
  }));
  
  // Stream audio chunks
  audioStream.on('data', (chunk) => {
    ws.send(JSON.stringify({
      audioContent: chunk.toString('base64')
    }));
  });
});

ws.on('message', (data) => {
  const result = JSON.parse(data);
  const transcript = result.results[0].alternatives[0].transcript;
  const isFinal = result.results[0].isFinal;
  
  if (isFinal) {
    // User finished speaking
    processCommand(transcript);
  } else {
    // Show interim results (live transcription)
    showLiveTranscript(transcript);
  }
});
```

---

## 📊 **DEVELOPMENT MILESTONES & TIMELINE**

### **Phase 1: Foundation (Days 1-4)**
- ✅ Project setup (React Native, TypeScript)
- ✅ SQLite database setup
- ✅ Authentication screens (Login, Signup, Role Selection)
- ✅ Language selection
- ✅ Basic navigation structure
- ✅ Gemini API integration (text)
- ✅ GCP TTS/STT integration

### **Phase 2: Core USER Features (Days 5-10)**
- ✅ UserHomeScreen with chat interface
- ✅ Voice input/output system
- ✅ Time-based alarms (via conversation)
- ✅ Contact management
- ✅ Voice-activated calling
- ✅ Camera + Gemini Vision integration
- ✅ Emergency protocol

### **Phase 3: Advanced USER Features (Days 11-14)**
- ✅ Location-based alarms
- ✅ Person-based alarms
- ✅ Story/poem generation
- ✅ Image generation (Gemini Imagen)
- ✅ Music player
- ✅ Settings screen

### **Phase 4: ADMIN Features (Days 15-18)**
- ✅ Admin dashboard
- ✅ Restriction management
- ✅ Activity logging
- ✅ Location tracking
- ✅ Geofencing
- ✅ User monitoring

### **Phase 5: Testing & Polish (Days 19-20)**
- ✅ End-to-end testing
- ✅ Voice command testing across languages
- ✅ UI/UX refinements
- ✅ Performance optimization
- ✅ Demo preparation
- ✅ Documentation

---

## 🎤 **DEMO SCRIPT FOR HACKATHON**

### **Demo Flow (7 minutes)**

**1. Introduction (1 min)**
"This is the AI Care-Giver Companion - a voice-first, multilingual app that provides 24/7 care and companionship for elderly individuals, patients, or children.

What makes it unique:
- Works entirely through voice and chat in ANY language
- Uses Gemini 2.5 for vision and conversation
- Zero cloud database - 100% privacy
- Dual-role system: USER and ADMIN"

**2. USER Demo (3 min)**

**Scenario 1: Setting Alarm via Voice**
```
[Open app, tap mic]
USER: "हर रोज़ सुबह 8 बजे दवा की याद दिलाओ"
AI: "बिल्कुल! रोज़ाना 8 बजे दवा का अलार्म सेट कर दिया।"
[Show alarm appearing in list]
```

**Scenario 2: Medicine Analysis**
```
[Point camera at medicine bottle]
USER: "ये दवा किस लिए है?"
[Gemini Vision analyzes]
AI: "यह Paracetamol 500mg है। बुखार और दर्द के लिए..."
[Show detailed analysis]
```

**Scenario 3: Emergency**
```
USER: "Emergency!"
[Immediate emergency screen]
[Show SMS being sent]
[Show call being initiated]
AI: "Emergency alert sent. Calling Rahul now."
```

**Scenario 4: Companionship**
```
USER: "मुझे बोर हो रहा है"
AI: "कोई कहानी सुनाऊं?"
USER: "हाँ"
[Gemini generates personalized story]
[Shows generated illustration]
[TTS narrates story]
```

**3. ADMIN Demo (2 min)**

**Scenario 1: Monitoring**
```
[Open Admin Dashboard]
[Show real-time USER status]
[Show activity log]
[Show missed alarm alert]
```

**Scenario 2: Restrictions**
```
ADMIN (voice): "Block messaging feature for Raj"
[Show restriction being applied]
[Show notification sent to USER]
```

**Scenario 3: Location Tracking**
```
[Show map with USER location]
[Show geofence]
[Demonstrate alert when leaving zone]
```

**4. Closing (1 min)**
"This app addresses a critical need in India and globally - care for 300+ million elderly people.

Key Impact:
- Breaks language barriers
- Provides 24/7 companionship
- Ensures safety through AI monitoring
- Empowers families to care remotely
- 100% private and secure

Built with Gemini 2.5, GCP, and love. Thank you!"

---

## 🏆 **HACKATHON JUDGING CRITERIA ALIGNMENT**

| Criteria | Our Strength | Evidence |
|----------|--------------|----------|
| **Innovation** | First voice/vision multilingual care-giver app | Gemini 2.5 multimodal + 15 languages |
| **Technical Complexity** | Advanced AI integration, background services | 3 alarm types, vision API, image gen, geofencing |
| **User Impact** | Addresses 300M+ elderly in India alone | Solves real problem: lack of care-givers |
| **Execution** | Fully functional app with dual roles | Live demo covering all features |
| **Scalability** | Offline-first, no cloud costs | Works in remote areas, scales infinitely |
| **UI/UX** | Elderly-friendly, voice-first design | Large buttons, clear voice feedback |

---

## 📝 **FINAL CHECKLIST**

### **Before Submission**
- [ ] All screens implemented
- [ ] Voice commands working in 3+ languages
- [ ] Gemini integration tested
- [ ] Database migrations working
- [ ] Emergency protocol tested
- [ ] Admin restrictions enforced
- [ ] Location tracking functional
- [ ] APK/IPA build created
- [ ] Demo video recorded (max 3 min)
- [ ] Presentation deck prepared
- [ ] README.md written
- [ ] GitHub repository organized
- [ ] API keys secured (.env not committed)

### **Demo Day Prep**
- [ ] Test device fully charged
- [ ] Internet connection verified
- [ ] Fallback recordings ready
- [ ] Team roles assigned (who presents what)
- [ ] Q&A anticipated questions prepared
- [ ] Backup APK on multiple devices

---

## 🚀 **POST-HACKATHON ROADMAP**

### **v1.1 - Enhancements**
- Video calling with family
- Integration with wearables (heart rate, steps)
- Medication refill reminders via pharmacy APIs
- Doctor appointment booking
- Health report generation (PDF)

### **v2.0 - AI Doctor**
- Symptom checker (AI-powered)
- Vital signs analysis
- Health trend predictions
- Integration with healthcare providers
- Telemedicine support

### **v3.0 - Smart Home Integration**
- Control lights, TV via voice
- IoT device management
- Fall detection via cameras
- Smart medication dispenser integration

---

## 💡 **SUCCESS METRICS**

### **During Hackathon**
- All core features functional: ✅
- Voice commands work: ✅
- Admin controls work: ✅
- Multilingual support: ✅
- Demo runs smoothly: ✅

### **Post-Launch (6 months)**
- 10,000+ downloads
- 4.5+ star rating
- 70%+ daily active users
- <2% emergency false positive rate
- Average 50+ voice interactions per user/day

---

## 🎓 **KEY LEARNINGS & BEST PRACTICES**

### **Voice-First Design Principles**
1. Always confirm before executing critical actions
2. Provide audio feedback for every interaction
3. Support natural language, not rigid commands
4. Handle ambiguity gracefully (ask clarifying questions)
5. Keep responses concise (elderly attention span)

### **Multilingual Best Practices**
1. Never assume English proficiency
2. Use native scripts for UI text
3. Support code-switching (Hinglish, Tanglish)
4. Cultural awareness in content generation
5. Test with native speakers

### **Safety-First Implementation**
1. Emergency features cannot be disabled
2. Location tracking opt-out requires admin approval
3. Admin restrictions prevent accidental blocks
4. Fall detection with countdown before alert
5. Battery optimization to ensure app stays alive

---

## 📚 **RESOURCES & REFERENCES**

### **APIs & Documentation**
- Gemini 2.5 API: https://ai.google.dev/gemini-api
- GCP Text-to-Speech: https://cloud.google.com/text-to-speech
- GCP Speech-to-Text: https://cloud.google.com/speech-to-text
- React Native: https://reactnative.dev
- React Native SQLite: https://github.com/andpor/react-native-sqlite-storage

### **Design Inspiration**
- Material Design (elderly-friendly guidelines)
- Apple Human Interface Guidelines (accessibility)
- WHO Age-Friendly Environments

---

## 🎉 **CONCLUSION**

This Care-Giver AI Companion App represents the future of elderly care - combining cutting-edge AI with human-centered design to provide dignified, accessible, and effective care for millions.

**By leveraging:**
- 🤖 Gemini 2.5's multimodal capabilities
- 🗣️ Natural voice interaction in 100+ languages
- 📱 Offline-first architecture for privacy
- 🛡️ Admin controls for vulnerable user protection
- ❤️ Empathetic AI companionship

**We're solving:**
- 300M+ elderly people needing care in India
- Language barriers in healthcare technology
- Shortage of professional care-givers
- Social isolation and loneliness
- Medication non-compliance
- Emergency response delays

**This app is not just technology - it's compassion, delivered through code.**

---

**Made with ❤️ for Humanity**
**Powered by Gemini 2.5, GCP, React Native, and Arm AI**
**Privacy-First | Multilingual | Voice-First | Care-First**

---

# 🛠️ **INSTALLATION & SETUP GUIDE (ARM AI)**

To run and develop this application with the new Arm-optimized AI features, you need the following environment setup.

## **Prerequisites**

1.  **Operating System**: Windows 10/11, macOS, or Linux.
2.  **Node.js**: Version 18 or higher.
3.  **Java Development Kit (JDK)**: **Version 17** (Critical for React Native 0.76+).
    -   Recommended: Microsoft Build of OpenJDK 17 or Eclipse Temurin JDK 17.
4.  **Android Studio**: Hedgehog or newer.
    -   **SDK Platforms**: Android 14 (API 34).
    -   **SDK Tools**: Android SDK Build-Tools 34.0.0, NDK (Side by side) 26.1.x, CMake 3.22.1.

## **Setup Steps**

1.  **Clone Repository**: Download the source code.
2.  **Install Dependencies**: Run `npm install` in the root directory.
3.  **Environment Variables**:
    -   Create a `.env` file.
    -   Add `HF_TOKEN` (HuggingFace Token) for model downloading.
    -   Add `GEMINI_API_KEY` for cloud fallback.
4.  **Download Models**:
    -   The app will attempt to download models (Llama/Whisper) on the first run.
    -   Ensure you have a stable internet connection for the initial setup (approx. 2GB download).

## **Running the App**

1.  **Start Metro Bundler**: `npm start`
2.  **Run on Android**: `npm run android`
    -   Ensure an Android Emulator or Physical Device is connected.
    -   **Note**: Physical device recommended for AI performance testing.

---

# 🐞 **DEBUGGING & TESTING (ARM AI)**

We have built specific tools to make debugging the AI components easier.

## **Debug Mode**

The app includes a hidden **Debug Screen** to monitor the internal state of the AI engine.

**How to Access:**
1.  Launch the app.
2.  Look for the **Ladybug Icon (🐞)** on the bottom right of the screen.
3.  Tap it to open the **Arm AI Debugger**.

## **Debug Features**

-   **Model Status**: Shows which model is currently loaded (e.g., "LLAMA_3.2_3B", "GEMMA_2B", or "RULE_BASED").
-   **Device Capabilities**: Displays RAM and CPU info to verify if "Low-End Device" mode is active.
-   **Real-Time Logs**: View internal logs from the Native Module (e.g., "Loading model...", "Inference time: 150ms").
-   **Test Chat**: A simple text input to send queries directly to the AI engine and see the raw response.

## **Testing Scenarios**

1.  **High-End Device Test**:
    -   Run on a phone with >6GB RAM.
    -   Verify "LLAMA_3.2_3B" is loaded.
    -   Ask complex questions and check response quality.

2.  **Low-End Device Test**:
    -   Run on a phone (or emulator) with <6GB RAM.
    -   Verify "GEMMA_2B" or "RULE_BASED" is loaded.
    -   Check if basic commands (Medicine, Help) still work.

3.  **Offline Test**:
    -   Turn off WiFi/Data.
    -   Verify that Voice and Chat still respond using the on-device models.


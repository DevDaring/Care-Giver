# ❤️ Care-Giver: AI Companion for the Elderly

> **"Compassion delivered through Code."**

**Care-Giver** is a next-generation AI companion designed to empower the elderly, ensuring they live with dignity, independence, and safety. By combining the power of **Google Gemini 2.5** with **Arm-optimized On-Device AI**, we bridge the gap between advanced technology and human-centric care.

---

## 🌟 The Problem
- **300M+ Elderly** in India alone need care, with numbers rising globally.
- **Language Barriers** prevent access to modern healthcare technology.
- **Loneliness & Isolation** are silent epidemics among seniors.
- **Privacy Concerns** limit the adoption of always-listening devices.

## 💡 The Solution
**Care-Giver** is a **Voice-First, Multilingual, and Privacy-Focused** application that acts as a 24/7 companion. It understands local dialects, manages health schedules, provides companionship, and works offline.

---

## 🚀 Key Features

### 🧠 **Hybrid AI Architecture (Cloud + Edge)**
- **Online Mode**: Powered by **Gemini 2.5 Flash** for complex reasoning, multimodal analysis (vision), and deep conversations.
- **Offline Mode (Arm AI)**: Powered by **Llama 3.2 (3B)** and **Gemma 2B** running locally on Android.
    - **Zero Latency**: Instant responses for emergencies.
    - **100% Privacy**: Personal data never leaves the device.
    - **No Internet Needed**: Critical features work without Wi-Fi.

### 🗣️ **Voice-First & Multilingual**
- Speaks and understands **100+ languages** (Hindi, Tamil, Telugu, English, etc.).
- **Whisper (cpp)** integration for accurate, on-device speech-to-text.
- Natural, empathetic voice synthesis.

### 🛡️ **Safety & Health**
- **Medicine Reminders**: Visual and voice alerts for medication.
- **Emergency SOS**: Detects distress keywords ("Help", "Fallen") and alerts contacts.
- **Fall Detection**: Uses device sensors to monitor safety.

### 📸 **Smart Vision**
- **Prescription Reading**: Scan medicine bottles to know dosage and usage.
- **Object Recognition**: Helps visually impaired users identify surroundings.

---

## 🛠️ Technology Stack

| Component | Technology |
|-----------|------------|
| **Mobile Framework** | React Native (0.76+) |
| **Cloud AI** | Google Gemini 2.5 Flash, GCP Vertex AI |
| **On-Device AI** | Llama 3.2 3B, Gemma 2B, Whisper.cpp |
| **Optimization** | Arm KleidiAI, ExecuTorch |
| **Backend** | Google Cloud Platform (Cloud Run, Firebase) |
| **Languages** | TypeScript, C++, Java, Kotlin |

---

## 📱 Installation & Setup

### Prerequisites
- **Node.js** v18+
- **JDK 17** (Required)
- **Android Studio** (SDK 34, NDK 26.1.x, CMake 3.22.1)

### Quick Start
1.  **Clone the repo**:
    ```bash
    git clone https://github.com/DevDaring/Care-Giver.git
    cd Care-Giver
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Configure Secrets**:
    - Create `src/config/secrets.ts` (see `secrets.ts.example` or documentation).
    - Add your **HuggingFace Token** and **Gemini API Key**.
4.  **Run the App**:
    ```bash
    npm run android
    ```

### ⚙️ Configuration Flags
You can control the AI behavior in `src/config/secrets.ts`:
```typescript
export const SECRETS = {
  // ... keys
  API_FLAG: 0, // 0 = Offline Only (Strict Privacy), 1 = Hybrid (Best Performance)
};
```

---

## 🐞 Debugging Tools
The app includes a built-in **Arm AI Debugger**.
- Tap the **Ladybug Icon (🐞)** on the home screen.
- Monitor RAM usage, model loading status, and inference speed in real-time.

---

## 🔒 Privacy Commitment
- **Data Minimization**: We only collect what's needed.
- **On-Device Processing**: Voice and chat data are processed locally whenever possible.
- **User Control**: You own your data.

---

**Built for the Google Cloud x Arm Hackathon**
*Empowering Care through Innovation.*

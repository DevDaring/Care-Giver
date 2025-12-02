# 📱 Device Specifications for Offline AI

To run **Care-Giver** entirely offline with zero latency and 100% privacy, the device must be capable of running Large Language Models (LLMs) and Speech models locally. This document outlines the hardware requirements.

---

## 🧠 AI Models & Memory Usage

The application dynamically selects models based on the device's available RAM. We use **Quantized (Q4_K_M)** versions of models to balance performance and size.

| Model Name | Parameters | Quantization | Approx. RAM Usage | Function |
| :--- | :--- | :--- | :--- | :--- |
| **Llama 3.2** | 3 Billion | 4-bit (Q4) | **~2.2 GB** | Complex reasoning, medical advice, empathy. |
| **Gemma 2** | 2 Billion | 4-bit (Q4) | **~1.6 GB** | Basic chat, fallback for lower-end devices. |
| **Whisper** | Base | Integer | **~200 MB** | Real-time Speech-to-Text (Hearing). |
| **System Overhead** | N/A | N/A | **~1.5 GB** | OS + App UI + Background processes. |

> **Total Active RAM Required**: ~4 GB just for the App + AI + OS.

---

## ⚙️ Hardware Requirements

### ✅ Recommended (High-Performance)
*For the best experience: Instant voice response, smooth conversation, and multitasking.*

*   **RAM**: **8 GB - 12 GB LPDDR5X**
    *   Allows keeping the 3B model loaded in memory without OS killing it.
*   **Processor (SoC)**:
    *   **Qualcomm**: Snapdragon 8 Gen 2 / Gen 3 (Adreno GPU + Hexagon NPU).
    *   **MediaTek**: Dimensity 9300 / 9400 (APU 790).
    *   **Google**: Tensor G3 / G4 (Edge TPU).
    *   **Samsung**: Exynos 2400.
*   **Storage**: **UFS 3.1 or UFS 4.0** (Fast model loading).
*   **NPU**: Dedicated Neural Processing Unit is highly recommended for battery efficiency.

### ⚠️ Minimum (Basic Functionality)
*Will run the smaller Gemma 2B model. Responses might be slower (2-5 seconds).*

*   **RAM**: **6 GB**
    *   Devices with 4GB RAM will likely struggle and may force the app to use the **Rule-Based Fallback** system.
*   **Processor (SoC)**:
    *   **Qualcomm**: Snapdragon 7+ Gen 2 / 7 Gen 3.
    *   **MediaTek**: Dimensity 8200 / 8300.
*   **Storage**: 5GB free space required for model weights.

---

## 🔋 Battery & Thermal Considerations
Running On-Device AI is computationally intensive.
- **Battery Drain**: Expect 15-20% higher drain during active conversation.
- **Thermals**: Continuous inference can heat up the device. The app includes a thermal throttle mechanism to switch to lighter models if the device gets too hot.

---

## 📂 Storage Requirements
The app downloads models on the first launch.
- **Llama 3.2 3B**: ~2.0 GB
- **Gemma 2B**: ~1.5 GB
- **Whisper Base**: ~150 MB
- **Total Free Space Needed**: **~4 GB**

# CareGiver App - Complete Issue Fix Documentation

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Version Compatibility Matrix](#version-compatibility-matrix)
3. [Critical Issues & Solutions](#critical-issues--solutions)
4. [Environment Setup](#environment-setup)
5. [Build Commands](#build-commands)
6. [Troubleshooting Guide](#troubleshooting-guide)

---

## 🎯 Project Overview

**App Name:** CareGiver App  
**React Native Version:** 0.75.4  
**Platform:** Android  
**Key Features:** Voice Recognition, Camera, Maps, Text-to-Speech, AI Integration (Gemini)

---

## 📊 Version Compatibility Matrix

### Final Working Versions

| Component | Version | Notes |
|-----------|---------|-------|
| React Native | 0.75.4 | Core framework |
| React | 18.3.1 | Must match RN version |
| Gradle | 8.6 | In `gradle-wrapper.properties` |
| Android Gradle Plugin (AGP) | 8.1.4 | In `build.gradle` |
| Kotlin | 1.9.24 | In `build.gradle` |
| **Java** | **17** | ⚠️ CRITICAL - Java 25 NOT supported |
| compileSdkVersion | 34 | Android 14 |
| minSdkVersion | 24 | Android 7.0 |
| targetSdkVersion | 34 | Android 14 |

### Native Module Versions

| Module | Version | Purpose |
|--------|---------|---------|
| react-native-reanimated | 3.16.1 | Animations (requires Java 17) |
| react-native-gesture-handler | 2.20.2 | Gesture handling |
| react-native-screens | 4.0.0 | Screen navigation |
| react-native-safe-area-context | 4.14.0 | Safe area handling |
| react-native-camera | 4.2.1 | Camera functionality |
| react-native-maps | 1.10.0 | Maps integration |
| react-native-tts | 4.1.0 | Text-to-speech |
| @react-native-voice/voice | 3.2.4 | Voice recognition |
| react-native-fs | 2.20.0 | File system access |

---

## 🔧 Critical Issues & Solutions

### Issue 1: Java 25 Not Supported by Gradle

**Error:**
```
Unsupported class file major version 69
java.lang.IllegalArgumentException: 25.0.1
```

**Cause:** Cursor IDE bundles Java 25 which Gradle 8.6 doesn't support.

**Solution:** Use Java 17 instead.

```cmd
:: Set JAVA_HOME permanently (run once)
setx JAVA_HOME "C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot"

:: Or set temporarily for current session
set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot"
```

**Verify:**
```cmd
"%JAVA_HOME%\bin\java" -version
:: Should show: openjdk version "17.x.x"
```

---

### Issue 2: Gradle Sync Hangs on "Evaluating settings"

**Cause:** `native_modules.gradle` runs CLI commands that hang on Windows.

**Solution:** Use manual linking instead of autolinking.

**android/settings.gradle:**
```groovy
rootProject.name = 'CareGiverApp'
include ':app'

// Manual linking (no autolinking - avoids Windows hang)
include ':react-native-voice'
project(':react-native-voice').projectDir = new File(rootProject.projectDir, '../node_modules/@react-native-voice/voice/android')

include ':react-native-camera'
project(':react-native-camera').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-camera/android')

include ':react-native-maps'
project(':react-native-maps').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-maps/android')

include ':react-native-tts'
project(':react-native-tts').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-tts/android')

include ':react-native-gesture-handler'
project(':react-native-gesture-handler').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-gesture-handler/android')

include ':react-native-screens'
project(':react-native-screens').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-screens/android')

include ':react-native-safe-area-context'
project(':react-native-safe-area-context').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-safe-area-context/android')

include ':react-native-reanimated'
project(':react-native-reanimated').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-reanimated/android')

include ':react-native-fs'
project(':react-native-fs').projectDir = new File(rootProject.projectDir, '../node_modules/react-native-fs/android')
```

---

### Issue 3: Missing Namespace for AGP 8.x

**Error:**
```
Namespace not specified for library module
```

**Cause:** Old native modules have `package` in AndroidManifest.xml instead of `namespace` in build.gradle.

**Solution:** Add global namespace fix in `android/build.gradle`:

```groovy
allprojects {
    afterEvaluate { project ->
        if (project.plugins.hasPlugin('com.android.library')) {
            project.android {
                if (namespace == null || namespace.isEmpty()) {
                    def manifestFile = file("${project.projectDir}/src/main/AndroidManifest.xml")
                    if (manifestFile.exists()) {
                        def manifest = new XmlSlurper().parse(manifestFile)
                        def packageName = manifest.@package.toString()
                        if (packageName) {
                            namespace = packageName
                        }
                    }
                }
                buildFeatures {
                    buildConfig = true
                }
                compileOptions {
                    sourceCompatibility JavaVersion.VERSION_17
                    targetCompatibility JavaVersion.VERSION_17
                }
            }
        }
    }
}
```

---

### Issue 4: Cannot Find com.facebook.react:react-native

**Error:**
```
Could not resolve com.facebook.react:react-native:+
```

**Cause:** RN 0.75+ uses `react-android` instead of `react-native`.

**Solution:** Add to `android/build.gradle`:

```groovy
allprojects {
    repositories {
        maven { url("$rootDir/../node_modules/react-native/android") }
        maven { url("$rootDir/../node_modules/hermes-engine/android") }
        google()
        mavenCentral()
    }

    configurations.all {
        resolutionStrategy {
            force "com.facebook.react:react-android:0.75.4"
            force "com.facebook.react:hermes-android:0.75.4"
            
            dependencySubstitution {
                substitute module("com.facebook.react:react-native") 
                    using module("com.facebook.react:react-android:0.75.4")
            }
        }
    }
}
```

---

### Issue 5: MainReactPackage Missing (Grey Screen)

**Error:**
```
TurboModuleRegistry.getEnforcing(...): 'AppState' could not be found
'WebSocketModule' could not be found
```

**Cause:** Core React Native packages not registered when using manual linking.

**Solution:** Add `MainReactPackage` in `MainApplication.java`:

```java
import com.facebook.react.shell.MainReactPackage;

@Override
protected List<ReactPackage> getPackages() {
    List<ReactPackage> packages = new ArrayList<>();
    
    // CRITICAL: Add MainReactPackage for core RN modules
    packages.add(new MainReactPackage());
    
    // Add manually linked packages
    packages.add(new VoicePackage());
    packages.add(new RNCameraPackage());
    // ... other packages
    
    return packages;
}
```

---

### Issue 6: Metro Watcher Error (ENOENT)

**Error:**
```
Error: ENOENT: no such file or directory, watch 
'node_modules/react-native-gesture-handler/android/build/...'
```

**Cause:** Metro tries to watch Android build directories that don't exist.

**Solution:** Update `metro.config.js`:

```javascript
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    blockList: [
      /node_modules\/.*\/android\/build\/.*/,
      /node_modules\/.*\/ios\/build\/.*/,
      /node_modules\/.*\/\.gradle\/.*/,
      /android\/build\/.*/,
      /android\/app\/build\/.*/,
    ],
  },
  watcher: {
    additionalExts: ['cjs'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
```

Also create `.watchmanconfig`:
```json
{
  "ignore_dirs": [
    "node_modules/**/android/build",
    "node_modules/**/ios/build",
    "android/build",
    "android/app/build"
  ]
}
```

---

### Issue 7: NativeEventEmitter Warnings

**Warning:**
```
new NativeEventEmitter() was called with a non-null argument 
without the required addListener method
```

**Cause:** Older versions of react-native-tts and @react-native-voice/voice.

**Solution:** Suppress in `App.tsx`:

```javascript
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
  'new NativeEventEmitter',
  '`new NativeEventEmitter()`',
  'NativeEventEmitter was called with a non-null',
]);
```

---

### Issue 8: Port 8081 Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::8081
```

**Solution:**
```cmd
:: Find process using port
netstat -ano | findstr :8081

:: Kill the process (replace PID with actual number)
taskkill /PID <PID> /F

:: Or kill all Node processes
taskkill /F /IM node.exe
```

---

### Issue 9: App Not Connected to Metro

**Warning:**
```
No apps connected. Sending "reload" to all React Native apps failed.
```

**Solution:**
```cmd
:: 1. Ensure ADB reverse is set
adb reverse tcp:8081 tcp:8081

:: 2. Reinstall the app
set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot"
npx react-native run-android
```

---

## 🛠️ Environment Setup

### Prerequisites

1. **Node.js** >= 18
2. **Java JDK 17** (NOT 8, 11, or 25!)
3. **Android Studio** with:
   - Android SDK 34
   - Android SDK Build-Tools 34.0.0
   - Android SDK Platform-Tools

### Environment Variables

```cmd
:: Set permanently
setx JAVA_HOME "C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot"
setx ANDROID_HOME "%LOCALAPPDATA%\Android\Sdk"

:: Add to PATH (manually in System Properties):
%JAVA_HOME%\bin
%ANDROID_HOME%\platform-tools
```

---

## 🚀 Build Commands

### First Time Setup
```cmd
cd D:\Contest\Care-Giver\CareGiverApp

:: Install dependencies
npm install

:: Clean build artifacts from node_modules
rd /s /q node_modules\react-native-gesture-handler\android\build 2>nul
rd /s /q node_modules\react-native-reanimated\android\build 2>nul
rd /s /q node_modules\react-native-screens\android\build 2>nul

:: Clean Android build
cd android
set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot"
.\gradlew.bat --stop
.\gradlew.bat clean
cd ..
```

### Running the App

**Terminal 1 - Start Metro:**
```cmd
cd D:\Contest\Care-Giver\CareGiverApp
npx react-native start --reset-cache
```

**Terminal 2 - Run on Device:**
```cmd
cd D:\Contest\Care-Giver\CareGiverApp
set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot"
adb reverse tcp:8081 tcp:8081
npx react-native run-android
```

---

## 🔍 Troubleshooting Guide

### Quick Fixes

| Problem | Solution |
|---------|----------|
| Build hangs | Kill Java: `taskkill /F /IM java.exe` |
| Port 8081 in use | Kill Node: `taskkill /F /IM node.exe` |
| Metro not connecting | Run: `adb reverse tcp:8081 tcp:8081` |
| Grey screen | Check MainReactPackage is added |
| Gradle error | Check JAVA_HOME points to Java 17 |

### Full Reset
```cmd
:: Kill all processes
taskkill /F /IM java.exe 2>nul
taskkill /F /IM node.exe 2>nul

:: Clean everything
cd D:\Contest\Care-Giver\CareGiverApp
rd /s /q node_modules\.cache 2>nul
rd /s /q android\.gradle 2>nul
rd /s /q android\app\build 2>nul

:: Reinstall and rebuild
npm install
cd android
set "JAVA_HOME=C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot"
.\gradlew.bat clean
cd ..
npx react-native start --reset-cache
```

---

## 📁 Key File Locations

| File | Purpose |
|------|---------|
| `android/build.gradle` | SDK versions, dependency resolution |
| `android/app/build.gradle` | App config, manual dependencies |
| `android/settings.gradle` | Manual module linking |
| `android/gradle.properties` | Gradle properties (Jetifier) |
| `android/gradle/wrapper/gradle-wrapper.properties` | Gradle version |
| `android/app/src/main/java/.../MainApplication.java` | Package registration |
| `metro.config.js` | Metro bundler config |
| `.watchmanconfig` | File watcher ignore rules |

---

## ✅ Final Checklist

- [ ] Java 17 installed and JAVA_HOME set
- [ ] Android SDK 34 installed
- [ ] ANDROID_HOME environment variable set
- [ ] `npm install` completed
- [ ] Manual linking in settings.gradle correct
- [ ] MainReactPackage added to MainApplication.java
- [ ] metro.config.js has blockList for build directories
- [ ] Device connected (`adb devices` shows device)
- [ ] ADB reverse set (`adb reverse tcp:8081 tcp:8081`)
- [ ] Metro bundler running

---

**Document Created:** December 2, 2025  
**React Native Version:** 0.75.4  
**Last Updated:** December 2, 2025

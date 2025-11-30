package com.caregiverapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

import android.app.ActivityManager;
import android.content.Context;
import android.os.Build;

import java.io.File;

public class NativeAIModule extends ReactContextBaseJavaModule {
    private static ReactApplicationContext reactContext;

    // Load the native library
    static {
        try {
            System.loadLibrary("native-lib");
        } catch (UnsatisfiedLinkError e) {
            System.err.println("Native code library failed to load.\n" + e);
        }
    }

    public NativeAIModule(ReactApplicationContext context) {
        super(context);
        reactContext = context;
    }

    @Override
    public String getName() {
        return "NativeAIModule";
    }

    // Native methods implemented in C++
    private native String loadModelNative(String modelPath, boolean useGpu);
    private native String generateTextNative(String prompt, int maxTokens);
    private native String transcribeAudioNative(String audioPath);
    private native void unloadModelNative();

    @ReactMethod
    public void loadModel(String modelPath, boolean useGpu, Promise promise) {
        try {
            File file = new File(modelPath);
            if (!file.exists()) {
                promise.reject("FILE_NOT_FOUND", "Model file not found at: " + modelPath);
                return;
            }
            
            String result = loadModelNative(modelPath, useGpu);
            if ("SUCCESS".equals(result)) {
                promise.resolve("Model loaded successfully");
            } else {
                promise.reject("LOAD_FAILED", result);
            }
        } catch (Exception e) {
            promise.reject("ERROR", e.getMessage());
        }
    }

    @ReactMethod
    public void generateText(String prompt, int maxTokens, Promise promise) {
        try {
            String result = generateTextNative(prompt, maxTokens);
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject("GENERATION_ERROR", e.getMessage());
        }
    }

    @ReactMethod
    public void transcribeAudio(String audioPath, Promise promise) {
        try {
            File file = new File(audioPath);
            if (!file.exists()) {
                promise.reject("FILE_NOT_FOUND", "Audio file not found at: " + audioPath);
                return;
            }
            String result = transcribeAudioNative(audioPath);
            promise.resolve(result);
        } catch (Exception e) {
            promise.reject("TRANSCRIPTION_ERROR", e.getMessage());
        }
    }

    @ReactMethod
    public void unloadModel(Promise promise) {
        try {
            unloadModelNative();
            promise.resolve("Model unloaded");
        } catch (Exception e) {
            promise.reject("ERROR", e.getMessage());
        }
    }

    @ReactMethod
    public void getDeviceCapabilities(Promise promise) {
        try {
            ActivityManager.MemoryInfo memoryInfo = new ActivityManager.MemoryInfo();
            ActivityManager activityManager = (ActivityManager) reactContext.getSystemService(Context.ACTIVITY_SERVICE);
            activityManager.getMemoryInfo(memoryInfo);

            long totalMemory = memoryInfo.totalMem; // in bytes
            int cores = Runtime.getRuntime().availableProcessors();
            String arch = System.getProperty("os.arch");

            WritableMap map = Arguments.createMap();
            map.putDouble("totalMemory", (double) totalMemory);
            map.putInt("cpuCores", cores);
            map.putString("arch", arch);
            map.putBoolean("isLowRam", activityManager.isLowRamDevice());

            promise.resolve(map);
        } catch (Exception e) {
            promise.reject("ERROR", e.getMessage());
        }
    }
}

package com.caregiverapp;

import android.content.Context;
import com.facebook.react.ReactInstanceManager;

/**
 * Class responsible for loading Flipper inside your React Native application. This is the release
 * flavor. This is so that Flipper is not initialized in release builds.
 */
public class ReactNativeFlipper {
  public static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {
    // No-op by default
  }
}

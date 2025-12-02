package com.caregiverapp;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactNativeHost;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.ArrayList;
import java.util.List;

// Manual package imports for linked modules
import com.wenkesj.voice.VoicePackage;
import org.reactnative.camera.RNCameraPackage;
import com.rnmaps.maps.MapsPackage;
import net.no_mad.tts.TextToSpeechPackage;
import com.swmansion.gesturehandler.RNGestureHandlerPackage;
import com.swmansion.rnscreens.RNScreensPackage;
import com.th3rdwave.safeareacontext.SafeAreaContextPackage;
import com.swmansion.reanimated.ReanimatedPackage;
import com.rnfs.RNFSPackage;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new DefaultReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          List<ReactPackage> packages = new ArrayList<>();
          
          // Add MainReactPackage which contains all core RN modules
          // (AppState, WebSocketModule, ImageLoader, etc.)
          packages.add(new MainReactPackage());
          
          // Add manually linked packages
          packages.add(new VoicePackage());
          packages.add(new RNCameraPackage());
          packages.add(new MapsPackage());
          packages.add(new TextToSpeechPackage());
          packages.add(new RNGestureHandlerPackage());
          packages.add(new RNScreensPackage());
          packages.add(new SafeAreaContextPackage());
          packages.add(new ReanimatedPackage());
          packages.add(new RNFSPackage());
          
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }

        @Override
        protected boolean isNewArchEnabled() {
          return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
        }

        @Override
        protected Boolean isHermesEnabled() {
          return BuildConfig.IS_HERMES_ENABLED;
        }
      };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      DefaultNewArchitectureEntryPoint.load();
    }
  }
}

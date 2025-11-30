/**
 * AI Care-Giver Companion App
 * Voice-First, Multilingual Care System
 */

import React, {useEffect, useState} from 'react';
import {StatusBar, LogBox, View, Button, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

// Redux store
import {store} from './store/store';

// Database
import {initDatabase} from './database';

// i18n
import './localization/i18n';

// Navigation
import RootNavigator from './navigation/RootNavigator';

// Services
import { AIService } from './services/AIService';
import { DebugScreen } from './screens/DebugScreen';

// Ignore specific warnings
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    // Initialize database on app start
    initDatabase()
      .then(() => {
        console.log('Database initialized successfully');
      })
      .catch(error => {
        console.error('Failed to initialize database:', error);
      });

    // Initialize AI Service (Arm Optimization)
    AIService.getInstance().initialize();
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider store={store}>
          {showDebug ? (
            <View style={{flex: 1}}>
              <DebugScreen />
              <Button title="Close Debugger" onPress={() => setShowDebug(false)} />
            </View>
          ) : (
            <NavigationContainer>
              <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
              <RootNavigator />
              <View style={styles.debugButton}>
                <Button title="🐞" onPress={() => setShowDebug(true)} color="#333" />
              </View>
            </NavigationContainer>
          )}
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  debugButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    opacity: 0.5
  }
});

export default App;

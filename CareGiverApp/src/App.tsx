/**
 * AI Care-Giver Companion App
 * Voice-First, Multilingual Care System
 */

import React, {useEffect} from 'react';
import {StatusBar, LogBox} from 'react-native';
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

// Ignore specific warnings
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  useEffect(() => {
    // Initialize database on app start
    initDatabase()
      .then(() => {
        console.log('Database initialized successfully');
      })
      .catch(error => {
        console.error('Failed to initialize database:', error);
      });
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider store={store}>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
            <RootNavigator />
          </NavigationContainer>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;

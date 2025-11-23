// Splash screen

import React, {useEffect} from 'react';
import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProp} from '@/types/navigation.types';
import {COLORS, SIZES} from '@/config/constants';

const SplashScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  useEffect(() => {
    // Simulate app initialization
    setTimeout(() => {
      // Navigate to language selection after 2 seconds
      navigation.replace('LanguageSelection');
    }, 2000);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🤖❤️</Text>
      <Text style={styles.appName}>AI Care-Giver</Text>
      <Text style={styles.tagline}>Your 24/7 Companion</Text>
      <ActivityIndicator
        size="large"
        color={COLORS.primary}
        style={styles.loader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 64,
    marginBottom: SIZES.spacingLarge,
  },
  appName: {
    fontSize: SIZES.fontXXLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.spacingSmall,
  },
  tagline: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textSecondary,
  },
  loader: {
    marginTop: SIZES.spacingXLarge,
  },
});

export default SplashScreen;

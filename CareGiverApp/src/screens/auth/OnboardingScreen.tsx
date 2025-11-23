// Onboarding screen (placeholder)

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProp} from '@/types/navigation.types';
import {COLORS, SIZES} from '@/config/constants';

const OnboardingScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🗣️</Text>
      <Text style={styles.title}>Talk to Me in Any Language</Text>
      <Text style={styles.subtitle}>I understand voice and text</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RoleSelection')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('RoleSelection')}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
    padding: SIZES.spacingLarge,
  },
  emoji: {
    fontSize: 80,
    marginBottom: SIZES.spacingLarge,
  },
  title: {
    fontSize: SIZES.fontXLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: SIZES.spacingSmall,
  },
  subtitle: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SIZES.spacingXLarge,
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SIZES.spacingXLarge * 2,
    paddingVertical: SIZES.spacingMedium,
    borderRadius: SIZES.radiusLarge,
    marginTop: SIZES.spacingXLarge,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: SIZES.fontLarge,
    fontWeight: 'bold',
  },
  skipText: {
    color: COLORS.textSecondary,
    fontSize: SIZES.fontMedium,
    marginTop: SIZES.spacingLarge,
  },
});

export default OnboardingScreen;

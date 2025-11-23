// Language selection screen (placeholder)

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProp} from '@/types/navigation.types';
import {COLORS, SIZES} from '@/config/constants';
import {SUPPORTED_LANGUAGES} from '@/config/languages';

const LanguageSelectionScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  const handleLanguageSelect = (languageCode: string) => {
    // TODO: Save selected language
    console.log('Selected language:', languageCode);
    navigation.navigate('Onboarding');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>🌍 Choose Your Language</Text>
      <Text style={styles.subtitle}>अपनी भाषा चुनें</Text>

      {SUPPORTED_LANGUAGES.slice(0, 5).map(lang => (
        <TouchableOpacity
          key={lang.code}
          style={styles.languageButton}
          onPress={() => handleLanguageSelect(lang.code)}>
          <Text style={styles.languageText}>
            {lang.flag} {lang.nativeName} ({lang.name})
          </Text>
        </TouchableOpacity>
      ))}

      <Text style={styles.voiceHint}>Or say: "मैं हिंदी बोलता हूं"</Text>
      <Text style={styles.voiceHint}>🎤 Tap mic to speak language</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SIZES.spacingLarge,
  },
  title: {
    fontSize: SIZES.fontXLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginBottom: SIZES.spacingSmall,
  },
  subtitle: {
    fontSize: SIZES.fontLarge,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SIZES.spacingXLarge,
  },
  languageButton: {
    backgroundColor: COLORS.primary,
    padding: SIZES.spacingMedium,
    borderRadius: SIZES.radiusMedium,
    marginBottom: SIZES.spacingMedium,
  },
  languageText: {
    fontSize: SIZES.fontLarge,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  voiceHint: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: SIZES.spacingMedium,
  },
});

export default LanguageSelectionScreen;

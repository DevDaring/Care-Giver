// Role selection screen (placeholder)

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationProp} from '@/types/navigation.types';
import {COLORS, SIZES} from '@/config/constants';

const RoleSelectionScreen = () => {
  const navigation = useNavigation<AuthNavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Who are you?</Text>
      <Text style={styles.subtitle}>आप कौन हैं?</Text>

      <TouchableOpacity
        style={[styles.roleCard, styles.userCard]}
        onPress={() => navigation.navigate('Signup', {role: 'USER'})}>
        <Text style={styles.roleEmoji}>👤</Text>
        <Text style={styles.roleTitle}>USER</Text>
        <Text style={styles.roleDescription}>I need care & help</Text>
        <Text style={styles.roleDescriptionNative}>मुझे देखभाल चाहिए</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.roleCard, styles.adminCard]}
        onPress={() => navigation.navigate('Signup', {role: 'ADMIN'})}>
        <Text style={styles.roleEmoji}>🛡️</Text>
        <Text style={styles.roleTitle}>ADMIN</Text>
        <Text style={styles.roleDescription}>I manage someone's care</Text>
        <Text style={styles.roleDescriptionNative}>मैं किसी की देखभाल करता/करती हूं</Text>
      </TouchableOpacity>

      <Text style={styles.voiceHint}>Or say: "I am a user"</Text>
      <Text style={styles.voiceHint}>🎤 Voice input</Text>
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
  title: {
    fontSize: SIZES.fontXLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.spacingSmall,
  },
  subtitle: {
    fontSize: SIZES.fontLarge,
    color: COLORS.textSecondary,
    marginBottom: SIZES.spacingXLarge,
  },
  roleCard: {
    width: '100%',
    padding: SIZES.spacingLarge,
    borderRadius: SIZES.radiusLarge,
    marginBottom: SIZES.spacingMedium,
    alignItems: 'center',
  },
  userCard: {
    backgroundColor: COLORS.primaryLight,
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  adminCard: {
    backgroundColor: '#FFF3E0',
    borderWidth: 2,
    borderColor: COLORS.secondary,
  },
  roleEmoji: {
    fontSize: 48,
    marginBottom: SIZES.spacingSmall,
  },
  roleTitle: {
    fontSize: SIZES.fontLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    marginBottom: SIZES.spacingSmall,
  },
  roleDescription: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  roleDescriptionNative: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: 4,
  },
  voiceHint: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: SIZES.spacingMedium,
  },
});

export default RoleSelectionScreen;

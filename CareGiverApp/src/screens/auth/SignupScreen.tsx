// Signup screen (placeholder)

import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useRoute} from '@react-navigation/native';
import {loginSuccess} from '@/store/slices/authSlice';
import {COLORS, SIZES} from '@/config/constants';
import {User} from '@/types/common.types';
import {SignupRouteProp} from '@/types/navigation.types';

const SignupScreen = () => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [emergencyContact, setEmergencyContact] = useState('');
  const dispatch = useDispatch();
  const route = useRoute<SignupRouteProp>();
  const role = route.params?.role || 'USER';

  const handleSignup = () => {
    // Mock signup - in real app, save to database
    const newUser: User = {
      id: Date.now().toString(),
      name,
      role,
      language: 'en',
      pin,
      phoneNumber: emergencyContact,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    dispatch(loginSuccess(newUser));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tell me about yourself</Text>
      <Text style={styles.subtitle}>अपने बारे में बताएं</Text>

      <Text style={styles.label}>👤 Your Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your name"
        placeholderTextColor={COLORS.textLight}
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.label}>🔑 Create a PIN (4 digits)</Text>
      <TextInput
        style={styles.input}
        placeholder="_ _ _ _"
        placeholderTextColor={COLORS.textLight}
        value={pin}
        onChangeText={setPin}
        secureTextEntry
        keyboardType="numeric"
        maxLength={4}
      />

      <Text style={styles.label}>📞 Emergency Contact (Optional)</Text>
      <TextInput
        style={styles.input}
        placeholder="Phone number"
        placeholderTextColor={COLORS.textLight}
        value={emergencyContact}
        onChangeText={setEmergencyContact}
        keyboardType="phone-pad"
      />

      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.voiceHint}>Or just say: "My name is Raj, PIN 1234"</Text>
      <Text style={styles.voiceHint}>🎤 Voice signup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SIZES.spacingLarge,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: SIZES.fontXLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    textAlign: 'center',
    marginTop: SIZES.spacingXLarge,
    marginBottom: SIZES.spacingSmall,
  },
  subtitle: {
    fontSize: SIZES.fontLarge,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SIZES.spacingXLarge,
  },
  label: {
    fontSize: SIZES.fontMedium,
    color: COLORS.text,
    marginBottom: SIZES.spacingSmall,
    fontWeight: '500',
  },
  input: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.radiusMedium,
    padding: SIZES.spacingMedium,
    fontSize: SIZES.fontMedium,
    color: COLORS.text,
    marginBottom: SIZES.spacingMedium,
  },
  button: {
    backgroundColor: COLORS.primary,
    padding: SIZES.spacingMedium,
    borderRadius: SIZES.radiusMedium,
    marginTop: SIZES.spacingLarge,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: SIZES.fontLarge,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  voiceHint: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginTop: SIZES.spacingMedium,
  },
});

export default SignupScreen;

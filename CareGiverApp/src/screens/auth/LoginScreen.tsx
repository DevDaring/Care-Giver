// Login screen (placeholder)

import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {loginSuccess} from '@/store/slices/authSlice';
import {COLORS, SIZES} from '@/config/constants';
import {User} from '@/types/common.types';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = () => {
    // Mock login - in real app, authenticate against database
    const mockUser: User = {
      id: '1',
      name: name || 'Test User',
      role: 'USER',
      language: 'en',
      pin: pin,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    dispatch(loginSuccess(mockUser));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back! 👋</Text>
      <Text style={styles.subtitle}>वापसी पर स्वागत है!</Text>

      <TextInput
        style={styles.input}
        placeholder="Your Name"
        placeholderTextColor={COLORS.textLight}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="PIN / Password"
        placeholderTextColor={COLORS.textLight}
        value={pin}
        onChangeText={setPin}
        secureTextEntry
        keyboardType="numeric"
        maxLength={4}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Don't have account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: SIZES.spacingLarge,
    backgroundColor: COLORS.background,
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
    marginTop: SIZES.spacingMedium,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: SIZES.fontLarge,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  linkText: {
    color: COLORS.primary,
    fontSize: SIZES.fontMedium,
    textAlign: 'center',
    marginTop: SIZES.spacingLarge,
  },
});

export default LoginScreen;

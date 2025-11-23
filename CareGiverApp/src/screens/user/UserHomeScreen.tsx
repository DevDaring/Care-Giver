// User home screen (placeholder)

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '@/store/store';
import {logout} from '@/store/slices/authSlice';
import {COLORS, SIZES} from '@/config/constants';

const UserHomeScreen = () => {
  const {user} = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>{getGreeting()}, {user?.name}! 👋</Text>
          <Text style={styles.greetingNative}>शुभ प्रभात {user?.name}!</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text style={styles.logoutText}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Chat Interface Placeholder */}
      <View style={styles.chatContainer}>
        <View style={styles.chatBubbleAI}>
          <Text style={styles.chatText}>How can I help today?</Text>
          <Text style={styles.chatTextNative}>मैं आज कैसे मदद कर सकता हूं?</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputPlaceholder}>Type or say anything... 🎤</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <Text style={styles.sectionTitle}>Quick Actions:</Text>
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionEmoji}>⏰</Text>
          <Text style={styles.actionText}>Alarm</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionEmoji}>📞</Text>
          <Text style={styles.actionText}>Call</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionEmoji}>📸</Text>
          <Text style={styles.actionText}>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionButton, styles.helpButton]}>
          <Text style={styles.actionEmoji}>🆘</Text>
          <Text style={styles.actionText}>Help</Text>
        </TouchableOpacity>
      </View>

      {/* Active Alarms */}
      <Text style={styles.sectionTitle}>Active Alarms: 0</Text>
      <View style={styles.alarmsContainer}>
        <Text style={styles.noAlarmsText}>No alarms set</Text>
      </View>

      {/* Always Listening */}
      <View style={styles.listeningBadge}>
        <Text style={styles.listeningText}>🎤 ALWAYS LISTENING</Text>
        <Text style={styles.listeningSubtext}>(Say anything, I'll respond)</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: SIZES.spacingLarge,
    backgroundColor: COLORS.primaryLight,
  },
  greeting: {
    fontSize: SIZES.fontLarge,
    fontWeight: 'bold',
    color: COLORS.text,
  },
  greetingNative: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  logoutText: {
    fontSize: 24,
  },
  chatContainer: {
    padding: SIZES.spacingLarge,
    minHeight: 200,
  },
  chatBubbleAI: {
    backgroundColor: COLORS.aiBubble,
    padding: SIZES.spacingMedium,
    borderRadius: SIZES.radiusLarge,
    alignSelf: 'flex-start',
    maxWidth: '80%',
  },
  chatText: {
    fontSize: SIZES.fontMedium,
    color: COLORS.text,
  },
  chatTextNative: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
  inputContainer: {
    marginTop: SIZES.spacingLarge,
    padding: SIZES.spacingMedium,
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radiusMedium,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  inputPlaceholder: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textLight,
  },
  sectionTitle: {
    fontSize: SIZES.fontLarge,
    fontWeight: 'bold',
    color: COLORS.text,
    paddingHorizontal: SIZES.spacingLarge,
    marginTop: SIZES.spacingMedium,
    marginBottom: SIZES.spacingSmall,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: SIZES.spacingLarge,
    marginBottom: SIZES.spacingLarge,
  },
  actionButton: {
    alignItems: 'center',
    padding: SIZES.spacingMedium,
    backgroundColor: COLORS.primaryLight,
    borderRadius: SIZES.radiusMedium,
    minWidth: 70,
  },
  helpButton: {
    backgroundColor: '#FFCDD2',
  },
  actionEmoji: {
    fontSize: 32,
    marginBottom: SIZES.spacingSmall,
  },
  actionText: {
    fontSize: SIZES.fontSmall,
    color: COLORS.text,
  },
  alarmsContainer: {
    marginHorizontal: SIZES.spacingLarge,
    padding: SIZES.spacingLarge,
    backgroundColor: COLORS.backgroundDark,
    borderRadius: SIZES.radiusMedium,
    marginBottom: SIZES.spacingLarge,
  },
  noAlarmsText: {
    fontSize: SIZES.fontMedium,
    color: COLORS.textSecondary,
    textAlign: 'center',
  },
  listeningBadge: {
    margin: SIZES.spacingLarge,
    padding: SIZES.spacingLarge,
    backgroundColor: COLORS.primaryLight,
    borderRadius: SIZES.radiusLarge,
    alignItems: 'center',
  },
  listeningText: {
    fontSize: SIZES.fontMedium,
    fontWeight: 'bold',
    color: COLORS.primary,
  },
  listeningSubtext: {
    fontSize: SIZES.fontSmall,
    color: COLORS.textSecondary,
    marginTop: 4,
  },
});

export default UserHomeScreen;

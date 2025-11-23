// Admin role stack navigator

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AdminStackParamList} from '@/types/navigation.types';
import {View, Text, StyleSheet} from 'react-native';

// Placeholder admin dashboard
const AdminDashboardScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Admin Dashboard</Text>
    <Text style={styles.subtext}>Coming Soon</Text>
  </View>
);

const Stack = createStackNavigator<AdminStackParamList>();

const AdminStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="AdminDashboard"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Stack.Screen name="AdminDashboard" component={AdminDashboardScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212121',
  },
  subtext: {
    fontSize: 16,
    color: '#757575',
    marginTop: 8,
  },
});

export default AdminStack;

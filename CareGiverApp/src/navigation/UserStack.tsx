// User role stack navigator

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserStackParamList} from '@/types/navigation.types';

// Import screens (placeholders - will be created)
import UserHomeScreen from '@/screens/user/UserHomeScreen';

const Stack = createStackNavigator<UserStackParamList>();

const UserStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="UserHome"
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#FFFFFF'},
      }}>
      <Stack.Screen name="UserHome" component={UserHomeScreen} />
      {/* Add more user screens here */}
    </Stack.Navigator>
  );
};

export default UserStack;

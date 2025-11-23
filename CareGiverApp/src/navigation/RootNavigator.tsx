// Root navigation structure

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/store';

// Import stack navigators
import AuthStack from './AuthStack';
import UserStack from './UserStack';
import AdminStack from './AdminStack';

const Stack = createStackNavigator();

const RootNavigator = () => {
  const {isAuthenticated, role} = useSelector((state: RootState) => state.auth);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {!isAuthenticated ? (
        <Stack.Screen name="Auth" component={AuthStack} />
      ) : role === 'USER' ? (
        <Stack.Screen name="UserStack" component={UserStack} />
      ) : (
        <Stack.Screen name="AdminStack" component={AdminStack} />
      )}
    </Stack.Navigator>
  );
};

export default RootNavigator;

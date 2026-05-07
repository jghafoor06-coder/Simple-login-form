import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeStack from './homestack/HomeStack';
import AuthStack from './authstack/AuthStack';

const Stack = createNativeStackNavigator();

const Root = () => {
  const userData = useSelector(state => state.auth.userData);
  const initialRoute = userData ? 'homestack' : 'authstack';

  return (
    <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
      {userData ? (
        <Stack.Screen name="homestack" component={HomeStack} />
      ) : (
        <Stack.Screen name="authstack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
};

export default Root;
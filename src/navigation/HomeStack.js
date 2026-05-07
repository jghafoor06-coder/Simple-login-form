import React from 'react';
import { useSelector } from 'react-redux';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import LoginScreen from '../screens/LoginScreen';
import SigninScreen from '../screens/SigninScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const userData = useSelector(state => state.auth.userData);
  const initialRoute = userData ? 'home' : 'login';

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="signin"
        component={SigninScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
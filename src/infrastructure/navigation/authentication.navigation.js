import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { AccountScreen } from "../../features/authentication/screens/account.screen";
import { LoginScreen } from "../../features/authentication/screens/login.screen";
import { RegisterScreen } from "../../features/authentication/screens/register.screen";

const AuthenticationStack = createStackNavigator();

export const AuthenticationNavigation = () => {
  return (
    <AuthenticationStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <AuthenticationStack.Screen name='Account' component={AccountScreen} />
      <AuthenticationStack.Screen name='LogIn' component={LoginScreen} />
      <AuthenticationStack.Screen name='Register' component={RegisterScreen} />
    </AuthenticationStack.Navigator>
  );
};

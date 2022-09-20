import React from "react";
import {
  createStackNavigator,
  CardStyleInterpolators
} from "@react-navigation/stack";

import { CameraScreen } from "../../features/settings/screens/camera.screen";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        headerShown: "screen",
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
      }}>
      <SettingsStack.Screen
        options={{
          header: () => null
        }}
        name='Settings'
        component={SettingsScreen}
      />
      <SettingsStack.Screen name='Favourites' component={FavouritesScreen} />
      <SettingsStack.Screen name='Camera' component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};

import React from "react";
import {
  createStackNavigator,
  TransitionPresets
} from "@react-navigation/stack";

import { RestaurantScreen } from "../../features/restaurant/screens/restaurant.screen";
import { RestaurantDetailsScreen } from "../../features/restaurant/screens/restaurant-details.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS
      }}>
      <RestaurantStack.Screen name='Restaurant' component={RestaurantScreen} />
      <RestaurantStack.Screen
        name='RestaurantDetails'
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};

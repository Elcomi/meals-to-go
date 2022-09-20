import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { FavouritesContextProvider } from "../../services/favourites/favourites.context";
import { RestaurantsContextProvider } from "../../services/restaurant/restaurant.context";
import { LocationContextProvider } from "../../services/location/location.context";

import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { AppNavigation } from "./app.navigation";
import { AuthenticationNavigation } from "./authentication.navigation";

export const Navigation = () => {
  const { isAuth } = useContext(AuthenticationContext);
  console.log("Navigation -> isAuth", isAuth);

  return (
    <NavigationContainer>
      {isAuth ? (
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantsContextProvider>
              <AppNavigation />
            </RestaurantsContextProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      ) : (
        <AuthenticationNavigation />
      )}
    </NavigationContainer>
  );
};

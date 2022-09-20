import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AuthenticationContext } from "../authentication/authentication.context";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [Favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);
  const saveFavourites = async (value, user) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@favourites-${user.uid}`, jsonValue);
    } catch (e) {
      console.log("error storing", e);
    }
  };

  const loadFavourites = async () => {
    try {
      const value = await AsyncStorage.getItem(`@favourites-${user.uid}`);
      if (value !== null) {
        setFavourites(JSON.parse(value));
      }
    } catch (e) {
      console.log("error loading", e);
    }
  };
  useEffect(() => {
    loadFavourites(user);
  }, []);

  useEffect(() => {
    saveFavourites(Favourites, user);
  }, [Favourites, user]);

  const addToFavourites = restaurant => {
    setFavourites([...Favourites, restaurant]);
  };

  const removeFromFavourites = restaurant => {
    setFavourites(Favourites.filter(fav => fav.placeId !== restaurant.placeId));
  };

  return (
    <FavouritesContext.Provider
      value={{
        Favourites,
        addToFavourites,
        removeFromFavourites
      }}>
      {children}
    </FavouritesContext.Provider>
  );
};

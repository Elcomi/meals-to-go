import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styled from "styled-components/native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const OriginalFavIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 25px;
  right: 25px;
  z-index: 9;
`;
const CompatFavIcon = styled(TouchableOpacity)`
  position: absolute;
  top: 20px;
  right: 15px;
  z-index: 9;
`;

export const Favourite = ({ isCompat, restaurant }) => {
  const { Favourites, addToFavourites, removeFromFavourites } = useContext(
    FavouritesContext
  );

  const FavIcon = isCompat ? CompatFavIcon : OriginalFavIcon;

  const isFavourite = Favourites.find(
    Fav => Fav.placeId === restaurant.placeId
  );
  return (
    <FavIcon
      onPress={() => {
        isFavourite
          ? removeFromFavourites(restaurant)
          : addToFavourites(restaurant);
      }}>
      <Ionicons
        name={isFavourite ? "ios-heart-sharp" : "ios-heart-outline"}
        size={isCompat ? 30 : 35}
        color={isFavourite ? "red" : "white"}
      />
    </FavIcon>
  );
};

import { ScrollView, TouchableOpacity, useContext } from "react-native";
import styled from "styled-components/native";

import { Text } from "../typography/text";
import { CompatRestaurantInfoCard } from "../../components/restaurant/compat-restaurant-info-card";
// import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouriteBar = ({ Favourites, onNavigate }) => {
  //   const { Favourites } = useContext(FavouritesContext);

  if (!Favourites.length) return null;
  return (
    <FavouritesWrapper>
      <Text variant='title' style={{ padding: 7 }}>
        Favourites :
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Favourites.map(restaurant => (
          <TouchableOpacity
            onPress={() => {
              onNavigate("RestaurantDetails", { restaurant });
            }}>
            <CompatRestaurantInfoCard restaurant={restaurant} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </FavouritesWrapper>
  );
};

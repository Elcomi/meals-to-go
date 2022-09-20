import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import Lottie from "lottie-react-native";
import styled from "styled-components/native";

import { Text } from "../../../components/typography/text";
import { SafeArea } from "../../../utils/safeArea";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 70%;
  position: absolute;
  top: 30px;
`;

import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { RestaurantInfoCard } from "../../restaurant/components/restaurant-info-card.component";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: `    
    margin-bottom: ${props => props.theme.space[3]};
    `
})``;

export const FavouritesScreen = () => {
  const { Favourites } = useContext(FavouritesContext);
  return Favourites.length ? (
    <RestaurantList
      data={Favourites}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("RestaurantDetails", { restaurant: item })
          }>
          <RestaurantInfoCard Restaurant={item} />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.name}
    />
  ) : (
    <NoFavouritesArea>
      <AnimationWrapper>
        <Lottie
          source={require("../../../utils/animation/heart.json")}
          autoPlay
          resizeMode='cover'
          loop
        />
      </AnimationWrapper>
      <Text variant='title'> No favourites yet ! </Text>
    </NoFavouritesArea>
  );
};

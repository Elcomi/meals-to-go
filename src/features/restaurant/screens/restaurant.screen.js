import React, { useContext, useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { SafeArea } from "../../../utils/safeArea";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";
import Search from "../components/search.restaurant";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { FavouriteBar } from "../../../components/favourite/favourite-bar";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FadeInView } from "../../../utils/animation/Fading-in";

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: `    
  margin-bottom: ${props => props.theme.space[3]};
  `
})``;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;
const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;

export const RestaurantScreen = ({ navigation }) => {
  const { Favourites } = useContext(FavouritesContext);
  const { isLoading, restaurants } = useContext(RestaurantContext);
  const [isTriggered, setIsTriggered] = useState(false);
  return (
    <SafeArea>
      {isLoading && (
        <LoadingContainer>
          <Loading size={50} animating={true} color={Colors.blue300} />
        </LoadingContainer>
      )}
      <Search
        isFavouriteTriggered={isTriggered}
        onFavouriteTriggered={() => setIsTriggered(!isTriggered)}
      />
      {isTriggered && (
        <FavouriteBar
          Favourites={Favourites}
          onNavigate={navigation.navigate}
        />
      )}

      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetails", { restaurant: item })
            }>
            <FadeInView>
              <RestaurantInfoCard Restaurant={item} />
            </FadeInView>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.name}
      />
    </SafeArea>
  );
};

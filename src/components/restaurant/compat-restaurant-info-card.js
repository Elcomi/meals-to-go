import React from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";

import { Favourite } from "../favourite/favourite";
import { Text } from "../typography/text";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 100px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompatRestaurantInfoCard = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? CompactWebview : CompactImage;

  return (
    <Item>
      <Favourite isCompat restaurant={restaurant} />
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text variant='caption'>{restaurant.name}</Text>
    </Item>
  );
};

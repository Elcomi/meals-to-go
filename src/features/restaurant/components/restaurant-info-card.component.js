import React from "react";
import { SvgXml } from "react-native-svg";

import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Spacer } from "../../../components/spacer/spacer";
import { Text } from "../../../components/typography/text";
import { Favourite } from "../../../components/favourite/favourite";

import {
  RestaurantCard,
  Photo,
  Info,
  Rating,
  Section,
  Open,
  Icon
} from "./restaurant-info-card.styles";

export const RestaurantInfoCard = ({ Restaurant = {} }) => {
  const {
    name = "Koshary_El_Tahrer",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",

    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
    ],
    rating = 5,
    address = "El_Mansoura",
    isOpeningNow = true,
    isClosedTemporary = true,
    place_id
  } = Restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard>
      <Favourite restaurant={Restaurant} />
      <Photo source={{ uri: photos[0] }} />
      <Info>
        <Text variant='body'>{name}</Text>
        <Section>
          <Rating>
            {ratingArray &&
              ratingArray.map((_, i) => (
                <SvgXml
                  key={`${place_id},${i}`}
                  width='20'
                  height='20'
                  xml={star}
                />
              ))}
          </Rating>
          {isClosedTemporary && <Text variant='error'> Closed Temporary </Text>}
          <Open>
            {isOpeningNow && <SvgXml width='20' height='20' xml={open} />}
          </Open>
          <Icon source={{ uri: icon }} />
        </Section>
        <Text variant='body'> {address} </Text>
      </Info>
    </RestaurantCard>
  );
};

import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { Search } from "../components/search.map";
import { CompatRestaurantInfoCard } from "../../../components/restaurant/compat-restaurant-info-card";
import { locationContext } from "../../../services/location/location.context";
import { RestaurantContext } from "../../../services/restaurant/restaurant.context";

const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapScreen = ({ navigation }) => {
  const { location } = useContext(locationContext);
  const { restaurants } = useContext(RestaurantContext);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02
        }}>
        {restaurants.map(restaurant => (
          <MapView.Marker
            key={restaurant.name}
            title={restaurant.name}
            coordinate={{
              latitude: restaurant.geometry.location.lat,
              longitude: restaurant.geometry.location.lng
            }}>
            <MapView.Callout
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant
                })
              }>
              <CompatRestaurantInfoCard isMap restaurant={restaurant} />
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </Map>
    </>
  );
};

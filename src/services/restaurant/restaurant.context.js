import { createContext, useEffect, useState, useContext } from "react";

import {
  restaurantsRequest,
  restaurantsTransform
} from "./restaurant.services";
import { locationContext } from "../location/location.context";

export const RestaurantContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const { location } = useContext(locationContext);
  const retrieveLocation = loc => {
    setIsLoading(true);

    // for remove all retaaurants and displaying loading untill search data come
    // if remove this code line => he new data search replaced with the old data without displaying any loading
    setRestaurants([]);

    setTimeout(() => {
      restaurantsRequest(loc)
        .then(result => restaurantsTransform(result))
        .then(results => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err);
        });
    }, 10);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;

      retrieveLocation(locationString);
    }
  }, [location]);

  return (
    <RestaurantContext.Provider
      value={{
        restaurants: restaurants,
        isLoading,
        error
      }}>
      {children}
    </RestaurantContext.Provider>
  );
};

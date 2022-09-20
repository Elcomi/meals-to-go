import { createContext, useState, useEffect } from "react";

import { locationRequest, locationTransform } from "./location.services";

export const locationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [location, setLocation] = useState([]);
  const [keyword, setKeyword] = useState("San Francisco");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = searchKeyword => {
    setIsLoading(true);
    setKeyword(searchKeyword);
  };

  // add useEffect here better add it in search component
  //because it search component make many renders => lesson (20) in folder (8)

  useEffect(() => {
    if (!keyword.length) {
      // don't do anything
      return;
    }
    locationRequest(keyword.toLowerCase())
      .then(locationTransform)
      .then(result => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch(err => {
        setIsLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <locationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword
      }}>
      {children}
    </locationContext.Provider>
  );
};

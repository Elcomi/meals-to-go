import camelize from "camelize";

import { locations } from "./loaction.mock";

export const locationRequest = searchTerm => {
  return new Promise((resolve, reject) => {
    const locationMocks = locations[searchTerm];
    if (!locationMocks) {
      return reject("not found");
    }
    resolve(locationMocks);
  });
};

export const locationTransform = result => {
  const camalizeData = camelize(result);
  const { geometry = {} } = camalizeData.results[0];
  const { lng, lat } = geometry.location;
  return { lng, lat, viewport: geometry.viewport };
};

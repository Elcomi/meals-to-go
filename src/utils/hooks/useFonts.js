import {
  useFonts as useOswald,
  Oswald_400Regular
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export const useFonts = () => {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular
  });

  const [latoLoaded] = useLato({
    Lato_400Regular
  });
  return { latoLoaded, oswaldLoaded };
  // if (!oswaldLoaded || !latoLoaded) return null;
};

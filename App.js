import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

import { useFonts } from "./src/utils/hooks/useFonts";
import { theme } from "./src/infrastructure/theme";
import { Navigation } from "./src/infrastructure/navigation/index";

export default function App() {
  const { oswaldLoaded, latoLoaded } = useFonts();
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  } else
    return (
      <>
        <ThemeProvider theme={theme}>
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
        </ThemeProvider>
        <ExpoStatusBar style='auto' />
      </>
    );
}

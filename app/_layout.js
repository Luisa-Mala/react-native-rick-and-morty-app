import { Stack } from "expo-router";
import { ColorSchemeProvider } from "../lib/ColorSchemeContext";

import { View } from "react-native";
import { MenuIcon, Logo } from "@/components/elements/Icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { DMSans_400Regular, DMSans_700Bold } from "@expo-google-fonts/dm-sans";
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "DM-Sans-Regular": DMSans_400Regular,
    "DM-Sans-Bold": DMSans_700Bold,
    "BBH-Sans-Hegarty": require("../assets/fonts/BBHSansHegarty-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <View style={{ flex: 1 }}>
      <ColorSchemeProvider>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: "#fff" },
            headerTitle: "",
            headerLeft: () => <Logo />,
            headerRight: () => <MenuIcon />,
          }}
        />
      </ColorSchemeProvider>
    </View>
  );
}

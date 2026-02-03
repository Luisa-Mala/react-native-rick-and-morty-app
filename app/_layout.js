import { Stack } from "expo-router";
import { ColorSchemeProvider } from "../lib/ColorSchemeContext";
import Toast, { BaseToast } from "react-native-toast-message";

import { View } from "react-native";
import { MenuIcon, Logo } from "@/components/elements/Icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { DMSans_400Regular, DMSans_700Bold } from "@expo-google-fonts/dm-sans";
import { IonIcons } from "@/components/elements";
import { Text } from "react-native";
SplashScreen.preventAutoHideAsync();

const toastConfig = {
  custom_toast: ({ text1 }) => (
    <View
      style={{
        height: 50,
        width: "80%",
        backgroundColor: "white",
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        // Sombra
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      }}
    >
      <IonIcons name="checkmark-circle-outline" size={24} color="#13ec5b" />
      <Text
        style={{
          marginLeft: 10,
          fontSize: 14,
          color: "#334155",
          fontWeight: "500",
        }}
      >
        {text1}
      </Text>
    </View>
  ),
};

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
            headerStyle: { backgroudCnolor: "#fff" },
            headerTitle: "",
            headerLeft: () => <Logo />,
            headerRight: () => <MenuIcon />,
          }}
        />
        <Toast config={toastConfig} />
      </ColorSchemeProvider>
    </View>
  );
}

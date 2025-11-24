import { Image, TouchableHighlight, View, useColorScheme } from "react-native";
import { GlobalText as Text } from "@/components/elements";
import { Stack } from "expo-router";
import { useRouter } from "expo-router";
import { lightTheme, darkTheme } from "../themes";

const hero = require("@/assets/hero.png");

export default function Index() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;

  const goToHome = () => {
    // Navega directamente a la pantalla home dentro de las tabs
    router.push("/(tabs)/home");
  };
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          flex: 1,
          justifyContent: "start",
          alignItems: "center",
          backgroundColor: theme.colors.background,
        }}
      >
        <Image style={{ width: "100%" }} source={hero} />
        <Text
          className="px-4 py-6 text-center"
          style={{
            fontSize: 32,
            fontFamily: "BBH-Sans-Hegarty",
            color: theme.colors.text,
            lineHeight: 33,
          }}
        >
          Bienvenido a este universo
        </Text>
        <Text className="text-center pb-8" style={{ color: theme.colors.text }}>
          Tu portal a todos los personajes, lugares y episodios del multiverso
          de Rick y Morty.
        </Text>
        <TouchableHighlight
          underlayColor={"#13ec5b"}
          onPress={goToHome}
          style={{
            maxWidth: 480,
            minWidth: 84,
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            backgroundColor: "#13ec5b",
            borderRadius: 8,
          }}
        >
          <Text className="bold" style={{ fontWeith: 700 }}>
            ¡Wubba Lubba Dub Dub!
          </Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

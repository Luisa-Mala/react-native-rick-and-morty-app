import { Image, TouchableHighlight, View } from "react-native";
import { GlobalText as Text } from "@/components/elements";
import { Stack, useRouter } from "expo-router";
import { useColorScheme } from "@/lib/ColorSchemeContext";
import { lightTheme, darkTheme } from "../themes";

const hero = require("@/assets/hero.png");

export default function Index() {
  const router = useRouter();

  // Use this hook to get isDarkMode (react to toggle sistem)
  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const goToHome = () => {
    router.push("/(tabs)/home");
  };

  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        style={{
          flex: 1,
          justifyContent: "between",
          alignItems: "center",
          height: "100vh",
          backgroundColor: theme.background,
        }}
      >
        <Image style={{ width: "100%" }} source={hero} />
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Text
            className="px-4 pb-6 text-center"
            style={{
              fontSize: 32,
              fontFamily: "BBH-Sans-Hegarty",
              color: theme.text,
              lineHeight: 33,
            }}
          >
            Bienvenido a este universo
          </Text>

          <Text className="text-center pb-8 px-8" style={{ color: theme.text }}>
            Tu portal a todos los personajes, lugares y episodios del multiverso
            de Rick y Morty.
          </Text>

          <TouchableHighlight
            underlayColor={"#13ec5b"}
            onPress={goToHome}
            style={{
              width: "90%",
              // minWidth: 84,
              padding: 10,
              paddingHorizontal: 20,
              backgroundColor: "#13ec5b",
              borderRadius: 8,
            }}
          >
            <Text
              style={{ fontWeight: "700", color: "#000", textAlign: "center" }}
            >
              ¡Wubba Lubba Dub Dub!
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
}

import { Image, TouchableHighlight, View } from "react-native"; // Eliminamos useColorScheme de aquí
import { GlobalText as Text } from "@/components/elements";
import { Stack, useRouter } from "expo-router";
import { useColorScheme } from "@/lib/ColorSchemeContext"; // 🎯 Importamos tu contexto personalizado
import { lightTheme, darkTheme } from "../themes";

const hero = require("@/assets/hero.png");

export default function Index() {
  const router = useRouter();

  // 🎯 Usamos tu hook para obtener isDarkMode (que reacciona al toggle y al sistema)
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
          justifyContent: "start",
          alignItems: "center",
          // 🎯 Ahora backgroundColor cambiará dinámicamente
          backgroundColor: theme.background,
        }}
      >
        <Image style={{ width: "100%" }} source={hero} />

        <Text
          className="px-4 py-6 text-center"
          style={{
            fontSize: 32,
            fontFamily: "BBH-Sans-Hegarty",
            color: theme.text, // 🎯 Texto dinámico
            lineHeight: 33,
          }}
        >
          Bienvenido a este universo
        </Text>

        <Text className="text-center pb-8" style={{ color: theme.text }}>
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
            paddingHorizontal: 20,
            backgroundColor: "#13ec5b",
            borderRadius: 8,
          }}
        >
          <Text style={{ fontWeight: "700", color: "#000" }}>
            ¡Wubba Lubba Dub Dub!
          </Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

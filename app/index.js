import { Image, TouchableHighlight, View } from "react-native";
import { GlobalText as Text } from "../components/GlobalText";
import { Stack } from "expo-router";

const hero = require("../assets/hero.png");
export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={hero} />
        <Text
          className="px-4 pb-8 pt-4  text-center"
          style={{ fontSize: 32, fontFamily: "BBH-Sans-Hegarty" }}
        >
          Prepárate para la aventura
        </Text>
        <Text className="text-center pb-2">
          Tu portal a todos los personajes, lugares y episodios del multiverso
          de Rick y Morty.
        </Text>
        <TouchableHighlight
          underlayColor={"#13ec5b"}
          style={{
            maxWidth: 480,
            minWidth: 84,
            padding: 10,
            backgroundColor: "#13ec5b",
            borderRadius: 8,
          }}
        >
          <Text className="bold">¡Wubba Lubba Dub Dub!</Text>
        </TouchableHighlight>
      </View>
    </>
  );
}

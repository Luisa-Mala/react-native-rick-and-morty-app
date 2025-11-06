import { Image, View } from "react-native";
import { GlobalText as Text } from "../components/GlobalText";
import { Stack } from "expo-router";

export default function Index() {
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image></Image>
        <Text>Prepárate para la eventualidad</Text>
      </View>
    </>
  );
}

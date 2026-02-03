import { GlobalText as Text } from "@/components/elements";
import { useLocalSearchParams } from "expo-router";
import { View } from "react-native";

export default function EpisodeDetail() {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Episode Detail - ID: {id}</Text>
    </View>
  );
}

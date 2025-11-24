import { View, Text } from "react-native";

export default function Status({ state, species, props }) {
  const getColor = () => {
    switch (state) {
      case "Alive":
        return "bg-green-500";
      case "Dead":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };
  const className = getColor();
  return (
    <View className="flex-row gap-2 items-center" {...props}>
      <View className={`${className} w-2 h-2 rounded-full`}></View>
      <Text className="text-white" style={{ fontFamily: "DM-Sans-Regular" }}>
        {state} {species && `- ` + species}
      </Text>
    </View>
  );
}

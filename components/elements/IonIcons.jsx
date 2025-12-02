import Ionicons from "@expo/vector-icons/Ionicons";

export default function IonIcons({ name, ...props }) {
  return <Ionicons name={name} size={24} color="black" {...props} />;
}

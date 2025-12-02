import { Tabs } from "expo-router";
import {
  CharacterIcon,
  EpisodeIcon,
  HomeIcon,
  LocationIcon,
} from "@/components/elements/Icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#13ec5b",
        tabBarStyle: { backgroundColor: "#16191a" },
        tabBarLabelPosition: "below-icon",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="characters"
        options={{
          title: "Personajes",
          tabBarIcon: ({ color }) => <CharacterIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="episodes"
        options={{
          title: "Episodios",
          tabBarIcon: ({ color }) => <EpisodeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="locations"
        options={{
          title: "Ubicaciones",
          tabBarIcon: ({ color }) => <LocationIcon color={color} />,
        }}
      />
    </Tabs>
  );
}

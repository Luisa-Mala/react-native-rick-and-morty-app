import { Tabs } from "expo-router";
import { EpisodeIcon } from "@/components/elements/Icons";
import { IonIcons } from "@/components/elements";

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
          tabBarIcon: ({ color }) => (
            <IonIcons name="home-outline" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="characters"
        options={{
          title: "Personajes",
          tabBarIcon: ({ color }) => (
            <IonIcons name="people-outline" color={color} />
          ),
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
          tabBarIcon: ({ color }) => (
            <IonIcons name="planet-outline" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

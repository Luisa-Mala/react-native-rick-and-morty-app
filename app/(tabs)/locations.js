import { ActivityIndicator, FlatList, View } from "react-native";
import { useColorScheme } from "@/lib/ColorSchemeContext";
import { lightTheme, darkTheme } from "../../themes";
import { useEffect, useState } from "react";
import { getLatestLocations } from "@/lib/location";
import { Card, SearchBar, GlobalText as Text } from "@/components/elements";
import { useSearch } from "@/lib/hooks/useSearch";

export default function Locations() {
  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [locations, setLocations] = useState([]);
  const { query, setQuery, filteredData } = useSearch(locations, "name");

  useEffect(() => {
    getLatestLocations().then(setLocations);
  });

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Text isTitle style={{ color: theme.text, paddingHorizontal: 15 }}>
        Locations
      </Text>
      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Find a location..."
      />

      {locations.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={"#00ff2aff"} size={"large"} />
        </View>
      ) : (
        <FlatList
          style={{ marginTop: 20 }}
          data={filteredData} // Usamos la data que nos da el hook
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              titleCard={item.name}
              code={item.type}
              description={item.dimension}
              // url={`/episode/${item.id}`}
              icon={item.icon}
            />
          )}
          contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 20 }}
          ListEmptyComponent={() => (
            <Text
              style={{ color: theme.text, textAlign: "center", marginTop: 20 }}
            >
              There are no results for "{query}"
            </Text>
          )}
        />
      )}
    </View>
  );
}

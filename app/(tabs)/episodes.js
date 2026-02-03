import { View, FlatList, ActivityIndicator } from "react-native";
import { useColorScheme } from "@/lib/ColorSchemeContext";
import { lightTheme, darkTheme } from "../../themes";
import { useEffect, useState } from "react";
import { getLatestEpisodes } from "@/lib/episode";
import { useSearch } from "@/lib/hooks/useSearch";
import { Card, SearchBar, GlobalText as Text } from "@/components/elements";

export default function EpisodesScreen() {
  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [episodes, setEpisodes] = useState([]);
  const { query, setQuery, filteredData } = useSearch(episodes, "name");

  useEffect(() => {
    getLatestEpisodes().then(setEpisodes);
  });

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Text isTitle style={{ color: theme.text, paddingHorizontal: 15 }}>
        Episodes
      </Text>

      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Find a episode..."
      />

      {episodes.length === 0 ? (
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
              code={item.code}
              description={item.air_date}
              url={`/episode/${item.id}`}
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

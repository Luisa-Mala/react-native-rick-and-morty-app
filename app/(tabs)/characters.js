import { ActivityIndicator, FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import { GlobalText as Text, SearchBar } from "@/components/elements";
import { useColorScheme } from "@/lib/ColorSchemeContext";
import { lightTheme, darkTheme } from "@/themes";
import { getLatestCharacter } from "@/lib/character";
import { AnimatedCharacterCard } from "@/components/sections";
import { useSearch } from "@/lib/hooks/useSearch";

export default function Characters() {
  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [characters, setCharacters] = useState([]);

  // Usamos el hook pasando la data original
  const { query, setQuery, filteredData } = useSearch(characters, "name");

  useEffect(() => {
    getLatestCharacter().then(setCharacters);
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: theme.background }}>
      <Text isTitle style={{ color: theme.text, paddingHorizontal: 15 }}>
        Characters
      </Text>

      <SearchBar
        value={query}
        onChangeText={setQuery}
        placeholder="Find a character..."
      />

      {characters.length === 0 ? (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <ActivityIndicator color={"#00ff2aff"} size={"large"} />
        </View>
      ) : (
        <FlatList
          data={filteredData} // Usamos la data que nos da el hook
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <AnimatedCharacterCard character={item} index={index} />
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

import { View, Image, StyleSheet, FlatList, Pressable } from "react-native";
import { lightTheme, darkTheme } from "../../themes";
import { useColorScheme } from "@/lib/ColorSchemeContext";

import { GlobalText as Text } from "@/components/elements";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function Slider({
  characters = [],
  title,
  widthCard,
  heightCard,
}) {
  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const defaultCharacters = [
    {
      id: 1,
      name: "Fear No Mort",
      image: require("@/assets/episodes/episode-1.png"),
      species: "S07E09",
    },
    {
      id: 2,
      name: "Mort: Ragnarick",
      image: require("@/assets/episodes/episode-2.png"),
      species: "S07E10",
    },
    {
      id: 3,
      name: "Rise of the Numbericons",
      image: require("@/assets/episodes/episode-1.png"),
      species: "S07E08",
    },
  ];

  const data = characters.length > 0 ? characters : defaultCharacters;

  const renderCharacter = ({ item }) => (
    <Link href={`/${item.id}`} asChild>
      <StyledPressable className="active:opacity-70">
        <View style={[styles.characterCard, { width: widthCard || 160 }]}>
          <Image
            source={
              typeof item.image === "number"
                ? item.image // Local
                : { uri: item.image } // Externa
            }
            style={[styles.characterImage, { height: heightCard || 200 }]}
            resizeMode="cover"
          />
          <View style={styles.characterInfo}>
            <Text style={[styles.characterName, { color: theme.text }]}>
              {item.name}
            </Text>
            <Text style={[styles.characterDetails, { color: theme.text }]}>
              {item.species} {item.status ? `• ${item.status}` : ""}
            </Text>
          </View>
        </View>
      </StyledPressable>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Text style={[styles.sectionTitle, { color: theme.text }]}>{title}</Text>
      <FlatList
        data={data}
        renderItem={renderCharacter}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={160} // Ancho de tarjeta + margen
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 16,
    marginLeft: 16,
    fontFamily: "BBH-Sans-Hegarty",
  },
  listContent: {
    paddingHorizontal: 12,
  },
  characterCard: {
    marginHorizontal: 8,
  },
  characterImage: {
    width: "100%",
    borderRadius: 12,
  },
  characterInfo: {
    paddingTop: 12,
  },
  characterName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  characterDetails: {
    fontSize: 12,
  },
});

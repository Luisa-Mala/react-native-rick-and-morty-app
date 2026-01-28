import { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Status } from "@/components/elements";
import { useColorScheme } from "@/lib/ColorSchemeContext";
import { darkTheme, lightTheme } from "@/themes";

const StyledPressable = styled(Pressable);

export function CharacterCard({ character }) {
  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const styles = styling(theme);

  return (
    <Link href={`/${character.id}`} asChild>
      <StyledPressable className="active:opacity-70">
        <View key={character.id} style={styles.card}>
          <Image source={{ uri: character.image }} style={styles.image} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{character.name}</Text>
            <Text style={styles.text}>{character.species}</Text>
          </View>
          <Status state={character.status} theme={theme} />
        </View>
      </StyledPressable>
    </Link>
  );
}

export default function AnimatedCharacterCard({ character, index }) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      delay: index * 250,
      useNativeDriver: true,
    }).start();
  }, [opacity, index]);

  return (
    <Animated.View style={{ opacity }}>
      <CharacterCard character={character} />
    </Animated.View>
  );
}
const styling = (theme) =>
  StyleSheet.create({
    card: {
      marginVertical: 10,
      // marginHorizontal: 10,
      width: "100%",
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    image: {
      width: 65,
      height: 65,
      aspectRatio: 1, // Esto hará que la altura se ajuste automáticamente
      resizeMode: "cover",
      borderRadius: 50,
      marginRight: 15,
    },
    title: {
      fontSize: 16,
      color: theme?.text,
      marginBottom: 3,

      fontWeight: "600",
    },
    text: {
      color: theme?.cardText,
      fontSize: 14,
    },
  });

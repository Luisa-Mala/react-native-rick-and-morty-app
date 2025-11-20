import { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { Status } from "../elements/Status";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export function CharacterCard({ character }) {
  return (
    <Link href={`/${character.id}`} asChild>
      <StyledPressable className="active:opacity-70">
        <View key={character.id} style={styles.card}>
          <Image source={{ uri: character.image }} style={styles.image} />
          <View style={{ flexGrow: 1, flexDirection: "row" }}>
            <Text style={styles.title}>{character.name}</Text>
          </View>
          <Status state={character.status} />
        </View>
      </StyledPressable>
    </Link>
  );
}

export function AnimatedCharacterCard({ character, index }) {
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

const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    marginHorizontal: 10,
    // width: "100%",
    // flex: 1, // Asegura que la tarjeta use el espacio asignado por FlatList
  },
  image: {
    // 1. Establece el ancho al 100% del contenedor padre
    width: "100%",
    // 2. Define una altura fija o usa una proporción (aspectRatio)
    height: 160, // Manteniendo tu altura original, pero ahora el ancho es flexible
    // Opcional: Usar aspectRatio si quieres que la imagen mantenga su proporción (ej: 1/1)
    aspectRatio: 1, // Esto hará que la altura se ajuste automáticamente
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    fontSize: 15,
    color: "#fff",
    marginTop: 10,
    flex: 1,
    width: 1,
    fontFamily: "BBH-Sans-Hegarty",
    fontWeight: "400",
  },
});

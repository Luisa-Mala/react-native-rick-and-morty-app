import { useEffect, useState } from "react";

import { FlatList, View, ActivityIndicator, Text } from "react-native";
import { getLatestCharacter } from "../lib/character";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AnimatedCharacterCard } from "./CharacterCard";

export function Main() {
  const [characters, setCharacters] = useState([]);
  const insets = useSafeAreaInsets();

  useEffect(() => {
    getLatestCharacter().then((games) => {
      setCharacters(games);
    });
  }, []);

  return (
    // Contenedor principal: ocupa todo el espacio y centra horizontalmente
    <View
      style={{
        flex: 1, // <--- Hace que el View ocupe toda la pantalla
        // marginTop: insets.top,
        paddingBottom: insets.bottom,
        alignItems: "center", // <--- CENTRA horizontalmente el contenido hijo
        width: "100%",
        backgroundColor: "#272b33",
      }}
    >
      {characters.length === 0 ? (
        /** LOADING */
        <ActivityIndicator color={"#00ff2aff"} size={"large"} />
      ) : (
        /** FlatList para listas largas */
        <FlatList
          numColumns={2}
          data={characters}
          keyExtractor={(character) => character.id.toString()} // Asegúrate que sea string
          renderItem={({ item, index }) => (
            <AnimatedCharacterCard character={item} index={index} />
          )}
          // 1. Esto le dice al FlatList que ocupe todo el ancho de la pantalla
          // style={{ width: "100%" }}
          // 2. Esto centra los ítems dentro del FlatList
          contentContainerStyle={{
            alignItems: "center",
            // backgroundColor: "#ec0c0cff",
            width: "100%", // (Opcional, a veces necesario para asegurar el centrado en FlatList)
          }}
        />
      )}
    </View>
  );
}

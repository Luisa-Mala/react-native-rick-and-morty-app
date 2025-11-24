import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  ScrollView,
  Image,
  StyleSheet,
} from "react-native";
import { Status, GlobalText as Text } from "@/components/elements";
import { getCharacterDetails } from "@/lib/character";

export default function CharacterDetail() {
  const { id } = useLocalSearchParams();
  const [characterInfo, setCharacterInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getCharacterDetails(id).then(setCharacterInfo);
    }
  }, [id]);

  return (
    <>
      <Stack.Screen
        options={{
          headerLeft: () => {},
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#272b33",
        }}
      >
        <View>
          {characterInfo === null ? (
            <ActivityIndicator size={"large"} color="#00ff00" />
          ) : (
            <ScrollView
              contentContainerStyle={{
                justifyContent: "center",
                alignItems: "center",
                flexGrow: 1,
              }}
            >
              <View>
                <Image
                  source={{ uri: characterInfo.image }}
                  style={{
                    width: 310,
                    height: 280,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    alignSelf: "center",
                  }}
                />
                <View
                  style={{
                    backgroundColor: "#3c3e44",
                    padding: 20,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    width: 310,
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 24,
                      marginBottom: 5,
                      fontWeight: "400",
                      fontFamily: "BBH-Sans-Hegarty",
                    }}
                  >
                    {characterInfo.name}
                  </Text>
                  <Status
                    state={characterInfo.status}
                    species={characterInfo.species}
                  />
                  <Text style={styles.title}>Origin:</Text>
                  <Text style={styles.text}>{characterInfo.originPlace}</Text>

                  <Text style={styles.title}>Location:</Text>
                  <Text style={styles.text}>{characterInfo.location.name}</Text>

                  <Text style={styles.title}>Episodes:</Text>
                  <Text style={styles.text}>{characterInfo.numEpisodes}</Text>
                </View>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    color: "#9e9e9e",
    marginTop: 20,
  },
  text: {
    color: "white",
  },
});

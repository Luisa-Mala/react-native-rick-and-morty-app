import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  View,
  StyleSheet,
} from "react-native";
import { useEffect, useState } from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useColorScheme } from "@/lib/ColorSchemeContext";
import { getEpisodeDetails } from "@/lib/episode";
import { lightTheme, darkTheme } from "@/themes";
import { IonIcons, GlobalText as Text } from "@/components/elements";
import { AnimatedCharacterCard } from "@/components/sections";

export default function EpisodeDetail() {
  const router = useRouter();
  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const { id } = useLocalSearchParams();
  const [episodeInfo, setEpisodeInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getEpisodeDetails(id).then(setEpisodeInfo);
    }
  }, [id]);

  const styles = styling(theme);

  return (
    <>
      <Stack.Screen
        options={{
          titleAlign: "center",
          headerTitle: () => (
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: "black",
                textAlign: "center",
              }}
            >
              Episode Details
            </Text>
          ),
          headerLeft: () => (
            <Pressable
              onPress={() => router.back()}
              hitSlop={20} // Aumenta el área táctil para mejor UX
            >
              <IonIcons name="arrow-back" size={24} color="black" />
            </Pressable>
          ),
          headerRight: () => null,
        }}
      />
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme.background,
        }}
      >
        <View>
          {episodeInfo === null ? (
            <ActivityIndicator size={"large"} color="#00ff00" />
          ) : (
            <ScrollView>
              <View style={styles.container}>
                <Text isTitle style={{ color: theme.text, marginTop: 30 }}>
                  {episodeInfo.name}
                </Text>

                <View className="py-8 w-full">
                  <View className="flex-row justify-between mb-4">
                    {/* Columna Code */}
                    <View
                      className="flex-1 pt-4 "
                      style={{
                        borderTopWidth: 1,
                        borderTopColor: theme.primary + "40",
                      }}
                    >
                      <Text style={styles.labelStyle}>Code</Text>
                      <Text style={styles.text}>{episodeInfo.code}</Text>
                    </View>

                    {/* Columna Date */}
                    <View
                      className="flex-1 pt-4 ml-4"
                      style={{
                        borderTopWidth: 1,
                        borderTopColor: theme.primary + "40",
                      }}
                    >
                      <Text style={styles.labelStyle}>Release Date</Text>
                      <Text style={styles.text}>{episodeInfo.air_date}</Text>
                    </View>
                  </View>

                  {/* Línea Divisoria */}
                  <View
                    className="h-[1px] w-full mb-6"
                    style={{ backgroundColor: theme.primary + "40" }}
                  />
                </View>

                <View>
                  <Text
                    isTitle
                    style={{
                      color: theme.text,
                      marginTop: 0,
                      marginBottom: 30,
                    }}
                  >
                    Characters in this episode
                  </Text>

                  {episodeInfo.charactersIn.length === 0 ? (
                    <Text style={{ color: theme.text, marginTop: 20 }}>
                      No characters found for this episode.
                    </Text>
                  ) : (
                    episodeInfo.charactersIn.map((character, index) => (
                      <View
                        key={character.id}
                        style={{
                          backgroundColor: theme?.cardBg,
                          marginBottom: 15,
                          borderRadius: 12,
                          paddingHorizontal: 15,
                        }}
                      >
                        <AnimatedCharacterCard
                          character={character}
                          index={index}
                          isLinked={false}
                        />
                      </View>
                    ))
                  )}
                </View>
              </View>
            </ScrollView>
          )}
        </View>
      </View>
    </>
  );
}

const styling = (theme) =>
  StyleSheet.create({
    container: {
      paddingTop: 20,
      paddingHorizontal: 20,
      flex: 1,
      width: "100%",
    },
    labelStyle: {
      color: theme.textColorPrimary,
      fontSize: 14,
    },
    title: {
      fontSize: 14,
      color: "#9e9e9e",
      marginTop: 20,
    },
    text: {
      color: theme?.text,
    },
  });

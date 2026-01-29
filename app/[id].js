import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  View,
  ActivityIndicator,
  ScrollView,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { IonIcons, Status, GlobalText as Text } from "@/components/elements";
import { getCharacterDetails } from "@/lib/character";
import { lightTheme, darkTheme } from "@/themes";
import { useColorScheme } from "@/lib/ColorSchemeContext";

export default function CharacterDetail() {
  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const { id } = useLocalSearchParams();
  const [characterInfo, setCharacterInfo] = useState(null);

  useEffect(() => {
    if (id) {
      getCharacterDetails(id).then(setCharacterInfo);
    }
  }, [id]);

  const styles = styling(theme);

  return (
    <>
      <Stack.Screen
        options={{
          title: characterInfo && characterInfo.name,
          headerTitleStyle: {
            fontWeight: "bold",
            color: theme.text,
          },
          headerLeft: () => {},
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
          {characterInfo === null ? (
            <ActivityIndicator size={"large"} color="#00ff00" />
          ) : (
            <ScrollView
              contentContainerStyle={
                {
                  // justifyContent: "center",
                  // alignItems: "center",
                  // flexGrow: 1,
                }
              }
            >
              <View style={styles.container}>
                <Image
                  source={{ uri: characterInfo.image }}
                  style={styles.image}
                />
                <View className="py-8 w-full">
                  <View className="flex-row justify-between mb-4">
                    {/* Columna Status */}
                    <View
                      className="flex-1 pt-4 "
                      style={{
                        borderTopWidth: 1,
                        borderTopColor: theme.primary + "40",
                      }}
                    >
                      <Text style={styles.labelStyle}>Status</Text>
                      <Status state={characterInfo.status} theme={theme} />
                    </View>

                    {/* Columna Species */}
                    <View
                      className="flex-1 pt-4 ml-4"
                      style={{
                        borderTopWidth: 1,
                        borderTopColor: theme.primary + "40",
                      }}
                    >
                      <Text style={styles.labelStyle}>Species</Text>
                      <Text style={styles.text}>{characterInfo.species}</Text>
                    </View>
                  </View>

                  {/* Línea Divisoria */}
                  <View
                    className="h-[1px] w-full mb-6"
                    style={{ backgroundColor: theme.primary + "40" }}
                  />

                  {/* Fila Inferior: Origin */}
                  <View>
                    <Text style={styles.labelStyle}>Origin</Text>
                    <Text style={styles.text}>
                      {characterInfo.originPlace || "Unknown"}
                    </Text>
                  </View>
                </View>

                <TouchableHighlight
                  underlayColor={"#13ec5b"}
                  // onPress={goToHome}
                  style={{
                    width: "100%",
                    // minWidth: 84,
                    padding: 10,
                    paddingHorizontal: 20,
                    backgroundColor: theme.primary,
                    borderRadius: 8,
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <IonIcons name="heart-outline" />
                    <Text
                      style={{
                        fontWeight: "700",
                        color: "#000",
                        textAlign: "center",
                        marginLeft: 10,
                      }}
                    >
                      Add to favorites
                    </Text>
                  </View>
                </TouchableHighlight>

                <View>
                  <Text isTitle style={{ color: theme.text, marginLeft: 0 }}>
                    Episodes
                  </Text>
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
    image: {
      width: "100%",
      aspectRatio: 1,
      borderRadius: 20,
      alignSelf: "center",
    },
    labelStyle: {
      color: theme.primary,
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

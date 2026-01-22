import { useEffect, useState } from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  ActivityIndicator,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { lightTheme, darkTheme } from "../../themes";

import { Card, GlobalText as Text } from "@/components/elements";
import { Slider } from "@/components/sections";
import { useColorScheme } from "@/lib/ColorSchemeContext";
import { getLatestCharacter } from "@/lib/character";

const heroHome = require("@/assets/hero-home.png");

export default function Home() {
  const [characters, setCharacters] = useState([]);

  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  useEffect(() => {
    getLatestCharacter(5).then((games) => {
      setCharacters(games);
    });
  }, []);

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "start",
          // alignItems: "center",
          backgroundColor: theme.background,
          minHeight: "100%",
        }}
      >
        <View className="px-4 py-3">
          <ImageBackground
            source={heroHome}
            className="bg-center bg-no-repeat overflow-hidden rounded-xl min-h-[280px] w-full"
            resizeMode="cover"
          >
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.8)"]}
              className="flex flex-col justify-end"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                height: "100%",
              }}
            >
              <Text
                className="text-white pl-5 pb-1"
                style={{ fontSize: 24, fontFamily: "BBH-Sans-Hegarty" }}
              >
                Bienvenido explorador
              </Text>
              <Text className=" text-white pl-5 pb-5">
                ¿Listo para una nueva aventura?
              </Text>
            </LinearGradient>
          </ImageBackground>
        </View>

        {characters.length === 0 ? (
          /** LOADING */
          <View style={{ height: 200 }}>
            <ActivityIndicator color={"#00ff2aff"} size={"large"} />
          </View>
        ) : (
          <>
            <View style={{ flex: 1 }}>
              <Slider title={"Personajes Populares"} characters={characters} />
            </View>
            <View style={{ flex: 1 }}>
              <Slider
                title={"Ultimos episodios"}
                widthCard={250}
                heightCard={150}
              />
            </View>
          </>
        )}
        <View style={{ paddingBottom: 20 }}>
          <Text
            style={{
              fontSize: 20,
              marginBottom: 16,
              marginTop: 20,
              marginLeft: 16,
              fontFamily: "BBH-Sans-Hegarty",
              color: theme.text,
            }}
          >
            Explora el Multiverso
          </Text>
          <View className="flex flex-col items-center">
            <Card
              icon={"people-outline"}
              title={"Personajes"}
              description={"Ver todos los personajes"}
              url={"/characters"}
            />

            <Card
              title={"Episodios"}
              description={"Lista de episodios"}
              url={"/episodes"}
            />
            <Card
              icon={"planet-outline"}
              title={"Ubicaciones"}
              description={"Explorar ubicaciones"}
              url={"/location"}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

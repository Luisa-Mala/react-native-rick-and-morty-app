import {
  ImageBackground,
  ScrollView,
  View,
  useColorScheme,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { lightTheme, darkTheme } from "../../themes";

import { Carousel, GlobalText as Text } from "@/components";

const heroHome = require("@/assets/hero-home.png");

export default function Home() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkTheme : lightTheme;
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          justifyContent: "start",
          // alignItems: "center",
          backgroundColor: theme.colors.background,
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

        <Carousel></Carousel>
      </View>
    </ScrollView>
  );
}

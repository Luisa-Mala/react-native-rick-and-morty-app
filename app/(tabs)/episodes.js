// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default function Episodes() {
//   return (
//     <View style={[styles.container, { backgroundColor: "pink" }]}>
//       <Text style={{ color: "black" }}>Contenido con tema</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
// });

// app/(tabs)/episodes.js
import { View, Text } from "react-native";
import { ThemeToggle } from "@/components/elements/ThemeToggle";
import { useColorScheme } from "@/lib/ColorSchemeContext";
import { lightTheme, darkTheme } from "../../themes";

export default function EpisodesScreen() {
  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={{ flex: 1, backgroundColor: theme.background, padding: 20 }}>
      <Text style={{ color: theme.text, fontSize: 20 }}>
        Lista de Episodios
      </Text>
      <ThemeToggle />
    </View>
  );
}

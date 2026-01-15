// components/elements/ThemeToggle.jsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useColorScheme } from "../../lib/ColorSchemeContext";
import { lightTheme, darkTheme } from "../../themes";

export const ThemeToggle = () => {
  const { colorScheme, toggleScheme, isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const cycleTheme = () => {
    const modes = ["light", "dark", "system"];
    const nextIndex = (modes.indexOf(colorScheme) + 1) % modes.length;
    toggleScheme(modes[nextIndex]);
  };

  return (
    <TouchableOpacity
      style={[styles.btn, { backgroundColor: theme.primary }]}
      onPress={cycleTheme}
    >
      <Text style={{ color: "#fff" }}>Tema: {colorScheme.toUpperCase()}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 10,
  },
});

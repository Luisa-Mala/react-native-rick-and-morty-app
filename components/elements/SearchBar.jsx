import { View, TextInput, StyleSheet } from "react-native";
import IonIcons from "./IonIcons"; // Reutiliza tu componente de iconos
import { useColorScheme } from "@/lib/ColorSchemeContext";
import { lightTheme, darkTheme } from "@/themes";

export default function SearchBar({
  value,
  onChangeText,
  placeholder = "Buscar...",
}) {
  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <View style={[styles.container, { backgroundColor: theme.cardBg }]}>
      <IonIcons
        name="search"
        size={20}
        color={theme.cardText}
        style={styles.icon}
      />
      <TextInput
        style={[styles.input, { color: theme.text }]}
        placeholder={placeholder}
        placeholderTextColor={theme.cardText}
        value={value}
        onChangeText={onChangeText}
        autoCorrect={false}
      />
      {value.length > 0 && (
        <IonIcons
          name="close-circle"
          size={20}
          color={theme.cardText}
          onPress={() => onChangeText("")}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginHorizontal: 15,
    marginVertical: 10,
    height: 50,
    borderRadius: 12,
  },
  icon: { marginRight: 10 },
  input: { flex: 1, fontSize: 16, height: "100%" },
});

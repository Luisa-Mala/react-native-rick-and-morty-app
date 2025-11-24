import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  // Define tu fuente global por defecto aquí
  defaultText: {
    fontFamily: "DM-Sans-Regular", // Usando DM Sans como ejemplo
    // Opcional: define un color o tamaño de fuente base
    fontSize: 16,
  },
});

export default function GlobalText(props) {
  // 1. Combina los estilos globales con los estilos pasados por el usuario
  return (
    <Text {...props} style={[styles.defaultText, props.style]}>
      {props.children}
    </Text>
  );
}

import { Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: "DM-Sans-Regular",
    fontSize: 16,
  },
  defaultTitle: {
    fontSize: 20,
    marginBottom: 16,
    marginTop: 20,
    marginLeft: 16,
    fontFamily: "BBH-Sans-Hegarty",
  },
});

export default function GlobalText({ isTitle, children, style, ...props }) {
  const baseStyle = isTitle ? styles.defaultTitle : styles.defaultText;

  return (
    <Text {...props} style={[baseStyle, style]}>
      {children}
    </Text>
  );
}

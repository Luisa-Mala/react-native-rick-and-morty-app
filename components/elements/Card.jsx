import { useColorScheme } from "@/lib/ColorSchemeContext";
import { darkTheme, lightTheme } from "@/themes";
import { View, StyleSheet, Pressable } from "react-native";
import { IonIcons, GlobalText as Text } from "@/components/elements";
import { EpisodeIcon } from "./Icons";
import { Link } from "expo-router";
import { styled } from "nativewind";

const StyledPressable = styled(Pressable);

export default function Card({ icon, title, code, description, url }) {
  const { isDarkMode } = useColorScheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const styles = styling(theme);

  return (
    <Link href={url} asChild>
      <StyledPressable className="active:opacity-70">
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            {icon ? (
              <IonIcons name={icon} color={theme.primary} />
            ) : (
              <EpisodeIcon color={theme.primary} />
            )}
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text style={styles.title}>{title}</Text>
              {code ? <Text style={styles.text}>{code}</Text> : null}
              <Text style={styles.text}>{description}</Text>
            </View>
            <IonIcons name={"arrow-forward"} color={theme.cardText} />
          </View>
        </View>
      </StyledPressable>
    </Link>
  );
}

const styling = (theme) =>
  StyleSheet.create({
    container: {
      width: "95%",
      backgroundColor: theme?.cardBg,
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 12,
      padding: 16,
      marginBottom: 15,
    },
    iconContainer: {
      height: 48,
      width: 48,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
      backgroundColor: theme?.cardIconsBg,
      marginRight: 16,
    },
    text: {
      color: theme?.cardText,
      fontSize: 14,
    },
    title: {
      fontFamily: "DM-Sans-Bold",
      fontSize: 20,
      color: theme?.text,
    },
  });

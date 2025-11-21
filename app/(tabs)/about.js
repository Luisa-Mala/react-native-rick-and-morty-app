import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native";
import { GlobalText as Text } from "@/components";

export default function About() {
  return (
    <ScrollView>
      <View style={{ paddingHorizontal: 20, paddingVertical: 40 }}>
        <Text style={{ fontFamily: "BBH-Sans-Hegarty", fontSize: 30 }}>
          About
        </Text>
        <Text style={styles.title}>What is this?</Text>
        <Text style={styles.text}>
          The Rick and Morty API is a REST(ish) and GraphQL API based on the
          television show Rick and Morty. You will have access to about hundreds
          of characters, images, locations and episodes. The Rick and Morty API
          is filled with canonical information as seen on the TV show. Check out
          the documentation to get started
        </Text>
        <Text style={styles.title}>Who are you?</Text>
        <Text style={styles.text}>
          We are Axel Fuhrmann, a guy who likes to develop things and Talita,
          the "Rick and Morty data scientist" and hardcore fan.
        </Text>
        <Text style={styles.title}>Why did you build this?</Text>
        <Text style={styles.text}>
          Because we were really interested in the idea of writing an open
          source project and also because Rick and Morty is our favorite show at
          that moment, so why not?
        </Text>
        <Text style={styles.title}>Technical stuff?</Text>
        <Text style={styles.text}>
          The entire project is hosted on Digital Ocean and Netlify. GraphQL
          cache is handled through Stellate. We use Node and MongoDB to serve
          the API.
        </Text>
        <Text style={styles.title}>How can I contribute to the project?</Text>
        <Text style={styles.text}>
          You can help us to keep the project alive and you can also contribute
          on GitHub. Copyright? Rick and Morty is created by Justin Roiland and
          Dan Harmon for Adult Swim. The data and images are used without claim
          of ownership and belong to their respective owners. This API is open
          source and uses a BSD license.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: "400",
    fontFamily: "BBH-Sans-Hegarty",
  },
  text: {
    fontSize: 14,
  },
});

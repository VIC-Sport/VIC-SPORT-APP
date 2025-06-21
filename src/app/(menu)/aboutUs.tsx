import { APP_COLOR } from "@/utils/constant";
import { Stack } from "expo-router";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

const AboutUs = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: "About us" }} />
      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/7772/7772047.png"
        }}
        style={styles.logo}
      />
      <Text style={styles.title}>Vic Sports</Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold", color: APP_COLOR.PURPLE }}>
          Vic Sports
        </Text>{" "}
        is a comprehensive solution for both players and sports field managers.
      </Text>
      <Text style={styles.text}>
        We provide a platform that helps players easily find and book courts
        online, pay quickly, and find sports partners easily, with convenient
        and effective communication and chat.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold", color: APP_COLOR.PURPLE }}>
          Vic Sports
        </Text>{" "}
        helps managers track booking schedules, purchase services, manage
        payments, and provide effective customer care.
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: "bold", color: APP_COLOR.PURPLE }}>
          With Vic Sports,
        </Text>{" "}
        sports management and experience has become simpler and more convenient
        than ever. Join now to enjoy the convenience from both sides - players
        and managers!
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff"
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 24,
    marginBottom: 10
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: APP_COLOR.PURPLE,
    textAlign: "center",
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    color: "#333",
    lineHeight: 24
  }
});

export default AboutUs;

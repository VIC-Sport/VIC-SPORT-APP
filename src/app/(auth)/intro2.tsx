import ShareButton from "@/components/button/share.button";
import { APP_COLOR } from "@/utils/constant";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const Intro2 = () => {
  return (
    <ImageBackground
      style={styles.background}
      source={require("@/assets/images/icon.png")}
    >
      <LinearGradient
        style={styles.overlay}
        colors={["transparent", "rgba(0, 0, 0, 0.9)"]}
        locations={[0.2, 0.8]}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Find Your Perfect Seat</Text>
          <Text style={styles.subtitle}>
            Discover, book, and enjoy your favorite events with just a few taps.
            Let’s get you started!
          </Text>

          <ShareButton
            onPress={() => router.navigate("/(auth)/welcome")}
            title="Continue"
            textStyle={{
              color: "black",
              paddingVertical: 5,
              fontSize: 16
            }}
            btnStyle={{
              justifyContent: "center",
              borderRadius: 20,
              marginHorizontal: 35,
              paddingVertical: 12,
              backgroundColor: APP_COLOR.PURPLE,
              borderWidth: 1,
              borderColor: "#505050",
              width: "82%"
            }}
            pressStyle={{ alignSelf: "stretch" }}
          />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover"
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end"
  },
  content: {
    padding: 24,
    paddingBottom: 50,
    alignItems: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "white",
    marginBottom: 8
  },
  subtitle: {
    fontSize: 14,
    color: "#ccc",
    textAlign: "center",
    marginBottom: 32
  },
  button: {
    backgroundColor: "#E65C4F",
    paddingVertical: 12,
    paddingHorizontal: 64,
    borderRadius: 30
  },
  buttonText: {
    color: "white",
    fontWeight: "600",
    fontSize: 16
  }
});

export default Intro2;

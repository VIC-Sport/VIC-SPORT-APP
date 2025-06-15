import BannerWelcome from "@/components/welcome/banner";
import { router } from "expo-router";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <BannerWelcome />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => router.replace("/(tabs)")}
          >
            <Text style={styles.buttonText}>Getting Started</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  carouselContainer: {
    flex: 1
  },
  buttonContainer: {
    paddingVertical: 110,
    alignItems: "center"
  },
  button: {
    backgroundColor: "#8685E7",
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 30
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  }
});

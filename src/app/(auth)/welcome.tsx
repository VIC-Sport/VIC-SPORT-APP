import ShareButton from "@/components/button/share.button";
import BannerWelcome from "@/components/welcome/banner";
import { APP_COLOR } from "@/utils/constant";
import { router } from "expo-router";
import { SafeAreaView, StyleSheet, View } from "react-native";

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.carouselContainer}>
          <BannerWelcome />
        </View>

        <View style={styles.buttonContainer}>
          <ShareButton
            onPress={() => router.navigate("/(auth)/login")}
            title="ĐĂNG NHẬP"
            textStyle={{
              color: "#fff",
              paddingVertical: 5,
              fontWeight: "bold",
              fontSize: 16
            }}
            btnStyle={{
              justifyContent: "center",
              borderRadius: 30,
              marginHorizontal: 35,
              paddingVertical: 12,
              backgroundColor: APP_COLOR.PURPLE,
              borderWidth: 1,
              borderColor: "#505050",
              width: "82%",
            }}
            pressStyle={{ alignSelf: "stretch" }}
          />
          <ShareButton
            onPress={() => router.navigate("/(auth)/login")}
            title="ĐĂNG KÝ"
            textStyle={{
              color: APP_COLOR.PURPLE,
              paddingVertical: 5,
              fontWeight: "bold",
              fontSize: 16
            }}
            btnStyle={{
              justifyContent: "center",
              borderRadius: 30,
              marginHorizontal: 35,
              paddingVertical: 12,
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "#505050",
              width: "82%"
            }}
            pressStyle={{ alignSelf: "stretch" }}
          />
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
    flex: 0.8
  },
  buttonContainer: {
    flex: 0.2,
    alignItems: "center",
    gap: 16,
    paddingVertical: 50
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold"
  },
  loginButton: {
    backgroundColor: APP_COLOR.PURPLE
  },
  registerButton: {
    backgroundColor: "#4CAF50" // hoặc màu bạn muốn cho nút đăng ký
  }
});

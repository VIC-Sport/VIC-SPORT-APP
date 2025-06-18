import ShareButton from "@/components/button/share.button";
import { APP_COLOR } from "@/utils/constant";
import { LinearGradient } from "expo-linear-gradient";
import { Link, router } from "expo-router";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

const WelcomePage = () => {
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
        <View style={styles.container}>
          <View style={styles.welcomeText}>
            <Text style={styles.heading}>Welcome!</Text>
            <Text style={styles.footer}>
              You are only a few steps away from VIC Sports
            </Text>
          </View>
          <View style={styles.welcomeBtn}>
            <View>
              <View style={{ paddingBottom: 30 }}>
                <ShareButton
                  title="Continue with Email"
                  onPress={() => router.navigate("/(auth)/login")}
                  textStyle={{ color: "black", paddingVertical: 5 }}
                  pressStyle={{ alignSelf: "stretch" }}
                  btnStyle={{
                    justifyContent: "center",
                    borderRadius: 20,
                    marginHorizontal: 35,
                    paddingVertical: 12,
                    backgroundColor: APP_COLOR.PURPLE,
                    borderWidth: 1,
                    borderColor: "#505050",
                    width: "82%",
                    alignItems: "center"
                  }}
                  icons={
                    <Image
                      source={require("@/assets/auth/email-logo.png")}
                      style={{ width: 35, height: 30, resizeMode: "contain" }}
                    />
                  }
                />
              </View>

              <View style={{ paddingBottom: 30 }}>
                <ShareButton
                  title="Continue with Facebook"
                  onPress={() => alert("me")}
                  btnStyle={{
                    justifyContent: "center",
                    borderRadius: 20,
                    marginHorizontal: 35,
                    paddingVertical: 12,
                    backgroundColor: "#fff",
                    borderWidth: 1,
                    borderColor: "#505050",
                    width: "82%",
                    alignItems: "center"
                  }}
                  icons={
                    <Image
                      source={require("@/assets/auth/facebook-logo.png")}
                      style={{ width: 30, height: 30, resizeMode: "contain" }}
                    />
                  }
                />
              </View>

              <ShareButton
                title="Continue with Google"
                onPress={() => alert("me")}
                btnStyle={{
                  justifyContent: "center",
                  borderRadius: 20,
                  marginHorizontal: 35,
                  paddingVertical: 12,
                  backgroundColor: "#fff",
                  borderWidth: 1,
                  borderColor: "#505050",
                  width: "82%",
                  alignItems: "center"
                }}
                icons={
                  <Image
                    source={require("@/assets/auth/google-logo.png")}
                    style={{ width: 30, height: 30, resizeMode: "contain" }}
                  />
                }
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                justifyContent: "center"
              }}
            >
              <Text style={{ textAlign: "center", color: "white" }}>
                Don't have an account?
              </Text>
              <Link href={"/(auth)/register"}>
                <Text
                  style={{
                    textDecorationLine: "underline",
                    color: APP_COLOR.PURPLE
                  }}
                >
                  Register
                </Text>
              </Link>
            </View>
          </View>
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
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  welcomeText: {
    flex: 0.6,
    alignItems: "center",
    justifyContent: "center"
  },
  welcomeBtn: {
    flex: 0.4,
    gap: 30
  },
  heading: {
    fontSize: 40,
    fontWeight: "bold"
  },
  body: {
    fontSize: 30,
    color: APP_COLOR.PURPLE,
    marginVertical: 10
  },
  footer: {
    color: "white"
  }
});

export default WelcomePage;

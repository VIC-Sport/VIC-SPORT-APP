import ShareButton from "@/components/button/share.button";
import SocialButton from "@/components/button/social.button";
import ShareInput from "@/components/input/share.input";
import { useCurrentApp } from "@/context/app.context";
import { loginAPI } from "@/services/api";
import { APP_COLOR } from "@/utils/constant";
import { LoginSchema } from "@/utils/validate.schema";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link, router } from "expo-router";
import { Formik } from "formik";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Toast from "react-native-root-toast";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    paddingVertical: 50,
    gap: 10
  }
});

const LoginScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { setAppState } = useCurrentApp();

  const handleLogin = async (email: string, password: string) => {
    try {
      setLoading(true);
      const res = await loginAPI(email, password);
      setLoading(false);
      if (res.data) {
        await AsyncStorage.setItem("access_token", res.data.access_token);
        setAppState(res.data);
        router.replace("/(tabs)");
      } else {
        const m = Array.isArray(res.message) ? res.message[0] : res.message;
        Toast.show(m, {
          duration: Toast.durations.LONG,
          textColor: "white",
          backgroundColor: APP_COLOR.PURPLE,
          opacity: 1
        });

        if (res.statusCode === 400) {
          router.replace({
            pathname: "/(auth)/verify",
            params: { email: email, isLogin: 1 }
          });
        }
      }
    } catch (error) {
      console.log(">>> check err: ", error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Formik
        validationSchema={LoginSchema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => handleLogin(values.email, values.password)}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={styles.container}>
            <View style={{ marginVertical: 30, padding: 5 }}>
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: "bold",
                  alignItems: "center"
                }}
              >
                Login an account
              </Text>
              <Text>Welcome back, you've been missed!</Text>
            </View>

            <ShareInput
              title="Email"
              keyboardType="email-address"
              // value={email}
              // setValue={setEmail}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
            />
            <ShareInput
              title="Password"
              secureTextEntry={true}
              // value={password}
              // setValue={setPassword}
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
            />
            <View style={{ marginVertical: 10 }}></View>

            <ShareButton
              loading={loading}
              title="Login"
              // onPress={handleLogin as any}
              onPress={handleSubmit as any}
              textStyle={{ color: "black", paddingVertical: 5 }}
              btnStyle={{
                justifyContent: "center",
                borderRadius: 30,
                marginHorizontal: 35,
                paddingVertical: 12,
                backgroundColor: APP_COLOR.PURPLE,
                borderWidth: 1,
                borderColor: "#505050",
                width: "82%"
              }}
              pressStyle={{ alignSelf: "stretch" }}
            />
            <View
              style={{
                marginVertical: 15,
                flexDirection: "row",
                gap: 10,
                justifyContent: "center"
              }}
            >
              <Text style={{ textAlign: "center", color: "black" }}>
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
            <SocialButton title="Login with" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
};

export default LoginScreen;

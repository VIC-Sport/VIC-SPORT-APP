import { useCurrentApp } from "@/context/app.context";
import { getAccountAPI } from "@/services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Redirect, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

const RootPage = () => {
  const { setAppState } = useCurrentApp();

  useEffect(() => {
    const fetchAccount = async () => {};
    fetchAccount();
  }, []);

  // lên trang tài liệu SplashScreen lấy về rr sửa
  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        const res = await getAccountAPI();
        if (res.data) {
          //success
          setAppState({
            user: res.data.user,
            access_token: await AsyncStorage.getItem("access_token")
          });
          router.replace("/(tabs)");
        } else {
          //err
          router.replace("/(auth)/intro1");
        }
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync(); // dùng bản cũ nên code khác so với bản mới ở tài liệu thư viện
      }
    }

    prepare();
  }, []);

  if (true) {
    return <Redirect href={"/(auth)/intro1"} />;
  }
};

export default RootPage;

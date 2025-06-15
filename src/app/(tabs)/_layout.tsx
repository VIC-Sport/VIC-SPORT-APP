import { APP_COLOR } from "@/utils/constant";
import { Entypo, FontAwesome5, FontAwesome6 } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabLayout = () => {
  const getIcons = (routeName: string, focused: boolean, size: number) => {
    if (routeName === "index") {
      return (
        <Entypo
          name="location"
          size={size}
          color={focused ? APP_COLOR.PURPLE : APP_COLOR.GREY}
        />
      );
    }

    if (routeName === "order") {
      return (
        <FontAwesome5
          name="user-friends"
          size={size}
          color={focused ? APP_COLOR.PURPLE : APP_COLOR.GREY}
        />
      );
    }

    if (routeName === "booking") {
      return (
        <FontAwesome6
          name="calendar-check"
          size={size}
          color={focused ? APP_COLOR.PURPLE : APP_COLOR.GREY}
        />
      );
    }

    if (routeName === "featured") {
      return (
        <FontAwesome6
          name="ranking-star"
          size={size}
          color={focused ? APP_COLOR.PURPLE : APP_COLOR.GREY}
        />
      );
    }

    return <></>;
  };
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return getIcons(route.name, focused, size);
        },
        headerShown: false,
        tabBarLabelStyle: { paddingBottom: 3 },
        tabBarActiveTintColor: APP_COLOR.PURPLE
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Bản đồ" }} />
      <Tabs.Screen name="friend" options={{ title: "Tìm bạn" }} />
      <Tabs.Screen name="booking" options={{ title: "Đặt sân" }} />
      <Tabs.Screen name="featured" options={{ title: "Nổi bật" }} />
    </Tabs>
  );
};

export default TabLayout;

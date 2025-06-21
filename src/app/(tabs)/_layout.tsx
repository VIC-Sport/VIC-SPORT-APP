import { APP_COLOR } from "@/utils/constant";
import {
  Feather,
  FontAwesome6,
  Ionicons,
  SimpleLineIcons
} from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabLayout = () => {
  const getIcons = (routeName: string, focused: boolean, size: number) => {
    if (routeName === "index") {
      return focused ? (
        <Ionicons name="home" size={size} color={APP_COLOR.PURPLE} />
      ) : (
        <Ionicons name="home-outline" size={size} color={APP_COLOR.GREY} />
      );
    }

    if (routeName === "friend") {
      return (
        <Feather
          name="users"
          size={size}
          color={focused ? APP_COLOR.PURPLE : APP_COLOR.GREY}
        />
      );
    }

    if (routeName === "booking") {
      return focused ? (
        <Ionicons name="calendar-clear" size={size} color={APP_COLOR.PURPLE} />
      ) : (
        <Ionicons
          name="calendar-clear-outline"
          size={size}
          color={APP_COLOR.GREY}
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

    if (routeName === "notification") {
      return focused ? (
        <Ionicons
          name="notifications-sharp"
          size={size}
          color={APP_COLOR.PURPLE}
        />
      ) : (
        <Ionicons
          name="notifications-outline"
          size={size}
          color={APP_COLOR.GREY}
        />
      );
    }

    if (routeName === "menu") {
      return (
        <SimpleLineIcons
          name="menu"
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
        tabBarIcon: ({ focused, size }) => {
          return getIcons(route.name, focused, size);
        },
        headerShown: false,
        tabBarLabelStyle: { paddingBottom: 3 },
        tabBarActiveTintColor: APP_COLOR.PURPLE,
        tabBarStyle: {
          height: 55
        }
      })}
    >
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen
        name="friend"
        options={{ title: "Friends", headerShown: true }}
      />
      <Tabs.Screen
        name="booking"
        options={{ title: "Schedule list", headerShown: true }}
      />
      <Tabs.Screen
        name="notification"
        options={{ title: "Notifications", headerShown: true }}
      />
      <Tabs.Screen name="menu" options={{ title: "Menu" }} />
    </Tabs>
  );
};

export default TabLayout;

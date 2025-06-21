import { APP_COLOR } from "@/utils/constant";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const MENU_ITEMS = [
  { title: "Refer friends & get rewards", icon: "gift-outline" },
  { title: "Voucher", icon: "pricetags-outline" },
  { title: "About us", icon: "information-circle-outline" },
  { title: "Register to be a field owner", icon: "business-outline" },
  { title: "Logout", icon: "log-out-outline" }
];

const MenuTab = () => {
  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        if (item.title === "About us") {
          router.push("/(menu)/aboutUs");
        }
        if (item.title === "Refer friends & get rewards") {
          router.push("/(menu)/invite");
        }
        if (item.title === "Voucher") {
          router.push("/(menu)/voucher");
        }
      }}
    >
      <View style={styles.itemLeft}>
        <Ionicons name={item.icon} size={22} color="#333" />
        <Text style={styles.itemText}>{item.title}</Text>
      </View>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userWrapper}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            }}
            style={styles.avatar}
          />
          <Text style={styles.username}>Ân</Text>
        </View>
        <View style={styles.pointBox}>
          <Text style={styles.pointText}>50</Text>
        </View>
      </View>

      {/* Menu List */}
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.title}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f1f4f9",
    paddingHorizontal: 16,
    paddingVertical: 20
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    justifyContent: "space-between"
  },
  userWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 12
  },
  pointBox: {
    backgroundColor: APP_COLOR.PURPLE,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 12
  },
  pointText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  itemText: {
    fontSize: 16,
    color: "#222"
  }
});

export default MenuTab;

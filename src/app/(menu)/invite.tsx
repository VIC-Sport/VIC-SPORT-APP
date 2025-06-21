import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import React from "react";
import {
  Alert,
  Clipboard,
  Image,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const INVITE_LINK = "https://booking-sports.onelink.me/p3sR/6u8trot0";

const Invite = () => {
  const copyToClipboard = () => {
    Clipboard.setString(INVITE_LINK);
    Alert.alert("Path copied to clipboard!");
  };

  const shareApp = async () => {
    try {
      await Share.share({
        message: `Please join Booking Sports with me! 👉 ${INVITE_LINK}`
      });
    } catch (error) {
      Alert.alert("Error", "Link cannot be shared!");
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Refer a friend" }} />

      <Image
        source={{
          uri: "https://cdn-icons-png.flaticon.com/512/3124/3124412.png"
        }}
        style={styles.icon}
      />

      <Text style={styles.title}>
        Refer the app to your friends, get unlimited gifts!
      </Text>

      <Text style={styles.subtitle}>
        Share your referral link with your friends to receive attractive gifts
        from Vic Sports!
      </Text>

      <View style={styles.shareBox}>
        <View style={styles.linkRow}>
          <Text style={styles.link}>{INVITE_LINK}</Text>
          <TouchableOpacity onPress={copyToClipboard}>
            <Ionicons name="copy-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.shareButton} onPress={shareApp}>
          <Text style={styles.shareText}>SHARE</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sharedList}>
        List of friends who shared the app (0)
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    flex: 1
  },
  icon: {
    width: 100,
    height: 100,
    alignSelf: "center",
    marginBottom: 20
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10
  },
  subtitle: {
    textAlign: "center",
    color: "#555",
    marginBottom: 20
  },
  shareBox: {
    backgroundColor: "#f68ab7",
    borderRadius: 16,
    padding: 16,
    marginBottom: 30
  },
  linkRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12
  },
  link: {
    color: "#fff",
    fontSize: 14,
    flex: 1,
    marginRight: 8
  },
  shareButton: {
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderRadius: 8
  },
  shareText: {
    color: "#f43f5e",
    textAlign: "center",
    fontWeight: "bold"
  },
  sharedList: {
    fontWeight: "600",
    fontSize: 16,
    color: "#111"
  }
});

export default Invite;

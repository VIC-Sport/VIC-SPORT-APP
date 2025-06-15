import { APP_COLOR } from "@/utils/constant";
import { ReactNode } from "react";
import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle
} from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    backgroundColor: APP_COLOR.PURPLE
  }
});

interface IProps {
  title: string;
  onPress: () => void;
  textStyle?: StyleProp<TextStyle>;
  pressStyle?: StyleProp<ViewStyle>;
  btnStyle?: StyleProp<ViewStyle>;
  icons?: ReactNode;
  loading?: boolean;
}

const ShareButton = (props: IProps) => {
  const {
    title,
    onPress,
    textStyle,
    pressStyle,
    btnStyle,
    icons,
    loading = false
  } = props;
  return (
    <Pressable
      disabled={loading}
      style={({ pressed }) => [
        {
          opacity: pressed === true || loading ? 0.5 : 1, // nếu và click vào thì bằng true hoặc có loading thì mờ đi
          alignItems: "flex-start"
        },
        pressStyle
      ]}
      onPress={onPress}
    >
      <View style={[styles.btnContainer, btnStyle]}>
        {loading && <ActivityIndicator color="black" />}
        {icons}
        <Text style={textStyle}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default ShareButton;

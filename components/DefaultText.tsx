import { StyleSheet, Text, TextProps } from "react-native";

const DefaultText = ({ children }: TextProps) => {
  return <Text style={styles.text}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "open-sans",
  },
});

export default DefaultText;

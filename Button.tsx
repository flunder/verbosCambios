import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  children: any;
  onPress: () => void;
  style: any;
}

const Button = ({ children, onPress, style }: Props): JSX.Element => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.button, style]}
    activeOpacity={0.8}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: "#000",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center"
    // width: "100%"
  },
  text: {
    color: "#fff",
    fontSize: 18
  }
});

export { Button };

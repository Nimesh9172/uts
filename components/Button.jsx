import { View, Text, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { Gradients } from "../constants/Colors";

const Button = ({ children, onPress }) => {
  return (
    <Pressable onPress={() => onPress()} style={styles.btnWrapper}>
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        colors={Gradients.primaryGradientArray}
        style={styles.btnInnerWrapper}
      >
        <Text style={styles.btnText}>{children}</Text>
      </LinearGradient>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btnWrapper: {
    flex: 1,
    // borderWidth:1,
  },
  btnInnerWrapper: {
    borderRadius: 20,
    padding: 8,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 15,
  },
});

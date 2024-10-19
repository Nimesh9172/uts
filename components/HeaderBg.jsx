import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Shadow } from "react-native-shadow-2";

import { Gradients } from "../constants/Colors";

const HeaderBg = ({ children }) => {
  return (
    <Shadow
      style={styles.mainContainer}
      distance={10}
      startColor={"hsla(0, 0.80%, 24.50%, 0.06)"}
      offset={[1, 3]}
    >
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        colors={Gradients.primaryGradientArray}
        style={styles.innerContainer}
      >
        {children}
      </LinearGradient>
    </Shadow>
  );
};

export default HeaderBg;

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    elevation: 4,
  },
  innerContainer: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

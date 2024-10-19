import { View, Text, Image, StyleSheet } from "react-native";

import { Colors } from "../constants/Colors";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <Text style={{ fontSize: 12, color: Colors.primary600 }}>
        G.16.61(15.1.39)
      </Text>
      <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
        <View
          style={{
            borderRadius: 100,
            borderWidth: 1,
            padding: 3,
            borderColor: "#ccc",
          }}
        >
          <Image
            source={require("../assets/images/cris.png")}
            style={{ width: 25, height: 20 }}
          />
        </View>
        <Text style={{ fontSize: 12, color: Colors.primary600 }}>
          Centre for Railway Information Systems (CRIS)
        </Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

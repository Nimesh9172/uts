import { View, Text, StyleSheet, Image } from "react-native";
import { Shadow } from "react-native-shadow-2";
import Entypo from "@expo/vector-icons/Entypo";

import { Theme } from "../constants/Theme";

import HeaderBg from "./HeaderBg";

const Header = () => {
  return (
    <HeaderBg>
      <Shadow
        distance={2}
        startColor={"hsla(0, 0.00%, 0.00%, 0.19)"}
        offset={[-0.8, 2]}
      >
        <View style={styles.rounded}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logoImg}
          />
        </View>
      </Shadow>
      <View>
        <Text style={[Theme.interFont, styles.utsFont]}>UTS</Text>
        <Text style={[Theme.interFont, styles.utsText]}>
          IR Unreserved Ticketing
        </Text>
      </View>
      <View
        style={{
          borderRadius: 100,
        }}
      >
        <Image
          source={require("../assets/images/translatelang.png")}
          style={styles.langImg}
        />
      </View>
      <View>
        <Image
          source={require("../assets/images/loginbtn.png")}
          style={styles.loginBtnImg}
        />
      </View>
      <Entypo name="dots-three-vertical" size={24} color="black" />
    </HeaderBg>
  );
};

export default Header;

const styles = StyleSheet.create({
  logoImg: {
    height: 40,
    width: 40,
  },
  langImg: {
    height: 25,
    width: 25,
  },
  loginBtnImg: {
    height: 35,
    width: 35,
  },
  utsFont: {
    color: "white",
    fontWeight: "bold",
  },
  utsText: {
    color: "white",
  },
  rounded: {
    borderRadius: 100,
  },
});

import { View, StyleSheet, Text, Image } from "react-native";

import { Theme } from "../constants/Theme";
import MarqueeView from "react-native-marquee-view";

const MainTicketHeader = () => {
  return (
    <View style={styles.header}>
      <View style={styles.crisImgWrapper}>
        <Image
          style={styles.crisImg}
          source={require("../assets/images/cris.png")}
        />
      </View>
      <MarqueeView style={styles.marquee} speed={0.4}>
        <Text style={[Theme.interFontTextBlue, styles.headerTitle]}>
          IR Unreserved Ticketing...{"                      "}
        </Text>
      </MarqueeView>
      <Image style={styles.img} source={require("../assets/images/logo.png")} />
    </View>
  );
};

export default MainTicketHeader;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  headerTitle: {
    fontSize: 18,
  },
  crisImgWrapper: {
    borderRadius: 100,
    elevation: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 4,
  },
  crisImg: {
    height: 22,
    width: 26,
  },
  img: {
    height: 30,
    width: 30,
  },
  marquee: {
    position: "absolute",
    width: "100%",
    zIndex: -1,
  },
});

import { View, Text, StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { StatusBar } from "expo-status-bar";

import { Theme } from "../constants/Theme";
import { Colors } from "../constants/Colors";

import SafeAreaCard from "../components/SafeAreaCard";
import Header from "../components/Header";
import BookingTabs from "../components/BookingTabs";
import ProfileBookingCards from "../components/ProfileBookingCards";
import BookingCard from "../components/BookingCard";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <SafeAreaCard>
      <StatusBar backgroundColor={Colors.primary400} />

      <View style={{ flex: 1 }}>
        <Header />
        <View style={styles.bnsTextWrapper}>
          <Text style={[Theme.interFontTextBlue]}>
            INDIAN RAILWAYS OFFER 3% BONUS ON
          </Text>
          <Text style={[Theme.interFontTextBlue]}>RECHARGE OF R-WALLET.</Text>
        </View>
        <BookingTabs />
        <ProfileBookingCards />
        <BookingCard />
        <View style={styles.floatingBTnWrapper}>
          <Text style={{ fontSize: 15 }}>HELP</Text>
          <View style={styles.floatingBTn}>
            <Entypo name="help-with-circle" size={23} color="#fff" />
          </View>
        </View>
        <Footer />
      </View>
    </SafeAreaCard>
  );
}

const styles = StyleSheet.create({
  bnsTextWrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 6,
    // flex:1
  },
  floatingBTnWrapper: {
    flexDirection: "row",
    columnGap: 5,
    alignItems: "center",
    position: "absolute",
    bottom: 50,
    right: 10,
  },
  floatingBTn: {
    backgroundColor: Colors.primary500,
    padding: 20,
    borderRadius: 50,
    elevation: 6,
  },
});

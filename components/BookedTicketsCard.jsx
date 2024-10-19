import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { LinearGradient } from "expo-linear-gradient";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

import { Theme } from "../constants/Theme";
import { Colors } from "../constants/Colors";

import { formatDate } from "../utils/helpers";

const BookedTicketsCard = ({ data }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("MainTicketScreen", { bookingId: data.id })
      }
    >
      <View style={styles.mainCard}>
        <View style={styles.bookedLogo}>
          <Image
            source={require("../assets/images/booked.png")}
            style={{ height: 80, width: 80 }}
          />
        </View>

        <View style={styles.section}>
          <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={[Colors.primary600, Colors.primary500]}
            style={styles.seasonWrapper}
          >
            <Text style={[styles.cardTitle, Theme.interFont]}>
              SEASON ( M-TICKET )
            </Text>
          </LinearGradient>

          <LinearGradient
            start={[0, 0]}
            end={[1, 1]}
            colors={[Colors.primary500, Colors.primary400]}
            style={styles.fareWrapper}
          >
            <View style={styles.fareContent}>
              <Text style={[styles.cardTitle, Theme.interFont]}>FARE: </Text>
              <MaterialIcons name="currency-rupee" size={20} color="black" />
              <Text style={styles.cardTitle}>
                {parseFloat(data.fare).toFixed(2)}
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View style={styles.section}>
          <View style={[styles.stationWrapper, styles.borderBottom]}>
            <View style={styles.roundBgText}>
              <Text style={[styles.insideText, Theme.interFont]}>S</Text>
            </View>
            <Text>{data.source}</Text>
          </View>
          <View
            style={[
              styles.stationWrapper,
              styles.borderBottom,
              styles.borderLeft,
            ]}
          >
            <View style={styles.roundBgText}>
              <Text style={[styles.insideText, Theme.interFont]}>D</Text>
            </View>
            <Text style={Theme.interFont}>{data.destination}</Text>
          </View>
        </View>

        <View
          style={[styles.section, styles.borderBottom, styles.paddingVertical3]}
        >
          <Text style={[Theme.interFont, styles.fontSW]}>Via: </Text>
          <Text
            style={[
              Theme.interFont,
              styles.fontSW,
              { color: Colors.primary500 },
            ]}
          >
            1RT{">>"}
          </Text>
        </View>

        <View style={[styles.section, styles.borderBottom]}>
          <View style={[styles.flexItem, styles.paddingVertical3]}>
            <Text style={styles.fontSW}>ADULT: 1 CHILD: 0</Text>
          </View>
          <Text
            style={[
              styles.flexItem,
              styles.borderLeft,
              styles.paddingVertical3,
              styles.fontSW,
              { paddingHorizontal: 19 },
            ]}
          >
            FIRST (I)
          </Text>
          <View style={{ justifyContent: "flex-end", flex: 1 }}>
            <Text
              style={[
                styles.flexItem,
                styles.borderLeft,
                styles.paddingVertical3,
                styles.fontSW,
                { textAlign: "center" },
                // {paddingHorizontal:19}
              ]}
            >
              ORDINARY (O)
            </Text>
          </View>
        </View>

        <View style={[styles.section, styles.borderBottom]}>
          <View style={[styles.paddingVertical3, { paddingRight: 4 }]}>
            <Text style={styles.fontSW}>
              BOOKING DATE:{" "}
              <Text style={styles.primary500}>
                {formatDate(data.bookingDate)}
              </Text>
            </Text>
          </View>
          <View
            style={[
              styles.paddingVertical3,
              styles.borderLeft,
              { alignItems: "center", flex: 1 },
            ]}
          >
            <Text style={[styles.fontSW]}>
              UTS NO <Text style={styles.primary500}>{data.uts_no}</Text>
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.imgTextWrapper}>
            <Image
              source={require("../assets/images/next_arrow.png")}
              style={styles.imgNext}
            />
            <Text style={[styles.fontSW, styles.primary500]}>VIEW TICKET</Text>
          </View>
          <View
            style={[
              styles.imgTextWrapper2,
              styles.borderLeft,
              { justifyContent: "flex-end" },
            ]}
          >
            <Image
              source={require("../assets/images/search.png")}
              style={[styles.imgSearch]}
            />
            <Text style={[styles.fontSW, styles.primary500]}>NEXT TRAINS</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default BookedTicketsCard;

const styles = StyleSheet.create({
  mainCard: {
    marginHorizontal: 10,
    marginVertical: 8,
    elevation: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
  },
  bookedLogo: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    gap: 1,
  },
  cardTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  seasonWrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 4,
  },
  fareWrapper: {
    flex: 1,
    alignItems: "flex-end",
    paddingVertical: 7,
    padding: 4,
  },
  fareContent: {
    justifyContent: "center",
    flexDirection: "row",
  },
  roundBgText: {
    backgroundColor: Colors.primary500,
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  insideText: {
    color: "#fff",
    fontSize: 15,
  },
  stationWrapper: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingVertical: 8,
    gap: 8,
    paddingHorizontal: 8,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  borderLeft: {
    borderLeftWidth: 1,
    borderColor: "#ccc",
  },
  flexItem: {
    paddingHorizontal: 4,
  },
  imgTextWrapper: {
    // paddingVertical: 8,
    paddingTop: 10,
    gap: 8,
    alignItems: "flex-start",
    flexDirection: "row",
    flex: 1,
  },
  imgNext: {
    width: 28,
    height: 15,
  },
  imgSearch: {
    width: 21,
    height: 21,
  },
  paddingVertical3: { paddingVertical: 3 },
  textCenter: { alignItems: "center" },
  fontSW: { fontSize: 11 },
  imgTextWrapper2: {
    flex: 1,
    paddingTop: 10,
    gap: 5,
    alignItems: "flex-start",
    flexDirection: "row",
    flex: 1,
  },
  primary500: {
    color: Colors.primary500,
  },
});

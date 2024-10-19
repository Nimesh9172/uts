import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import SafeAreaCard from "../components/SafeAreaCard";
import MainTicketHeader from "../components/MainTicketHeader";
import { Theme } from "../constants/Theme"; // Assume this has colors, fonts, etc.
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Button from "../components/Button";
import { Colors } from "../constants/Colors";

import { formatDate } from "../utils/helpers";
import useStore from "../store/useStore";

const MainTicket = () => {
  const route = useRoute();
  const { bookingId } = route.params;

  const { bookedTickets } = useStore();

  const filteredData = bookedTickets.find((item) => item.id === bookingId);

  const crashIntentionally = () => {
    throw new Error("Crashing the app intentionally!");
  };

  return (
    <SafeAreaCard>
      <StatusBar backgroundColor={Colors.primary400} />
      <View style={styles.mainContainer}>
        <MainTicketHeader />
        <ScrollView
          style={styles.mainTicketCard}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.ticketCard}>
            {/* Section 1 Start */}
            <View style={styles.sectionHeader}>
              <Text style={[styles.font16, styles.bold]}>HAPPY JOURNEY</Text>
              <View style={styles.monthlyLabel}>
                <Text style={[styles.font16, styles.bold, styles.whiteText]}>
                  MONTHLY
                </Text>
              </View>
            </View>
            {/* Section 1 End */}

            {/* Ticket Details */}
            <View style={styles.ticketDetails}>
              <Text style={[styles.font15, styles.bold]}>
                ADULT SEASON {formatDate(filteredData.bookingDate).slice(0, -6)}
              </Text>
            </View>

            {/* Price and ID Section */}
            <View style={styles.multiSection}>
              <View style={styles.priceContainer}>
                <MaterialIcons name="currency-rupee" size={20} color="black" />
                <Text style={[styles.font15, styles.bold]}>{parseFloat(filteredData.fare).toFixed(2)}/-</Text>
              </View>
              <Text style={[styles.font15, styles.bold]}>
                {filteredData.phone_no}
              </Text>
            </View>

            <View style={styles.multiSection}>
              <Text style={[styles.font15, styles.bold]}>
                UTS No. {filteredData.uts_no}
              </Text>
              <Text style={[styles.font15, styles.bold, styles.red]}>
                MONTHLY
              </Text>
            </View>

            <View style={styles.singleSection}>
              <Text style={[styles.font15, styles.bold]}>ID Card Number: </Text>
              <Text style={[styles.font15, styles.bold, styles.red]}>
                {filteredData.id_card_number}
              </Text>
            </View>

            <View style={styles.singleSection}>
              <Text style={[styles.font15, styles.bold]}>Pass: </Text>
              <Text style={[styles.font15, styles.bold, styles.red]}>
                Mr. {filteredData.name}
              </Text>
            </View>

            <View style={[styles.multiSection, styles.bottomBorder]}>
              <View style={styles.singleSection}>
                <Text style={[styles.font15, styles.bold]}>Age: </Text>
                <Text style={[styles.font15, styles.bold, styles.red]}>
                  {filteredData.age} Years
                </Text>
              </View>
              <Text style={[styles.font15, styles.bold, styles.red]}>
                Between
              </Text>
            </View>

            <View style={styles.singleSection}>
              <View style={[styles.SDContainer]}>
                <Text style={[styles.font15, { color: "#fff" }]}>S</Text>
              </View>
              <View>
                <Text style={[styles.font15, styles.bold]}>{filteredData.hindi_text_source}(27)</Text>
                <Text style={[styles.font15, styles.bold]}>{filteredData.source}</Text>
                <Text style={[styles.font15, styles.bold]}>{filteredData.hindi_text_source}</Text>
              </View>
            </View>

            <View style={styles.singleSection}>
              <View style={[styles.SDContainer]}>
                <Text style={[styles.font15, { color: "#fff" }]}>D</Text>
              </View>
              <View>
                <Text style={[styles.font15, styles.bold]}>{filteredData.hindi_text_dest}</Text>
                <Text style={[styles.font15, styles.bold]}>{filteredData.destination}</Text>
                <Text style={[styles.font15, styles.bold]}>{filteredData.hindi_text_dest}</Text>
              </View>
            </View>

            <View style={[styles.multiSection, styles.bottomBorder]}>
              <View style={styles.singleSection}>
                <Text style={[styles.font15]}>Class:</Text>
                <View>
                  <Text style={[styles.font15, styles.bold, styles.red]}>
                    प्रथम
                  </Text>
                  <Text style={[styles.font15, styles.bold, styles.red]}>
                    First
                  </Text>
                  <Text style={[styles.font15, styles.bold, styles.red]}>
                    प्र श्रे
                  </Text>
                </View>
              </View>

              <View style={[styles.singleSection]}>
                <Text style={[styles.font15]}>TRAIN TYPE:</Text>
                <View>
                  <Text style={[styles.font15, styles.bold, styles.red]}>
                    साधारण
                  </Text>
                  <Text style={[styles.font15, styles.bold, styles.red]}>
                    ORDINARY
                  </Text>
                  <Text style={[styles.font15, styles.bold, styles.red]}>
                    साधारण
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={[
                styles.singleSection,
                styles.bottomBorder,
                { paddingVertical: 3 },
              ]}
            >
              <View style={[styles.SDContainer]}>
                <Text style={[styles.font15, { color: "#fff" }]}>via</Text>
              </View>
              <Text>1RT{">>"}BSR</Text>
            </View>

            <View style={styles.multiSection}>
              <View style={styles.singleSection}>
                <Text style={[styles.font15]}>SAC: </Text>
                <Text style={[styles.font15, styles.bold]}>996411</Text>
              </View>
              <View style={styles.singleSection}>
                <Text style={[styles.font15]}>IR: </Text>
                <Text style={[styles.font15, styles.bold]}>
                  27AAAGM0289C2ZI
                </Text>
              </View>
            </View>

            <View
              style={[
                styles.multiSection,
                { justifyContent: "flex-start", gap: 25 },
              ]}
            >
              <View style={styles.singleSection}>
                <Text style={[styles.font15]}>GST C: </Text>
                <Text style={[styles.font15, styles.bold]}>19.63</Text>
              </View>
              <View style={styles.singleSection}>
                <Text style={[styles.font15]}>S: </Text>
                <Text style={[styles.font15, styles.bold]}>19.63</Text>
              </View>
            </View>

            <View style={[styles.multiSection]}>
              <View style={styles.singleSection}>
                <Text style={[styles.font15]}>Total GST: </Text>
                <Text style={[styles.font15, styles.bold]}>19.63</Text>
              </View>
            </View>

            <View style={styles.singleSection}>
              <Text style={[styles.font15]}>Validity: </Text>
              <View style={styles.singleSection}>
                <Text style={[styles.font15]}>From </Text>
                <Text style={[styles.font15, styles.bold, styles.red]}>
                  {formatDate(filteredData.validity_from).slice(0, -6)}
                </Text>
                <Text style={[styles.font15]}> To </Text>
                <Text style={[styles.font15, styles.bold, styles.red]}>
                  {formatDate(filteredData.validity_to).slice(0, -6)}
                </Text>
              </View>
            </View>

            <View style={styles.multiSection}>
              <Text style={styles.bold}>R19007</Text>
              <Text>Distance: 39 km</Text>
            </View>

            <View style={styles.singleSection}>
              <Text style={[styles.font15, styles.bold]}>
                Booking Time: {formatDate(filteredData.bookingDate)}
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              paddingHorizontal: 15,
            }}
          >
            <Text style={{ color: "#27548b", fontSize: 12 }}>
              It is recommended not to perform factory reset or change your
              handset whenever you are having valid ticket in the mobile.{" "}
              <Text
                style={{
                  color: Colors.primary500,
                  textDecorationLine: "underline",
                }}
              >
                Click for Changing Handset with Valid Ticket
              </Text>
            </Text>
          </View>

          <View
            style={{
              paddingHorizontal: 15,
            }}
          >
            <Text
              style={[
                { fontSize: 11, textAlign: "center", color: Colors.primary600 },
                styles.bold,
              ]}
            >
              FOR MEDICAL EMERGENCY L FIRST AID. CONTACT TICKET CHECKING
              STAFF/GUARD OR DIAL 139
            </Text>
          </View>

          <View style={{ paddingHorizontal: 15, gap: 6, marginVertical: 5 }}>
            <Button onPress={crashIntentionally}>OPEN QR CODE</Button>
            <Button>NEXT TRAINS TO ANDHERI</Button>
            <Button>OK</Button>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 0,
          backgroundColor: "#fff",
          width: "100%",
        }}
      >
        <Text style={{ textAlign: "center", paddingVertical: 3 }}>
          Centre for Railway information Systems (CRIS)
        </Text>
      </View>
    </SafeAreaCard>
  );
};

export default MainTicket;

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 20,
    flex: 1,
  },
  mainTicketCard: {
    elevation: 8,
    borderRadius: 8, // Rounded corners for better UI
    marginTop: 10,
    marginBottom: 20,
    // paddingVertical: 5,
    // paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  ticketCard: {
    // width:"100%",
    // marginTop:7,
    padding: 10,
    backgroundColor: "#c4ef06", // Use colors from Theme
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 6,
    borderBottomWidth: 1,
    gap: 10,
  },
  monthlyLabel: {
    backgroundColor: Colors.purple, // Use from Theme
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderRadius: 4,
    flex: 1,
  },
  whiteText: {
    color: Colors.white, // Use from Theme
  },
  ticketDetails: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  multiSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  singleSection: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    // borderWidth:1
  },
  font15: {
    fontSize: 15,
    fontFamily: Theme.fonts.regular, // Consistent typography
  },
  font16: {
    fontSize: 16,
    fontFamily: Theme.fonts.bold, // Consistent typography
  },
  bold: {
    fontWeight: "bold",
  },
  red: {
    color: "#b72e07",
  },
  bottomBorder: {
    borderBottomWidth: 1,
  },
  SDContainer: {
    backgroundColor: Colors.purple,
    paddingHorizontal: 6,
    borderRadius: 100,
    marginRight: 4,
  },
});

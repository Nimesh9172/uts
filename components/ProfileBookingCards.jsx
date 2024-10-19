import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import { useNavigation } from "@react-navigation/native"; // Import useNavigation hook

import { Colors } from "../constants/Colors";
import { ProfileBookingCardsData, screenMapping } from "../constants/constants";
import { Theme } from "../constants/Theme";

const ProfileBookingCards = () => {
  const navigation = useNavigation(); // Get navigation object

  return (
    <View style={styles.mainContainer}>
      {ProfileBookingCardsData.map((item, index) => (
        <Pressable
          onPress={() => {
            const screenName = screenMapping[item.text.toLowerCase()];
            if (screenName) {
              navigation.navigate(screenName); // Navigate to corresponding screen
            }
          }}
          key={index}
          style={styles.itemsWrapper}
        >
          <Image
            source={item.img}
            style={{ width: item.width, height: item.height }}
          />
          <Text style={[Theme.interFont, styles.text]}>{item.text}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default ProfileBookingCards;

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: Colors.secondary100,
    paddingVertical: 5,
    flexDirection: "row",
    paddingHorizontal: 4,
    flexWrap: "wrap",
    rowGap: 5,
    justifyContent: "space-between",
    // alignItems:"center"
  },
  itemsWrapper: {
    width: "32%",
    backgroundColor: "#ffffff",
    alignItems: "center",
    // paddingVertical:2,
    elevation: 4,
  },

  text: {
    fontSize: 12,
    color: Colors.primary600,
    fontWeight: "semibold",
    marginTop: 2,
  },
});

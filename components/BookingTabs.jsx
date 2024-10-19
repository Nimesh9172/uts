import { useState } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import { BookingCardData } from "../constants/constants";
import { Colors } from "../constants/Colors";
import { Theme } from "../constants/Theme";

const BookingTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View style={styles.qlWrapper}>
      {BookingCardData.map((item, index) => (
        <Pressable
          android_ripple={{ color: Colors.secondary100 }}
          style={[styles.qlItems, activeIndex === index && styles.activeItem]}
          key={index}
          onPress={() => setActiveIndex(index)}
        >
          <Image style={styles.qlImg} source={item.img} />
          <Text style={[Theme.interFont, styles.qlText]}>{item.text}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default BookingTabs;

const styles = StyleSheet.create({
  qlWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: Colors.secondary100,
    borderTopWidth: 3,
  },
  qlItems: {
    flex: 1,
    alignItems: "center", // Center content inside each item
    padding: 5,
    gap: 2,
    backgroundColor: "#ffffff",
  },
  qlImg: {
    height: 40,
    width: 40,
  },
  qlText: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "400",
  },
  activeItem: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.primary400,
  },
});

import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { RadioButton } from "react-native-paper";

import { Gradients } from "../constants/Colors";
import { Colors } from "../constants/Colors";
import { Theme } from "../constants/Theme";
import Button from "./Button";

const BookingCard = () => {
  const [value, setValue] = useState(null);

  return (
    <View style={styles.mainContainer}>
      <LinearGradient
        start={[0, 0]}
        end={[1, 1]}
        colors={Gradients.primaryGradientArray}
      >
        <View style={styles.titleWrapper}>
          <Text style={[Theme.interFont, styles.title]}>NORMAL BOOKING</Text>
        </View>
      </LinearGradient>
      <RadioButton.Group
        onValueChange={(newValue) => setValue(newValue)}
        value={value}
      >
        <View style={styles.radioBtnContainer}>
          <View style={styles.radioBtnWrapper}>
            <RadioButton value="first" color="#F88749" />
            <Text style={styles.radioText}>Book & Travel (Paperless)</Text>
          </View>
          <View style={styles.radioBtnWrapper}>
            <RadioButton value="second" color="#F88749" />
            <Text style={styles.radioText}>Book & Print (Paper)</Text>
          </View>
        </View>
      </RadioButton.Group>
      <View style={styles.sourceContainer}>
        <View style={styles.sourceTextWrapper}>
          <Text>Depart from</Text>
          <Text style={styles.stnText}>STN</Text>
          <Text>Station Name</Text>
        </View>
        <Image
          source={require("../assets/images/transfer.png")}
          style={styles.transferImg}
        />
        <View style={styles.sourceTextWrapper}>
          <Text>Depart from</Text>
          <Text style={styles.stnText}>STN</Text>
          <Text>Station Name</Text>
        </View>
      </View>
      <View style={styles.btnWrapper}>
        <Button>Next Trains</Button>
        <Button>Get Fare</Button>
      </View>
    </View>
  );
};

export default BookingCard;

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: "center",
    margin: 10,
    borderRadius: 6,
    borderColor: "#ccc",
    borderWidth: 1,
    overflow: "hidden",
  },
  titleWrapper: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  title: {
    color: "#fff",
    fontSize: 15,
  },
  radioBtnContainer: {
    flexDirection: "row",
    columnGap: 10,
    padding: 6,
  },
  radioBtnWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  radioText: {
    fontSize: 12,
  },
  sourceContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: 8,
    marginBottom: 12,
    marginHorizontal: 15,
  },
  sourceTextWrapper: {
    flex: 1,
    alignItems: "center",
    borderBottomColor: Colors.primary500,
    padding: 5,
    borderBottomWidth: 2,
  },
  transferImg: {
    width: 30,
    height: 30,
  },
  stnText: {
    fontSize: 18,
  },
  btnWrapper: {
    flexDirection: "row",
    paddingBottom: 15,
    gap: 10,
    paddingHorizontal: 10,
  },
});

import { SafeAreaView, StyleSheet } from "react-native";
import Constants from "expo-constants";

const SafeAreaCard = ({ children }) => {
  return <SafeAreaView style={styles.rootContainer}>{children}</SafeAreaView>;
};

export default SafeAreaCard;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});

import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  FlatList,
} from "react-native";

import useStore from "../store/useStore";

import Feather from "@expo/vector-icons/Feather";

import HeaderBg from "../components/HeaderBg";
import SafeAreaCard from "../components/SafeAreaCard";
import BookedTicketsCard from "../components/BookedTicketsCard";

const ShowTicket = ({ navigation }) => {
  const { bookedTickets } = useStore();

  return (
    <SafeAreaCard>
      <HeaderBg>
        <View style={styles.wrapper}>
          <Pressable onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size={24} color="#ffffff" />
          </Pressable>
          <Text style={styles.headerText}>Show Ticket</Text>
        </View>
      </HeaderBg>

      <View style={styles.titleContainer}>
        <HeaderBg>
          <View style={styles.contentWrapper}>
            <Image
              style={styles.stImg}
              source={require("../assets/images/show_ticket.png")}
            />
            <Text style={styles.title}>SHOW TICKET</Text>
          </View>
        </HeaderBg>
      </View>

      <FlatList
        data={bookedTickets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <BookedTicketsCard data={item} />}
      />
    </SafeAreaCard>
  );
};

export default ShowTicket;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingVertical: 4,
  },
  headerText: {
    color: "#fff",
    fontSize: 17,
  },
  titleContainer: {
    marginHorizontal: 10,
    borderRadius: 6,
    overflow: "hidden",
    marginTop: 10,
    marginBottom: 10,
    elevation: 4,
  },
  contentWrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginLeft: 10,
  },
  stImg: {
    width: 35,
    height: 25,
  },
  title: {
    color: "#fff",
    fontSize: 15,
  },
});

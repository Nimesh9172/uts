import { useEffect } from "react";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./screens/Home";
import MainTicket from "./screens/MainTicket";
import ShowTicket from "./screens/ShowTicket";
import { View, Text } from "react-native";

import { encrypt } from "./utils/helpers";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded, error] = useFonts({
    "Inter-Black": require("./assets/fonts/InterVariable.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    } else if (error) {
      console.error(error); // Logs error for debugging
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  const data = "1696"+"46cb-ac63-5675d6e581d4"+"313012119500"+"cc_avenue"+"192.168.11.147"
  
  const encData = encrypt(data)

  print(data)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={Home}
          options={{ headerShown: false }} // Hides the header
        />
        <Stack.Screen
          name="MainTicketScreen"
          component={MainTicket}
          options={{ headerShown: false }} // Hides the header
        />
        <Stack.Screen
          name="ShowTicketScreen"
          component={ShowTicket}
          options={{ headerShown: false }} // Hides the header
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

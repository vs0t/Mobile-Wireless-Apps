import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import DestinaitionReviewScreen from "./screens/DestinationReviewScreen";
import Colors from "./constants/colors";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    squealer: require("./assets/fonts/Squealer.otf"),
    valkids: require("./assets/fonts/Valkids.ttf"),
    moglite: require("./assets/fonts/Mogilte.otf"),
    lemonmilklight: require("./assets/fonts/LEMONMILK-Light.otf"),
    lemonmilkbold: require("./assets/fonts/LEMONMILK-Bold.otf"),
    lemonmilkmeditalic: require("./assets/fonts/LEMONMILK-MediumItalic.otf"),
    mountain: require("./assets/fonts/Mountain.ttf"),
    poker: require("./assets/fonts/Poker.ttf"),
    canada: require("./assets/fonts/Canada.otf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  if (!fontsLoaded && !fontError) {
    return null;
  } else {
    return (
      <>
        <StatusBar style="dark" />
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
              headerStyle: {backgroundColor: Colors.primary500},
              headerTintColor: Colors.primary300,
              headerTitleStyle: {fontFamily: "valkids", fontSize: 28,},
              contentStyle: { backgroundColor: Colors.primary800},
            }}
          >
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                title: "Destination Locations",
              }}
            />
            <Stack.Screen 
            name="DestinationReviewScreen"
            component={DestinaitionReviewScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }

  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

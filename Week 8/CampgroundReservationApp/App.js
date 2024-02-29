import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen"
import Colors from './constants/colors';
import { useCallback } from 'react';
import HomeScreen from './screens/HomeScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    "squealer": require("./assets/fonts/Squealer.otf"),
    "valkids": require("./assets/fonts/Valkids.ttf"),
    "moglite": require("./assets/fonts/Mogilte.otf"),
    "lemonmilklight": require("./assets/fonts/LEMONMILK-Light.otf"),
    "lemonmilkbold": require("./assets/fonts/LEMONMILK-Bold.otf"),
    "lemonmilkmeditalic": require("./assets/fonts/LEMONMILK-MediumItalic.otf"),
    "mountain": require("./assets/fonts/Mountain.ttf"),
    "poker": require("./assets/fonts/Poker.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
  });

  let screen = <HomeScreen />;

  if (!fontsLoaded && !fontError){
    return null;
  } else {
    return (
      <>
      <StatusBar style='dark' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
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
    backgroundColor: Colors.accent500,
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BookmarksScreen from "./screens/BookmarksScreen";
import WorldNewsListingScreen from "./screens/WorldNewsListingsScreen";
import ListingDetailScreen from "./screens/ListingDetailScreen";
import SoccerListingsScreen from "./screens/SoccerNewsListingsScreen";
import UsNewsListingsScreen from "./screens/UsNewsListingsScreen";
import Colors from "./constants/colors";
import { Entypo } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
    initialRouteName="Listings"
    screenOptions={{
      headerStyle: {backgroundColor: Colors.primary500},
      headerTintColor: "white",
      headerTitleStyle: {
        fontFamily: "nolluqa",
        fontSize: 40,
        color: Colors.accent800,
      },
      sceneContainerStyle: {backgroundColor: Colors.primary300},
      drawerContentStyle: {backgroundColor: Colors.primary500},
      drawerInactiveTintColor: Colors.primary300,
      drawerActiveTintColor: Colors.accent300,
      drawerActiveBackgroundColor: Colors.primary800
    }}
    >
      <Drawer.Screen
        name="Listings"
        component={TabsNavigator}
        options={{
          title: "All News Listings",
          drawerLabel: "News Reports",
          drawerIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="BookmarkedListings"
        component={BookmarksScreen}
        options={{
          title: "Saved News Reports",
          drawerLabel: "Saved Reports",
          drawerIcon: ({ color, size }) => (
            <Entypo name="bookmarks" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="DrawerScreen"
          screenOptions={{
            headerTintColor: Colors.primary300,
            headerStyle: { backgroundColor: Colors.primary500 },
            contentStyle: { backgroundColor: "black" },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ListingDetail"
            component={ListingDetailScreen}
            options={{
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

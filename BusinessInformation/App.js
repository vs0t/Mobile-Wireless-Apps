import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Image, Linking } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.container}>
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/image0.jpeg")}
          />
        </View>
        <View style={styles.linkscontainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Evan Aarons-Wood</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text} onPress={() => Linking.openURL("mailto:evanaaronswood@gmail.com")}>evanaaronswood@gmail.com</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text} onPress={() => Linking.openURL("tel:+18432314126")}>(843) 231-4126</Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={styles.text} onPress={() => Linking.openURL("https://github.com/vs0t")}>My Github</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9CAF88",
    alignItems: "center",
    justifyContent: "center",
  },
  imagecontainer: {
    flex: 3,
    justifyContent: 'center', // Add this line
    alignItems: 'center', // Add this line
    // backgroundColor: "#0a3504",
  },
  image: {
    height: 450,
    width: 350,
    resizeMode: "contain", // Change this to 'contain' to avoid cropping
    alignSelf: 'center', // Add this line
  },
  linkscontainer: {
    flex: 2,
    justifyContent: "space-evenly", // Change this to space-evenly
    alignItems: "center",
    backgroundColor: "#0f4b07",
    borderWidth: 3,
    borderColor: 'black',
    width: "70%",
    marginBottom: 50,
  },
  textWrapper: {
    borderWidth: 1, // Set your desired border width
    borderColor: 'black', // Set your desired border color
    padding: 10, // Add padding to make it look better
    width: '80%', // Set width as per your design preference
    marginBottom: 10, // Add margin at the bottom
  },
  text: {
    fontSize: 15,
    textAlign: 'center', // Add this line to center text
  },
});
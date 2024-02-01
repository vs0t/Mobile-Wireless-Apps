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
    justifyContent: 'center', 
    alignItems: 'center', 
    // backgroundColor: "#0a3504",
  },
  image: {
    height: 450,
    width: 350,
    resizeMode: "contain", 
    alignSelf: 'center', 
  },
  linkscontainer: {
    flex: 2,
    justifyContent: "space-evenly", 
    alignItems: "center",
    backgroundColor: "#0f4b07",
    borderWidth: 3,
    borderColor: 'black',
    width: "70%",
    marginBottom: 50,
  },
  textWrapper: {
    borderWidth: 1, 
    borderColor: 'black', 
    padding: 10, 
    width: '80%', 
    marginBottom: 10, 
  },
  text: {
    fontSize: 15,
    textAlign: 'center', 
  },
});
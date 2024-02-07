import React, { useState } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Image, Linking, Button, ScrollView } from 'react-native';

// list to hold menu items for displaying
const menuItems = [
  { name: 'Asada Fries', image: require('./assets/images/menu/fries.jpg'), price: '$14.95' },
  { name: 'California Steak Burrito', image: require('./assets/images/menu/burrito.jpg'), price: '$15.95' },
  { name: 'Chicken Nachos', image: require('./assets/images/menu/nachos.jpg'), price: '$13.95' },
  { name: 'Quesadillas (Chicken)', image: require('./assets/images/menu/quesadilla.jpg'), price: '$11.95' },
  { name: 'Al Pastors Torta', image: require('./assets/images/menu/torta.jpg'), price: '$14.95' },
  // area to add more menu items 
];

export default function App() {
  // setting main loading page to home page
  const [currentPage, setCurrentPage] = useState('Home');

  const renderHomeScreen = () => (
    <>
      <View style={styles.imagecontainer}>
        {/* display restaurant image */}
        <Image
          style={styles.image}
          source={require("./assets/images/image0.jpg")}
        />
      </View>
      <View style={styles.linkscontainer}>
        <View style={styles.titleContainer}>
          {/* restaurant name */}
          <Text style={styles.titleText}>Tu Taco</Text>
        </View>
        {/* below holds the area that has clickable links to display seperate information about restaurant */}
        <View style={styles.textWrapper}>
          <Text style={styles.text} onPress={() => Linking.openURL("tel:+18432327157")}>Phone Number</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text} onPress={() => Linking.openURL("https://www.google.com/maps/dir/?api=1&destination=33.797489561365666,-79.00113487141209&travelmode=driving")}>Directions/Address</Text>
        </View>
        <View style={styles.textWrapper}>
          <Text style={styles.text} onPress={() => Linking.openURL("https://www.ubereats.com/store/tu-taco/VUgky3ALWqSaCKOPoljAhA?cid=2003851&ps=1&utm_campaign=CM2087627-affiliates-impactradius_1_-99_US-National_c_all_acq_cpa_en_Bing%20Rebates%20by%20Microsoft_click-zXz39fQiFxyPT5UQ-1Xv0QHKUkHwqUXRzVkMw80&utm_medium=affiliates&utm_source=affiliate-ir&utm_term=zXz39fQiFxyPT5UQ-1Xv0QHKUkHwqUXRzVkMw80")}>Website</Text>
        </View>
      </View>
      {/* button to display menu page */}
      <Button title="View Menu" onPress={() => setCurrentPage('Menu')} />
    </>
  );

  const renderMenuScreen = () => (
    <>
    {/* display the menu by pulling the map data and mapping it to a key and item for displaying */}
      <ScrollView contentContainerStyle={styles.menuContent}>
        {menuItems.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ScrollView>
      <Button title="Back to Home" onPress={() => setCurrentPage('Home')} />
    </>
  );

  // area for building the menu items, does it for all items on menu in the list
  const MenuItem = ({ item }) => (
    <View style={styles.menuItem}>
      <Image source={item.image} style={styles.menuItemImage} />
      <Text style={styles.menuItemText}>{item.name}</Text>
      <Text style={styles.menuItemText}>{item.price}</Text>
    </View>
  );

  return (
    // safeareaview to hold both pages to ensure all content shows on screen
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      {currentPage === 'Home' ? renderHomeScreen() : renderMenuScreen()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#863535",
    alignItems: "center",
    justifyContent: "center",
  },
  imagecontainer: {
    flex: 3,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  image: {
    height: 700,
    width: 400,
    resizeMode: "contain", 
    alignSelf: 'center', 
  },
  linkscontainer: {
    flex: 2,
    justifyContent: "space-evenly", 
    alignItems: "center",
    backgroundColor: "#d48427",
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
  menuContainer: {
    flex: 1,
    backgroundColor: "#b83131",
  },
  menuContent: {
    padding: 10,
  },
  menuItem: {
    backgroundColor: '#b8701f',
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    borderWidth: 3,
    borderColor: 'black',
    width: 280,
  },
  menuItemImage: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
    borderWidth: 1.5,
    borderColor: 'black',
  },
  menuItemText: {
    marginTop: 5,
    fontSize: 15,
  },
  titleContainer: {
    padding: 10,
    alignItems: 'center', 
    justifyContent: 'center', 
    width: '100%', 
  },
  titleText: {
    fontSize: 30, 
    fontWeight: 'bold', 
    color: '#FFFFFF', 
  },
});

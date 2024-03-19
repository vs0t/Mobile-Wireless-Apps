import { View, Text, StyleSheet, Image } from "react-native";
import { useState, useLayoutEffect } from "react";
import { LISTINGS } from "../data/dummy_data";
import BookmarkButton from "../components/BookmarkButton";
import Colors from "../constants/colors";
import colors from "../constants/colors";

function ListingDetailScreen(props) {
  const listingId = props.route.params.listingId;
  const selectedListing = LISTINGS.find((listing) => listing.id === listingId);

  const [pressed, setPressed] = useState(false);

  function headerButtonPressHandler() {
    setPressed(!pressed);
  }

  useLayoutEffect(() => {
    props.navigation.setOptions({
      title: "",
      headerRight: () => {
        return (
          <BookmarkButton
            pressed={pressed}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [props.navigation, headerButtonPressHandler]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: selectedListing.imageUrl }}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.price}>
          {selectedListing.price}
        </Text>
        <Text style={styles.space}>
          {selectedListing.bedrooms}
        </Text>

        <Text style={styles.address}>
          Written By: {selectedListing.address}
        </Text>

        <Text style={styles.year}>
            Agency: {selectedListing.yearBuilt}
        </Text>

        <Text style={styles.description}>
            {selectedListing.description}
        </Text>
      </View>
    </View>
  );
}
export default ListingDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  imageContainer: {
    marginVertical: 10,
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
  },
  infoContainer: {
    borderRadius: 7,
    backgroundColor: Colors.primary500o8,
    flex: 1,
    alignItems: "center",
  },
  price: {
    color: Colors.primary300,
    fontSize: 20,
    fontFamily: "playfairBold",
    paddingBottom: 5,
  },
  space: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "canada",
    paddingBottom: 5,
  },
  address: {
    color: Colors.primary300,
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  year: {
    color: Colors.primary300,
    fontSize: 25,
    fontFamily: "playfair",
    marginBottom: 30,
  },
  description: {
    color: Colors.primary300,
    width: "90%",
    textAlign: "justify",
    fontSize: 16,
    fontFamily: "playfair",
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: colors.primary30005,
    padding: 2
  }
});

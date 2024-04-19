import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { BookmarksContext } from "../store/context/bookmarks-context";
import { LISTINGS } from "../data/dummy_data";
import ListingItem from "../components/List/ListingItem";
import colors from "../constants/colors";
import List from "../components/List/List";
import { storeBookmarks } from "../util/http";

function BookmarksScreen() {
  const bookmarkedListingsCtx = useContext(BookmarksContext);
  const bookedmarkedListings = LISTINGS.filter((listingItem) => {
    return bookmarkedListingsCtx.ids.includes(listingItem.id);
  });

  async function saveBookmarksHandler() {
    try {
      await storeBookmarks(bookedmarkedListings);
      console.log("Bookmarks saved successfully!");
    } catch (error) {
      console.log("Error saving bookmarks:", error);
    }
  }

  if (bookedmarkedListings.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>No Saved Listings Detected...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <List items={bookedmarkedListings} />
      <TouchableOpacity style={styles.saveButton} onPress={saveBookmarksHandler}>
        <Text style={styles.saveButtonText}>Save Listings to DB</Text>
      </TouchableOpacity>
    </View>
  );
}

export default BookmarksScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    fontSize: 30,
    textAlign: "center",
    fontFamily: "valkids",
    fontWeight: "bold",
    color: colors.primary300,
    opacity: 0.6,
  },
  saveButton: {
    backgroundColor: colors.primary500,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
    alignSelf: "center",
  },
  saveButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
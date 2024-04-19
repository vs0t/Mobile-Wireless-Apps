import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../constants/colors";

function ListingItem(props) {
  const navigation = useNavigation();

  function selectedListingHandler() {
    navigation.navigate("ListingDetail", {
      listingId: props.id,
    });
  }

  return (
    <View
      style={[
        styles.itemContainer,
        { backgroundColor: props.listIndex % 2 == 0 ? "#ccc" : "#f1baba" },
      ]}
    >
      <Pressable onPress={selectedListingHandler}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
        </View>
        <View style={styles.infoContainer}>
          {/* title area */}
          <Text style={styles.price}>{props.price}</Text>
          {/* date area */}
          <Text style={styles.space}>{props.bedrooms}</Text>

          {/* <Text style={styles.address}>
            {props.address}, {props.city} {props.state} {props.zipCode}
          </Text> */}
        </View>
      </Pressable>
    </View>
  );
}

export default ListingItem;

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 5,
    paddingTop: 5,
    marginBottom: 10,
    borderRadius: 7,
  },
  button: {
    flex: 1,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    height: "100%",
    resizeMode: "cover",
    borderRadius: 7,
    paddingBottom: 1,
  },
  infoContainer: {
    flex: 1,
    alignItems: "center",
  },
  price: {
    fontSize: 25,
    fontFamily: "nolluqa",
    alignItems: "center",
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
    backgroundColor: colors.primary500o8,
  },
  space: {
    fontSize: 25,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
  address: {
    textAlign: "center",
    width: "100%",
    fontSize: 15,
    fontFamily: "playfair",
    paddingBottom: 5,
  },
});

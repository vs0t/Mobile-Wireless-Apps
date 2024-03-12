import { useState } from "react";
import { Pressable } from "react-native";
import Colors from "../constants/colors";
import ImageViewModal from "../modals/ImageViewModal";
import { StyleSheet } from "react-native";
import { View, Text, Image } from "react-native";


function DestinationItem(props){
    const [modalIsVisible, setModalIsVisible] = useState(false);

    function viewImageHandler(){
        setModalIsVisible(true)
    }
    function closeImageHandler(){
        setModalIsVisible(false)
    }

    return (
        <View
        style={[
            styles.itemContainer,
            {backgroundColor: props.listIndex % 2 === 0 ? "#ccc" : "#643636"}
        ]}
        >
          {/* button to contain the basic information, holds props from dummy-data, onlcick opens the imageviewmodal with the sleected items details */}
            <Pressable
            style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null,
            ]}
            android_ripple={{color: Colors.primary300}}
            onPress={viewImageHandler}
            >
                <View style={styles.rowContainer}>
                    <Image style={styles.image} source={{uri: props.imageUrl }}/>
                    <View style={styles.infoContainer}>
                        <Text style={styles.name}>{props.name}</Text>
                        <View style={styles.innerRowContainer}>
                            <Text style={styles.description}>Average Cost: ${props.price}</Text>
                            <Text style={styles.year}>Founded: {props.foundedYear}</Text>
                        </View>
                        <Text style={styles.rating}>Rating: {props.rating}</Text>
                    </View>
                </View>
            </Pressable>

            {/* opens the modal passing the buttons data */}
            <ImageViewModal 
            isVisible={modalIsVisible}
            imageUrl={props.imageUrl}
            description={props.description}
            onClose={closeImageHandler}
            />
        </View>
    );
}

export default DestinationItem;

const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: "#ccc",
      paddingHorizontal: 5,
      paddingTop: 3,
      marginBottom: 3,
      borderRadius: 7,
    },
    button: {
      flex: 1,
    },
    buttonPressed: {
      opacity: 0.5,
    },
    rowContainer: {
      height: 100,
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    image: {
      width: "25%",
      height: "100%",
      resizeMode: "contain",
      borderRadius: 15,
    },
    infoContainer: {
      width: "75%",
      paddingLeft: 20,
    },
    name: {
      fontWeight: "bold",
      textAlign: "left",
      fontSize: 20,
    },
    description: {
      width: "35%",
      fontSize: 14,
    },
    year: {
      fontSize: 14,
      fontWeight: "bold",
    },
    innerRowContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    rating: {
        fontSize: 13,
        fontStyle: "italic",
    },
  });  
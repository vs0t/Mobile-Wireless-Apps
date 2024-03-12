import { Modal, View, Button, Image, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";

function ImageViewModal(props) {
  return (
    <View style={styles.container}>
      <Modal
        visible={props.isVisible}
        animationType="slide"
        transparent={false}
      >
        <View style={styles.modalContainer}>
          <Image style={styles.image} source={{ uri: props.imageUrl }} />
          <Text style={styles.description}>{props.description}</Text>
          <Button title="Return to Destinations" onPress={props.onClose} />
        </View>
      </Modal>
    </View>
  );
}

export default ImageViewModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary800,
  },
  image: {
    width: "100%",
    height: "80%",
    resizeMode: "contain",
  },
  description: {
    fontFamily: "lemonmilkmeditalic",
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary300,
    backgroundColor: Colors.accent40050,
  },
});

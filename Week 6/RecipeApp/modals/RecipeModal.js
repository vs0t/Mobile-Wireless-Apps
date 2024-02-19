// RecipeModal.js
import React from "react";
import { Modal, View, Text, Button, StyleSheet } from "react-native";
import NavButton from "../components/NavButton";

function RecipeModal(props) {
  return (
    <Modal visible={props.visible} animationType="slide" transparent={true}>
      <View style={styles.modalCenteredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{props.title}</Text>
          <Text>{props.text}</Text>
          <NavButton onNext={props.onClose}>Return</NavButton>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  // Add more styles as needed
});

export default RecipeModal;

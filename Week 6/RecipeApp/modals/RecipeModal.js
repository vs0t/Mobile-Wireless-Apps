// RecipeModal.js
import React from 'react';
import { Modal, View, Text, Button, StyleSheet } from 'react-native';

const RecipeModal = ({ visible, onClose, recipe }) => {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalCenteredView}>
        <View style={styles.modalView}>
          {recipe && (
            <>
              <Text style={styles.modalTitle}>{recipe.title}</Text>
              <Text>{recipe.text}</Text>
              <Button title="Close" onPress={onClose} />
            </>
          )}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  modalTitle: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 20,
    fontWeight: 'bold',
  },
  // Add more styles as needed
});

export default RecipeModal;

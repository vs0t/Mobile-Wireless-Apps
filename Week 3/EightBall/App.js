import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Modal,
} from "react-native";

export default function App() {
  // State for modal visibility, initially not visible
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // State to hold the user's question
  const [userQuestion, setUserQuestion] = useState("");

  // State to hold the magic 8 ball's response
  const [magicAnswer, setMagicAnswer] = useState("");

  // Function to handle the magic answer request
  const handlePress = () => {
    // Array of possible magic 8 ball responses
    const responses = [
      "Yes",
      "No",
      "Maybe",
      "Hard to tell",
      "Absolutely",
      "Not in a million years",
      "Try again",
      "Without a doubt",
    ];
    // Selecting a random response from the array
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    setMagicAnswer(randomResponse); // Setting the magic answer state
    setModalIsVisible(true); // Showing the modal with the answer
  };

  // Function to close the modal and reset states
  const closeModal = () => {
    setModalIsVisible(false); // Hiding the modal
    setUserQuestion(""); // Resetting the user question
    setMagicAnswer(""); // Resetting the magic answer
  };

  return (
    <>
      <StatusBar style="auto" />
      {/* Main app container */}
      <SafeAreaView style={styles.container}>
        {/* Container for the 8 ball image */}
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/image0.png")}
          />
        </View>

        {/* Container for the app title */}
        <View>
          <Text style={styles.title}>8-Ball App</Text>
        </View>

        {/* Container for the user input */}
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter your question here!"
            onChangeText={setUserQuestion} // Updating user question state on change
            value={userQuestion} // Displaying current user question
            placeholderTextColor="#CCCCCC"
          />
        </View>

        {/* Container for the submit button */}
        <View>
          <Button
            title="Request Magic Answer"
            onPress={handlePress} // Handling press to show magic answer
          />
        </View>

        {/* Modal to display the magic answer */}
        <Modal visible={modalIsVisible} animationType="fade">
          <SafeAreaView style={styles.modalContainer}>
            {/* Displaying the user's question */}
            <Text style={styles.modalText}>Your Question: {userQuestion}</Text>
            {/* Displaying the magic 8 ball's response */}
            <Text style={styles.modalText}>
              Magic 8 Ball Says: {magicAnswer}
            </Text>
            {/* Button to close the modal */}
            <Button title="Close" onPress={closeModal} />
          </SafeAreaView>
        </Modal>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#3a1449",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 24,
    color: "white",
    marginTop: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
    borderColor: "white",
    width: "80%",
  },
  imagecontainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  image: {
    height: 400,
    width: 250,
    resizeMode: "contain",
    alignSelf: "center",
  },
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3a1449",
  },
  modalText: {
    fontSize: 20,
    color: "white",
    marginBottom: 20,
  },
});

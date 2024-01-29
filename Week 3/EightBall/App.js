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
  // state for modal visibility, initially not visible
  const [modalIsVisible, setModalIsVisible] = useState(false);

  // state to hold the user's question
  const [userQuestion, setUserQuestion] = useState("");

  // state to hold the magic 8 ball's response
  const [magicAnswer, setMagicAnswer] = useState("");

  // function to handle the magic answer request
  const handlePress = () => {
    // array of possible magic 8 ball responses
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
    // selecting a random response from the array
    const randomResponse =
      responses[Math.floor(Math.random() * responses.length)];
    // setting the magic answer state
    setMagicAnswer(randomResponse);
    // showing the modal with the answer
    setModalIsVisible(true);
  };

  // function to close the modal and reset states
  const closeModal = () => {
    // hiding the modal
    setModalIsVisible(false);
    // resetting the user question
    setUserQuestion("");
    // resetting the magic answer
    setMagicAnswer("");
  };

  return (
    <>
      <StatusBar style="auto" />
      {/* main app container */}
      <SafeAreaView style={styles.container}>
        {/* container for the 8 ball image */}
        <View style={styles.imagecontainer}>
          <Image
            style={styles.image}
            source={require("./assets/images/image0.png")}
          />
        </View>

        {/* container for the app title */}
        <View>
          <Text style={styles.title}>8-Ball App</Text>
        </View>

        {/* container for the user input */}
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter your question here!"
            // updating user question state on change
            onChangeText={setUserQuestion}
            // displaying current user question
            value={userQuestion} // Displaying current user question
            placeholderTextColor="#CCCCCC"
          />
        </View>

        {/* container for the submit button */}
        <View>
          <Button
            title="Request Magic Answer"
            // handling press to show magic answer
            onPress={handlePress}
          />
        </View>

        {/* modal to display the magic answer */}
        <Modal visible={modalIsVisible} animationType="fade">
          <SafeAreaView style={styles.modalContainer}>
            {/* displaying the user's question */}
            <Text style={styles.modalText}>Your Question: {userQuestion}</Text>

            {/* displaying the magic 8 ball's response */}
            <Text style={styles.modalText}>
              Magic 8 Ball Says: {magicAnswer}
            </Text>

            {/* button to close the modal */}
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

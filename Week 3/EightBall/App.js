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
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes definitely",
      "You may rely on it",
      "As I see it, yes",
      "Most likely",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy, try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Outlook not so good",
      "Very doubtful"
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
            value={userQuestion}
            placeholderTextColor="#CCCCCC"
          />
        </View>

        {/* container for the submit button */}
        <View style={styles.buttonContainer}>
          <Button 
          color="#9821c7"
          title="Request Magic Answer" onPress={handlePress} />
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
    fontSize: 40,
    color: "white",
    marginTop: 1,
    marginBottom: 175,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "white",
    borderColor: "white",
    width: 380,
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
    fontSize: 18,
    fontStyle: "italic",
    color: "white",
    marginBottom: 20,
  },
  buttonContainer: {
    marginTop: 20, 
    width: "40%", 
    alignSelf: "center", 
    color: "#802ac7"
  },
});

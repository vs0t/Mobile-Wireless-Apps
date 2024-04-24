import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { LISTINGS } from "../data/dummy_data";
import Listing from "../models/listing";

function AddListingScreen() {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [author, setAuthor] = useState("");
  const [agency, setAgency] = useState("");
  const [agencyUrl, setAgencyUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleAddListing = () => {
    // Perform form validation
    if (
      !title ||
      !date ||
      !author ||
      !agency ||
      !agencyUrl ||
      !imageUrl ||
      !description
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    // Validate image URL
    const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!urlRegex.test(imageUrl)) {
      alert("Please enter a valid image URL.");
      return;
    }

    // Create a new Listing object
    const newListing = new Listing(
      LISTINGS.length + 1,
      category,
      title,
      date,
      0, // Set a default value for bathrooms
      0, // Set a default value for squareFeet
      agency,
      author,
      "", // Set a default value for city
      "", // Set a default value for state
      "", // Set a default value for zip
      imageUrl,
      description,
      agencyUrl,
    );

    // Add the new listing to the LISTINGS array
    LISTINGS.push(newListing);

    // Clear the form fields
    setTitle("");
    setDate("");
    setAuthor("");
    setAgency("");
    setAgencyUrl("");
    setImageUrl("");
    setDescription("");
    setCategory("Programming");

    alert("Listing added successfully!");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Date</Text>
      <TextInput style={styles.input} value={date} onChangeText={setDate} />

      <Text style={styles.label}>Author</Text>
      <TextInput style={styles.input} value={author} onChangeText={setAuthor} />

      <Text style={styles.label}>Agency</Text>
      <TextInput style={styles.input} value={agency} onChangeText={setAgency} />

      <Text style={styles.label}>Agency URL</Text>
      <TextInput
        style={styles.input}
        value={agencyUrl}
        onChangeText={setAgencyUrl}
      />

      <Text style={styles.label}>Image URL</Text>
      <TextInput
        style={styles.input}
        value={imageUrl}
        onChangeText={setImageUrl}
      />

      <Text style={styles.label}>Description</Text>
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        value={description}
        onChangeText={setDescription}
        multiline
      />

      <Text style={styles.label}>Category</Text>
      <Picker
        style={styles.picker}
        selectedValue={category}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Programming" value="Programming" />
        <Picker.Item label="OSINT" value="OSINT" />
        <Picker.Item label="Soccer" value="Soccer" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={handleAddListing}>
        <Text style={styles.buttonText}>Add Listing</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  contentContainer: {
    padding: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "white",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    alignSelf: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  // Add a new style for the Picker component
    picker: {
        height: 40,
        borderWidth: 1,
        borderColor: "gray",
        marginBottom: 16,
        backgroundColor: "white",
    },
});

export default AddListingScreen;

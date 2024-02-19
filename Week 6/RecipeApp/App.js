import React, { useState } from 'react';
import { StatusBar, SafeAreaView, StyleSheet, Text, View, Button, FlatList, TextInput, Modal, ScrollView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/HomeScreen';
import RecipeScreen from './screens/RecipeScreen';
import AddRecipe from './screens/AddRecipe';
import Colors from './constants/colors';
import { useFonts } from 'expo-font';

export default function App() {
  // set up fonts
  const [fontsLoaded] = useFonts({
    "squealer": require("./assets/fonts/Squealer.otf"),
    "button": require("./assets/fonts/Papernotes Bold.ttf")
  })

  // set state forcurrent screen
  const [currentScreen, setCurrentScreen] = useState("home");
  const [currentID, setCurrentID] = useState(3);
  const [currentRecipe, setCurrentRecipe] = useState([
    {
      id: 1,
      title: "Spaghetti",
      text: "1. Pasta\n2. Sauce\n3. Ground Beef\n4. Oregano, Salt, Pepper",
    },
    {
      id: 2,
      title: "Southern Style Ham Sandwhich",
      text: "1. Wheat Bread\n2. Ham\n3. Mayo\n4. Mustard",
    },
  ]);

  function recipeScreenHandler() {
    setCurrentScreen("recipe");
  }

  function homeScreenHandler() {
    setCurrentScreen("home");
  }

  function addScreenHandler() {
    setCurrentScreen("add");
  }
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipe((currentRecipe) => {
      return [...currentRecipe, {id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    recipeScreenHandler();
  }

  function deleteRecipeHandler(id) {
    setCurrentRecipe((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    })
    
    // recipeScreenHandler();
  }

  function viewRecipeHandler(recipeId) {
    const recipeToView = currentRecipe.find(recipe => recipe.id === recipeId);
    setSelectedRecipe(recipeToView);
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
    setSelectedRecipe(null);
  }

  // determine what screen to be on
  let screen = <HomeScreen onNext={recipeScreenHandler}/>;

  if (currentScreen === "recipe"){
    screen = <RecipeScreen 
    onHome={homeScreenHandler} 
    onAdd={addScreenHandler}
    currentRecipe={currentRecipe}
    onDelete={deleteRecipeHandler}
    // onClose={closeModal}
    />
  } 
  if (currentScreen === "add"){
    screen = <AddRecipe 
    onHome={homeScreenHandler} 
    onRecipe={recipeScreenHandler} 
    onAdd={addRecipeHandler} 
    onDelete={deleteRecipeHandler} 
    onView={viewRecipeHandler} 
    // onClose={closeModal}
    currentRecipe={currentRecipe}
    />
  }

  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaProvider style={styles.container}>{screen}</SafeAreaProvider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.accent500,
    alignItems: 'center',
    justifyContent: 'center'
  },
});
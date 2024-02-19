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
  // recipe list
  const [currentRecipe, setCurrentRecipe] = useState([
    {
      id: 1,
      title: "Southern Style Ham Sandwhich",
      text: "1. Wheat Bread\n2. Ham\n3. Mayo\n4. Mustard",
    },
    {
      id: 2,
      title: "Classic Chicken Salad",
      text: "Ingredients:\n- 2 cups shredded chicken\n- 1/2 cup diced celery\n- 1/2 cup mayonnaise\n- 1 tablespoon lemon juice\n- Salt and pepper to taste\n\nInstructions:\n1. In a mixing bowl, combine the shredded chicken and diced celery.\n2. Add the mayonnaise and lemon juice to the mixture.\n3. Season with salt and pepper.\n4. Stir until all ingredients are well combined.\n5. Refrigerate for at least 30 minutes before serving to allow flavors to meld."
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
  // function for adding a recipe to the list
  function addRecipeHandler(enteredRecipeTitle, enteredRecipeText) {
    setCurrentRecipe((currentRecipe) => {
      return [...currentRecipe, {id: currentID, title: enteredRecipeTitle, text: enteredRecipeText },
      ];
    });
    setCurrentID(currentID + 1);
    // re open recipe screen to simulate the record saving
    recipeScreenHandler();
  }
// function for deleting recipe
  function deleteRecipeHandler(id) {
    setCurrentRecipe((currentRecipes) => {
      return currentRecipes.filter((item) => item.id !== id);
    })
    
    // recipeScreenHandler();
  }

  // function for viewing recipe
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
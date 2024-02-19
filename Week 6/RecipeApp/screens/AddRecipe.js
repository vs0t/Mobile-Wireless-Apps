import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from '../constants/colors';
import NavButton from "../components/NavButton";
import { useState } from "react";
import { useFonts } from 'expo-font';
import Title from "../components/Title";




function AddRecipe(props) {
    // set safe area screen boundaries
    const insets = useSafeAreaInsets();
    // load fonts
    const [fontsLoaded] = useFonts({
        "squealer": require("../assets/fonts/Squealer.otf"),
        "button": require("../assets/fonts/Papernotes Bold.ttf")
      })

    const [recipeTitle, setRecipeTitle] = useState("");
    const [recipeText, setRecipeText] = useState("");

    // function to add new recipe to list
    function addRecipeHandler() {
        props.onAdd(recipeTitle, recipeText);
        props.onRecipe();
    }
    return (
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top,
                // paddingBottom: insets.bottom,
                // paddingLeft: insets.left,
                // paddingRight: insets.right,
            }
        ]}>
            <View style={styles.titleArea}>
                {/* <Text style={styles.title}>Add New Recipe</Text> */}
                <Title>Add New Recipe</Title>
            </View>

            <View>
                {/* area to hold input information */}
                <ScrollView>
                    <View style={styles.input}>
                        <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter Recipe Name Here"
                        onChangeText={setRecipeTitle}
                        />
                        <TextInput 
                        style={styles.textInput} 
                        placeholder="Enter Recipe Ingredients Here"
                        onChangeText={setRecipeText}
                        textAlignVertical="top"
                        multiline={true}
                        numberOfLines={20}
                        />
                    </View>
                    {/* buttons for saving or canceling */}
                <View style={styles.navButton}>
                    <NavButton onNext={addRecipeHandler}>Submit</NavButton>
                    <NavButton onNext={props.onRecipe}>Cancel</NavButton>
                </View>
                </ScrollView>
            </View>
            

        </View>
    )
}

export default AddRecipe;

const styles = StyleSheet.create({
    // rootContainer: {
    //     flex: 1,
    //     alignItems: 'center',
    //     justifyContent: 'center',
    // },
    title: {
        fontSize: 24, 
        fontWeight: 'bold', 
        // paddingVertical: 10,  
        alignItems: 'center',  
        fontFamily: "squealer",
    },
    titleArea: {
        paddingTop: 150,
        justifyContent: 'center',
    },
    input: {
        width: '100%',
        marginTop: 50,
        marginBottom: 20, 
    },
    textInput: {
        borderWidth: 1, 
        borderColor: '#cccccc', 
        borderRadius: 5, // Rounds the corners of the input boxes
        padding: 10, 
        marginBottom: 10, 
        color: "#750808"
    },
    navButton: {
        flexDirection: 'row', 
        justifyContent: 'space-around',
        alignItems: 'center', 
        width: '80%', 
    },
});

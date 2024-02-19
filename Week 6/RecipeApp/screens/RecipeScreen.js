import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { useState } from "react";
import RecipeItem from "../components/RecipeItems";
import Colors from '../constants/colors';
import RecipeModal from "../modals/RecipeModal";





function HomeScreen(props) {
    // set safe area screen boundaries
    const insets = useSafeAreaInsets();
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [modalRecipeTitle, setmodalRecipeTitle] = useState("");
    const [modalRecipeText, setmodalRecipeText] = useState("");

    function recipeViewHandler(title, text){
        setmodalRecipeTitle(title);
        setmodalRecipeText(text);
        setModalIsVisible(true);
    }

    function closeRecipeViewHandler(){
        setModalIsVisible(false);
    }
    // function recipeViewHandler(title, text){
    //     setModalNoteTitle(title),
    //     setModalNoteText(text)
    //   }
    // const [currentRecipe, setCurrentRecipe] = useState([
    //     {
    //       id: 1,
    //       title: "Spaghetti",
    //       text: "1. Pasta\n2. Sauce\n3. Ground Beef\n4. Oregano, Salt, Pepper",
    //     },
    //     {
    //       id: 2,
    //       title: "Southern Style Ham Sandwhich",
    //       text: "1. Wheat Bread\n2. Ham\n3. Mayo\n4. Mustard",
    //     },
    //   ]);
    return (
        <View style={[
            styles.rootContainer,
            {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                paddingLeft: insets.left,
                paddingRight: insets.right,
            }
        ]}>
            <View>
                <Title>Recipe List</Title>
            </View>

            <View>
                <FlatList
                data = {props.currentRecipe}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
                alwaysBounceVertical={false}
                renderItem={(itemData) => {
                    return (
                        <RecipeItem
                        id={itemData.item.id}
                        title={itemData.item.title}
                        onView={recipeViewHandler.bind(this, itemData.item.title, itemData.item.text)}
                        onDelete={props.onDelete.bind(this, itemData.item.id)}
                        />
                    );
                }}
                />
            </View>

            <View style={styles.buttonContainer}>
                <NavButton onNext={props.onHome}>Home</NavButton>
                <NavButton onNext={props.onAdd}>Add Recipe</NavButton>
            </View>

            <RecipeModal
                visible={modalIsVisible}
                title={modalRecipeTitle}
                text={modalRecipeText}
                onClose={closeRecipeViewHandler}
            />


        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'space-between',
    },
    titleContainer: {
        // flex: 1,
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 750,
        position: 'absolute'
    }
})
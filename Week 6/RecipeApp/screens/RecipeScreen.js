import { View, StyleSheet, Text, Image, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import { useState } from "react";
import RecipeItem from "../components/RecipeItems";




function HomeScreen(props) {
    // set safe area screen boundaries
    const insets = useSafeAreaInsets();
    function recipeViewHandler(title, text){
        setModalNoteTitle(title),
        setModalNoteText(text)
      }
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
                data = {currentRecipe}

                keyExtractor={(item) => item.id}

                alwaysBounceVertical={false}
                showsVerticalScrollIndicator={false}
                renderItem={(itemData) => {
                    return(
                        <RecipeItem
                            title={itemData.item.title}
                            // text={itemData.item.text}
                            onView={recipeViewHandler}
                            onDelete={props.onDel.bind(this, itemData.item.id)}
                        />
                    );
                }}
                />
            </View>

            <View style={styles.buttonContainer}>
                <NavButton onPress={props.onHome}>Home</NavButton>
                <NavButton onPress={props.onAdd}>Add Recipe</NavButton>
            </View>


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
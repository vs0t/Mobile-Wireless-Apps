import Colors from "../constants/colors";
import { View, StyleSheet, Text, Image, FlatList, Button } from "react-native";




function RecipeItem(props) {
    // display the actual recipies on the page
    return(
        <View style={styles.itemContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={styles.textContainer}>
                {/* <Text style={styles.ingredients}>{props.text}</Text> */}
                <Button title="View" onPress={props.onView} />
                <Button title="Delete" onPress={props.onDelete} />
            </View>
        </View>
    );
}

export default RecipeItem;

styles = StyleSheet.create({
    itemContainer: {
        marginBottom: 20,
        // flexDirection: 'row'
    },
    titleContainer: {
        backgroundColor: Colors.accent800,
        borderWidth: 3,
        borderRadius: 5,
        padding: 5
    },
    title: {
        fontFamily: "squealer",
        fontSize: 30,
        textAlign: 'center'
    },
    textContainer: {
        backgroundColor: Colors.accent300,
        borderWidth: 2,
        borderRadius: 5,
        // paddingTop: 8
    },
    ingredients: {

    }
})
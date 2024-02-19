import { View, StyleSheet, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import NavButton from "../components/NavButton";
import Colors from '../constants/colors';
import RecipeModal from "../modals/RecipeModal";



function HomeScreen(props) {
    // set safe area screen boundaries
    const insets = useSafeAreaInsets();
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
                <Title>Recipe App</Title>
            </View>

            <View>
                <Image 
                style={styles.image} 
                source={require("../assets/images/image0.jpg")}
                />
            </View>

            <View style={styles.buttonContainer}>
                <NavButton onNext={props.onNext}>View Recipes</NavButton>
            </View>

            


        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    imageContainer: {
        flex: 4,

    },
    image: {
        resizeMode: 'cover',
        height: "50%",
        width: 350,
        marginTop: 90
    },
    buttonContainer: {
        flex: 1,
        paddingTop: 150,
    }
})
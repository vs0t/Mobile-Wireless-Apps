import { Pressable, View, StyleSheet, Text } from "react-native";
import Colors from "../constants/colors";


function NavButton(props){
    return(
        <Pressable
        android_ripple={{color: "grey"}}
        onPress={props.onNext}>
            <View style={styles.buttonContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{props.children}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default NavButton;

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 300,
        width: 'auto',
        margin: 10,
        backgroundColor: Colors.accent800
    },
    textContainer: {

    },
    text: {
        padding: 8,
        fontSize: 20,
        textAlign: 'center',
        color: Colors.primary500,
        fontFamily: "button"
    }
})
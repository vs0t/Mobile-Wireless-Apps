import { Text, StyleSheet } from "react-native";
import Colors from "../constants/colors";


function Title(props){
    return <Text style={styles.title}>{props.children}</Text>
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 70,
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: "squealer",
    }
})
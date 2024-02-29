import {
  Pressable,
  View,
  StyleSheet,
  Text,
  useWindowDimensions,
} from "react-native";
import Colors from "../constants/colors";

function NavButton(props) {
  const { width, height } = useWindowDimensions();
  return (
    <Pressable
      android_ripple={{ color: "grey" }}
      onPress={props.onPress}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, { fontSize: width * 0.13 }]}>
            {props.children}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

export default NavButton;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 300,
    margin: 10,
    backgroundColor: Colors.primary300,
    width: 1000,
    maxWidth: "70%",
  },
  pressedItem: {
    opacity: 0.3,
  },
  text: {
    padding: 8,
    // fontSize: 25,
    textAlign: "center",
    color: Colors.accent500,
    fontFamily: "poker"
  },
});

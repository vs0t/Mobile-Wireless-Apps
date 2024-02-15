import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


function AddRecipe(props) {
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
                <Text>Hello im the add screen</Text>
            </View>
            

        </View>
    )
}

export default AddRecipe;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        alignItems: 'center',
    }
})
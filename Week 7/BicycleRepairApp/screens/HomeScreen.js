import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import Colors from "../constants/colors";

function HomeScreen(props) {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.rootContainer,
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        },
      ]}
    >
      <View style={styles.titleContainer}>
        <Title>Bicycle Repair Center</Title>
      </View>

      <ScrollView style={styles.scrollContainer}>
        <View style={styles.radioContainer}>
          <Text style={styles.radioHeader}>Service Times</Text>
          <RadioGroup 
            radioButtons={props.repairTimeRadioButtons}
            onPress={props.setRepairTimeId}
            selectedId={props.repairTimeId}
            layout="row"
            containerStyle={styles.radioGroup}
            labelStyle={styles.radioGroupLabels}
            />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
    },
    radioHeader: {
      fontFamily: "lemonmilkbold",
      fontSize: 25,
      color: Colors.primary800
    },
    titleContainer: {
      paddingHorizontal: 30,
      marginBottom: 10,
      borderWidth: 2,
      borderRadius: 5,
      borderColor: Colors.primary300,
      paddingVertical: 5,

    },
    scrollContainer: {
      flex: 1
    },
    radioContainer: {
      justifyContent: "center",
      alignItems: "center"
    },
    radioGroup: {
      paddingBottom: 20
    },
    radioGroupLabels: {
      fontFamily: "lemonmilkmeditalic",
      fontSize: 14,
      color: Colors.primary800
    }
});
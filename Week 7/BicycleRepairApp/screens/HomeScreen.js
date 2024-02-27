import { View, Text, ScrollView, StyleSheet, Switch } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Title from "../components/Title";
import { RadioGroup } from "react-native-radio-buttons-group";
import Colors from "../constants/colors";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import NavButton from "../components/NavButton";

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
        <View style={styles.rowContainer}>
          <View style={styles.checkBoxContainer}>
            <Text style={styles.checkBoxHeader}>Service Options</Text>
            <View style={styles.checkBoxSubContainer}>
              {props.services.map((item) => {
                return <BouncyCheckbox 
                key={item.id}
                text={item.name}
                onPress={props.setServicesOptions.bind(this, item.id)}
                textStyle={{
                  textDecorationLine: "none",
                  color: Colors.accent800,
                  fontFamily: "lemonmilkmeditalic",
                  fontSize: 14,
                }}
                innerIconStyle={{
                  borderRadius: 0,
                  borderColor: Colors.primary500,
                }}
                iconStyle={{
                  borderRadius: 0,

                }}
                fillColor={Colors.primary500}
                style={{
                  padding: 2,
                }}
                />;
              })}
            </View>
          </View>
        </View>
        <View style={styles.rowContainer}>
              <View style={styles.addonContainer}>
                  <View style={styles.addonSubContainer}>
                      <Text style={styles.addOnLabel}>News Letter Signup</Text>
                      <Switch 
                      onValueChange={props.setNewsletterSign}
                      value={props.newsletter}
                      thumbColor={
                        props.newsletter ? Colors.accent800 : Colors.primary800
                      }
                      trackColor={{false: Colors.primary300, true: Colors.accent800}}
                      />
                  </View>
                  <View style={styles.addonSubContainer}>
                      <Text style={styles.addOnLabel}>Rental Membership Signup</Text>
                      <Switch 
                      onValueChange={props.setRentalSign}
                      value={props.rentalMembership}
                      thumbColor={
                        props.rentalMembership ? Colors.accent800 : Colors.primary800
                      }
                      trackColor={{false: Colors.primary300, true: Colors.accent800}}
                      />
                  </View>
              </View>
        </View>
        <View style={styles.buttonContainer}>
            <NavButton onPress={props.onNext}>Submit Repair Ticket</NavButton>
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
    color: Colors.primary800,
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
    flex: 1,
  },
  radioContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  radioGroup: {
    paddingBottom: 20,
  },
  radioGroupLabels: {
    fontFamily: "lemonmilkmeditalic",
    fontSize: 14,
    color: Colors.accent800,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    paddingBottom: 20,
  },
  checkBoxContainer: {

  },
  checkBoxHeader: {
    fontFamily: "lemonmilkbold",
    fontSize: 25,
  },
  checkBoxSubContainer: {
    padding: 2,
  },
  addonContainer: {
    flexDirection: "row",
  },
  addonSubContainer: {
    // padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  addOnLabel: {
    fontSize: 12.5,
    fontFamily: "lemonmilkbold",
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    color: Colors.accent800,
  },
  buttonContainer: {
    alignItems: "center",
  },
});

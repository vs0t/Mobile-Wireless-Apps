import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
// import { LinearGradient } from "react-native-linear-gradient";
// import { LinearGradient } from "expo-linear-gradient"
import { LinearGradient } from "expo-linear-gradient";
function OrderReviewScreen(props) {
  const insets = useSafeAreaInsets();

  return (
    // begin of linear gradient
    <LinearGradient
      colors={[Colors.accent500, Colors.accent800, Colors.accent500]}
      style={styles.rootContainer}
    >
      <View
        style={[
          styles.rootContainer,
          {
            paddingTop: insets.top,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
            // flex: 1,
          },
        ]}
      >
        <View style={styles.titleContainer}>
          <Title>Repair Ticket Summary</Title>
        </View>

        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>Your Ticket Has Been Placed!</Text>
        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.time}>Service Time:</Text>
          {/* display selected option from radio buttons */}
          <Text style={styles.subTime}>{props.times}</Text>
          <Text style={styles.time}>Services Requested:</Text>
          {/* display list of items selected from checkbox */}
          {props.service.map((item) => {
            if (item.value) {
              return (
                <Text key={item.id} style={styles.subTime}>
                  {item.name}
                </Text>
              );
            }
          })}
          <Text style={styles.time}>Joined Newsletter?</Text>
          {/* display selected switch option for both, using dif propeties for each */}
          <Text style={styles.subTime}>{props.news ? "Yes" : "No"}</Text>
          <Text style={styles.time}>Joined Rental Membership?</Text>
          <Text style={styles.subTime}>{props.rentalMem ? "Yes" : "No"}</Text>
        </View>

        <View style={styles.subTitleContainer}>
          {/* area to hold calculations, first is for subtotal, second calculates tax, and the final calculates total cost */}
          <Text style={styles.subSubTime}>
            Subtotal: ${props.price.toFixed(2)}
          </Text>
          <Text style={styles.subSubTime}>
            Sales Tax: ${(props.price * 0.06).toFixed(2)}{" "}
          </Text>
          <Text style={styles.subSubTime}>
            Total: ${(props.price + props.price * 0.06).toFixed(2)}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <NavButton onPress={props.onNext}>Return Home</NavButton>
        </View>
      </View>
    </LinearGradient>
  );
}

export default OrderReviewScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  titleContainer: {
    marginBottom: 10,
    marginHorizontal: 10,
    paddingVertical: 3,
    paddingHorizontal: 25,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary300,
  },
  subTitleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  subTitle: {
    fontSize: 22,
    textAlign: "center",
    fontFamily: "lemonmilklight",
    color: Colors.primary800,
  },
  time: {
    fontSize: 17.5,
    fontFamily: "lemonmilkmeditalic",
  },
  subTime: {
    textAlign: "center",
    fontFamily: "lemonmilkbold",
    padding: 5,
    color: Colors.primary500,
    fontSize: 15,
  },
  subSubTime: {
    textAlign: "center",
    fontFamily: "lemonmilkbold",
    padding: 5,
    color: Colors.primary500,
    fontSize: 20,
  },
  timeContainer: {
    marginVertical: 10,
  },
  gradient: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

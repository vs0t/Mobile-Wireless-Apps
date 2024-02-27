import { StyleSheet, View, Text } from "react-native";
import Title from "../components/Title";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Colors from "../constants/colors";
import NavButton from "../components/NavButton";
import LinearGradient from "react-native-linear-gradient";

function OrderReviewScreen(props) {
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
        <Title>Repair Ticket Summary</Title>
      </View>

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}>Your Ticket Has Been Placed!</Text>
      </View>

      <View style={styles.timeContainer}>
        <Text style={styles.time}>Service Time:</Text>
        <Text style={styles.subTime}>{props.times}</Text>
        <Text style={styles.time}>Services Requested:</Text>
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
        <Text style={styles.subTime}>{props.news ? "Yes" : "No"}</Text>
        <Text style={styles.time}>Joined Rental Membership?</Text>
        <Text style={styles.subTime}>{props.rentalMem ? "Yes" : "No"}</Text>
      </View>

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTime}>Subtotal: ${props.price.toFixed(2)}</Text>
        <Text style={styles.subTime}>
          Sales Tax: ${(props.price * 0.06).toFixed(2)}{" "}
        </Text>
        <Text style={styles.subTime}>
          Total: ${(props.price + props.price * 0.06).toFixed(2)}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <NavButton onPress={props.onNext}>Return Home</NavButton>
      </View>
    </View>
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
    paddingHorizontal: 10,
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
  },
  time: {
    fontSize: 20,
  },
  subTime: {
    textAlign: "center",
  },
  timeContainer: {
    marginVertical: 10,
  },
  gradient: {
    flex: 1,
  },
});

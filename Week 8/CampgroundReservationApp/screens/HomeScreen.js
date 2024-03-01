import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  Pressable,
  Platform,
  Modal,
  useWindowDimensions,
  Button,
} from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import NavButton from "../components/NavButton";
import WheelPicker from "react-native-wheely";

function HomeScreen() {
  // use safe areas insets
  const insets = useSafeAreaInsets();
  //   set constants for using check in
  const [checkIn, setCheckIn] = useState(new Date());
  const [showCheckIn, setShowCheckIn] = useState(false);

  function showCheckInPicker() {
    setShowCheckIn(true);
  }

  function hideCheckInPicker() {
    setShowCheckIn(false);
  }

  function onChangeCheckIn(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckInPicker(true);
    }
    setCheckIn(currentDate);
  }
  //   set constants for using check out
  const [checkOut, setCheckOut] = useState(new Date());
  const [showCheckOut, setShowCheckOut] = useState(false);

  function showCheckOutPicker() {
    setShowCheckOut(true);
  }

  function hideCheckOutPicker() {
    setShowCheckOut(false);
  }

  function onChangeCheckOut(event, selectedDate) {
    const currentDate = selectedDate;
    if (Platform.OS === "android") {
      hideCheckOutPicker(true);
    }
    setCheckOut(currentDate);
  }

  //   consts for the pressable for selecting number of guests, const to hold the options
  // for the dropdown, and costs for assigning the value
  const guestCounts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [numGuests, setNumGuests] = useState(0);
  const [showNumGuests, setShowNumGuests] = useState(false);

  // function for picking number of guests
  function showNumGuestsPicker() {
    setShowNumGuests(true);
  }

  //   function to hide the pressable window
  function hideNumGuestsPicker() {
    setShowNumGuests(false);
  }

  //   function for on change of the guests
  function onChangeNumGuests(index) {
    setNumGuests(index);
  }

  //   consts for the pressable for selecting number of camps, const to hold the options
  // for the dropdown, and costs for assigning the value
  const campCounts = [1, 2, 3, 4, 5];
  const [numCamp, setNumCamp] = useState(0);
  const [showNumCamp, setShowNumCamp] = useState(false);

  // function for picking number of camps
  function showNumCampPicker() {
    setShowNumCamp(true);
  }

  //   function to hide the pressable window
  function hideNumCampPicker() {
    setShowNumCamp(false);
  }

  //   function for on change of the camps
  function onChangeNumCamp(index) {
    setNumCamp(index);
  }

//   set results 
  const [results, setResults] = useState("");

//   function to grab and display selected options below
  function onReserveHandler(){
    let res = `Check In: \t\t${checkIn.toDateString()}\n`
    res = res + `Check Out: \t\t${checkOut.toDateString()}\n`
    res = res + `Number of Guests: \t\t${guestCounts[numGuests]}\n`
    res = res + `Number of Campsites \t\t${campCounts[numCamp]}\n`
    setResults(res);
  };

  //   set width and height based on users screen size
  const { width, height } = useWindowDimensions();

  //   set label and text size according to dimensions of user
  const dateLabelFlex = {
    fontSize: width * 0.04,
  };

  const dateTextFlex = {
    fontSize: width * 0.05,
  };

  return (
    // put all into the image background
    <ImageBackground
      source={require("../assets/images/camping.jpg")}
      resizeMode="cover"
      style={styles.rootContainer}
      imageStyle={styles.backgroundImage}
    >
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
        <ScrollView style={styles.scrollContainer}>
          {/* title of campground app */}
          <View style={styles.titleContainer}>
            <Title>Campground Reservation</Title>
          </View>
          {/* view to hold both date time pickers */}
          <View style={styles.rowContainer}>
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check In:</Text>
              {/* opens the datetimepicker for checkin */}
              <Pressable onPress={showCheckInPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkIn.toDateString()}
                </Text>
              </Pressable>
            </View>
            {/* area for selecting check out times */}
            <View style={styles.dateContainer}>
              <Text style={[styles.dateLabel, dateLabelFlex]}>Check Out:</Text>
              {/* pressable for opening the select datetimepicker */}
              <Pressable onPress={showCheckOutPicker}>
                <Text style={[styles.dateText, dateTextFlex]}>
                  {checkOut.toDateString()}
                </Text>
              </Pressable>
            </View>
          </View>

          <View>
            {/* display androids date time */}
            {showCheckIn && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckInAndroid"
                value={checkIn}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckIn}
              />
            )}
            {/* display IOS date time */}
            {showCheckIn && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckInIOS"
                      value={checkIn}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckIn}
                    />
                    <NavButton title="confirm" onPress={hideCheckInPicker} />
                  </View>
                </View>
              </Modal>
            )}
            {showCheckOut && Platform.OS === "android" && (
              <DateTimePicker
                testID="dateTimePickerCheckOutAndroid"
                value={checkOut}
                mode={"date"}
                display="spinner"
                onChange={onChangeCheckOut}
              />
            )}
            {/* display IOS date time */}
            {showCheckOut && Platform.OS === "ios" && (
              <Modal
                animationType="slide"
                transparent={true}
                supportedOrientations={["portrait", "landscape"]}
              >
                <View style={styles.centeredModalView}>
                  <View style={styles.modalView}>
                    <DateTimePicker
                      testID="dateTimePickerCheckOutIOS"
                      value={checkOut}
                      mode={"date"}
                      display="spinner"
                      onChange={onChangeCheckOut}
                    />
                    <NavButton title="confirm" onPress={hideCheckOutPicker} />
                  </View>
                </View>
              </Modal>
            )}
          </View>
                {/* begginging of the view for the area to select guest */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel1, dateLabelFlex]}>
              Number of Guests:
            </Text>
            {/* pressable for selecting the number of guests */}
            <Pressable onPress={showNumGuestsPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>{guestCounts[numGuests]}</Text>
              </View>
            </Pressable>

            <Modal
            animationType="slide"
            transparent={true}
            visible={showNumGuests}
            supportedOrientations={["portrait", "landscape"]}
            >
                <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.dateText, dateTextFlex]}>Enter Number of Guests:</Text>
                        {/* assign the vlaues for guest selecter */}
                        <WheelPicker 
                        selectedIndex={numGuests}
                        options={guestCounts}
                        onChange={onChangeNumGuests}
                        containerStyle={{width:200}}
                        />
                        <Button title="confirm" onPress={hideNumGuestsPicker} />
                    </View>
                </View>
            </Modal>
          </View>
{/* begginging of the view for the area to select camp */}
          <View style={styles.rowContainer}>
            <Text style={[styles.dateLabel1, dateLabelFlex]}>
              Number of Camp Sites:
            </Text>
            {/* pressable area for selecting the number to open the wheel */}
            <Pressable onPress={showNumCampPicker}>
              <View style={styles.dateContainer}>
                <Text style={[styles.dateText, dateTextFlex]}>{campCounts[numCamp]}</Text>
              </View>
            </Pressable>

            <Modal
            animationType="slide"
            transparent={true}
            visible={showNumCamp}
            supportedOrientations={["portrait", "landscape"]}
            >
                <View style={styles.centeredModalView}>
                    <View style={styles.modalView}>
                        <Text style={[styles.dateText, dateTextFlex]}>Enter Number of Camp Sites:</Text>
                        {/* pressable area for selecting the number of campsites */}
                        <WheelPicker 
                        selectedIndex={numCamp}
                        options={campCounts}
                        onChange={onChangeNumCamp}
                        containerStyle={{width:200}}
                        />
                        <Button title="confirm" onPress={hideNumCampPicker} />
                    </View>
                </View>
            </Modal>
          </View>

          <View style={styles.buttonContainer}>
            <NavButton onPress={onReserveHandler}>Reserve Now!</NavButton>
          </View>
        {/* area for holding and displaying the results from entering data */}
          <View style={styles.resultsContainer}>
            <Text style={[styles.results, dateLabelFlex]}>{results}</Text>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: "center",
  },
  backgroundImage: {
    opacity: 0.3,
  },
  titleContainer: {
    padding: 8,
    marginVertical: 20,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary300,
    backgroundColor: Colors.accent900o5,
  },
  scrollContainer: {
    flex: 1,
    width: 3000,
    maxWidth: "95%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dateContainer: {
    backgroundColor: Colors.accent1000o5,
    padding: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary800,
  },
  dateLabel: {
    fontSize: 50,
    color: Colors.primary800,
    fontFamily: "lemonmilkbold",
    textShadowColor: "grey",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
  },
  dateLabel1: {
    fontSize: 50,
    color: Colors.primary800,
    fontFamily: "lemonmilkbold",
    textShadowColor: "grey",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    backgroundColor: Colors.accent1000o5,
    padding: 5,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: Colors.primary800,
  },
  dateText: {
    fontSize: 20,
    color: Colors.primary300,
    fontFamily: "lemonmilkmeditalic",
    textShadowColor: "red",
    textShadowOffset: {width: 2, height: 2 },
    textShadowRadius: 2,
  },
  centeredModalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Colors.accent500,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    alignItems: "center"
  },
  results: {
    textAlign: "center",
    color: Colors.primary900,
    fontFamily: "squealer",
    textShadowColor: "red",
    textShadowOffset: {width: 2, height: 2 },
    textShadowRadius: 2,
    paddingTop: 15,
  },
});

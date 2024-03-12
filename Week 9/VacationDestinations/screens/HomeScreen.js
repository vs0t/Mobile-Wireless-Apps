import { FlatList, Text, View } from "react-native";
import { STATES } from "../data/dummy-data"
import CountryGridTile from "../components/CountryGridTile";

function HomeScreen(props) {

    function renderStateItem(itemData) {

        function pressHandler() {
            props.navigation.navigate("DestinationReviewScreen", {
                stateId: itemData.item.id,
            })
        }


        return (
            <CountryGridTile 
                name={itemData.item.name}
                color={itemData.item.color}
                onPress={pressHandler}
            />
        )
    }

    return (
        <View>
            <FlatList 
            data={STATES}
            keyExtractor={(item) => {
                return item.id
            }}
            renderItem={renderStateItem}
            numColumns={2}
            />
        </View>
    );
}

export default HomeScreen;
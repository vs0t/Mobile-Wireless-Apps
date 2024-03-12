import { useLayoutEffect } from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { DESTINATIONS, STATES } from "../data/dummy-data";
import DestinationItem from "../components/DestinationItem";


function DestinaitionReviewScreen(props){
    const stateId = props.route.params.stateId;

    useLayoutEffect(() => {
        const state = STATES.find((state) => state.id === stateId);
        props.navigation.setOptions({ title: state ? state.name : null });
    }, [stateId, props.navigation]);

    const displayedDestinations = DESTINATIONS.filter((destinationItem) => {
        return destinationItem.stateId === stateId;
    });

    function renderDestinationItem(itemData){
        const destinationItemProps = {
            name: itemData.item.name,
            imageUrl: itemData.item.imageUrl,
            description: itemData.item.description,
            foundedYear: itemData.item.foundedYear,
            rating: itemData.item.rating,
            price: itemData.item.price,
            listIndex: itemData.index,
        }
        return <DestinationItem {...destinationItemProps}/>
    }

    return (
        <View>
            <FlatList 
            data={displayedDestinations}
            keyExtractor={(item) => item.id}
            renderItem={renderDestinationItem}
            />
        </View>
    );
}

export default DestinaitionReviewScreen;
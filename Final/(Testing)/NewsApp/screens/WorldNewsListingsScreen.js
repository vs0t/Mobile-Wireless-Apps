import List from "../components/List/List";
import { LISTINGS } from "../data/dummy_data";

function  WorldNewsListingScreen() {
  const type = "World";
  const displayedListings = LISTINGS.filter((listingItem) => {
    return listingItem.type === type;
  });

  return <List items={displayedListings} />;
}

export default WorldNewsListingScreen;

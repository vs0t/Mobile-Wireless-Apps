import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LISTINGS } from '../data/dummy_data';
import ListingItem from '../components/List/ListingItem';
import colors from '../constants/colors';

function SearchScreen() {
  const [searchTitle, setSearchTitle] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [selectedAgency, setSelectedAgency] = useState('');
  const [searchResults, setSearchResults] = useState(LISTINGS);

  const uniqueAuthors = [...new Set(LISTINGS.map((listing) => listing.address))];
  const uniqueAgencies = [...new Set(LISTINGS.map((listing) => listing.yearBuilt))];

  const handleSearch = () => {
    const filteredResults = LISTINGS.filter((listing) => {
      const { price, address, yearBuilt } = listing;
      const titleMatch = price.toString().toLowerCase().includes(searchTitle.toLowerCase());
      const authorMatch = selectedAuthor ? address === selectedAuthor : true;
      const agencyMatch = selectedAgency ? yearBuilt === selectedAgency : true;

      return titleMatch && authorMatch && agencyMatch;
    });

    setSearchResults(filteredResults);
  };

  const renderListingItem = ({ item }) => {
    const listingItemProps = {
      id: item.id,
      price: item.price,
      bedrooms: item.bedrooms,
      bathrooms: item.bathrooms,
      squareFeet: item.squareFeet,
      yearBuilt: item.yearBuilt,
      address: item.address,
      city: item.city,
      state: item.state,
      zipCode: item.zipCode,
      imageUrl: item.imageUrl,
      description: item.description,
      listIndex: item.index,
    };

    return <ListingItem {...listingItemProps} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by title..."
          value={searchTitle}
          onChangeText={setSearchTitle}
        />
        <View style={styles.dropdownContainer}>
          <Picker
            style={styles.dropdown}
            selectedValue={selectedAuthor}
            onValueChange={(itemValue) => setSelectedAuthor(itemValue)}
          >
            <Picker.Item label="All Authors" value="" />
            {uniqueAuthors.map((author) => (
              <Picker.Item key={author} label={author} value={author} />
            ))}
          </Picker>
          <Picker
            style={styles.dropdown}
            selectedValue={selectedAgency}
            onValueChange={(itemValue) => setSelectedAgency(itemValue)}
          >
            <Picker.Item label="All Agencies" value="" />
            {uniqueAgencies.map((agency) => (
              <Picker.Item key={agency} label={agency} value={agency} />
            ))}
          </Picker>
        </View>
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={renderListingItem}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  searchContainer: {
    backgroundColor: colors.primary400,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 8,
    paddingHorizontal: 8,
    backgroundColor: 'white',
  },
  dropdownContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dropdown: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    backgroundColor: 'white',
  },
  searchButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 4,
    alignSelf: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export default SearchScreen;
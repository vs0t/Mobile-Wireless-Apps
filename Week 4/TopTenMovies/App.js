import React from "react";
import { StyleSheet, Text, View, FlatList, Image, SafeAreaView } from "react-native";

//  data for the top ten movies
const moviesData = [
  {
    id: "1",
    title: "Pulp Fiction",
    poster: "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    rating: "8.9",
  },
  {
    id: "2",
    title: "Inglourious Basterds",
    poster: "https://www.deathbyfilms.com/wp-content/uploads/2020/05/Inglourious-Basterds-2009-poster.jpg",
    rating: "8.3", 
  },
  {
    id: "3",
    title: "Blade Runner 2049",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    rating: "8.0",  
  },
  {
    id: "4",
    title: "Deadpool",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
    rating: "8.0",  
  },
  {
    id: "5",
    title: "Drive",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
    rating: "7.8",  
  },
  {
    id: "6",
    title: "The Shawshank Redemption",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: "9.3",  
  },
  {
    id: "7",
    title: "Spider-Man: Into the Spider-Verse",
    poster: "https://image.tmdb.org/t/p/original/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    rating: "8.4",  
  },
  {
    id: "8",
    title: "The Godfather",
    poster: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    rating: "9.2",  
  },
  {
    id: "9",
    title: "Fight Club",
    poster: "https://image.tmdb.org/t/p/original/8kNruSfhk5IoE4eZOc4UpvDn6tq.jpg",
    rating: "8.8",  
  },
  {
    id: "10",
    title: "Se7en",
    poster: "https://image.tmdb.org/t/p/original/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    rating: "8.6",  
  },
  
];

// custom component to render each movie
const MovieItem = ({ title, poster, rating }) => (
  <View style={styles.movieItem}>
    {/* display the image */}
    <Image source={{ uri: poster }} style={styles.moviePoster} resizeMode="contain" />
    {/* display data that refers to said poster */}
    <View style={styles.movieInfo}>
      <Text style={styles.movieTitle}>{title}</Text>
      <Text style={styles.movieRating}>Rating: {rating}</Text>
    </View>
  </View>
);

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* title holder */}
        <Text style={styles.title}>Evan's Top 10 Movies</Text>
        {/* flatlist to hold and display top 10 movies */}
        <FlatList
          data={moviesData}
          renderItem={({ item }) => (
            // actually grabbing and displaying the data for each item
            <MovieItem title={item.title} poster={item.poster} rating={item.rating} />
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#701616", 
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start", 
    paddingTop: 50, 
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  movieItem: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  moviePoster: {
    width: 50,
    height: 75,
    marginRight: 10,
  },
  movieTitle: {
    flex: 1,
    fontWeight: "bold",
  },
  movieRating: {
    fontSize: 16,
  },
});

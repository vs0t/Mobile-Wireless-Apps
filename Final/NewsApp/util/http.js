// Importing axios for making HTTP requests
import axios from "axios";

// Constant for the backend URL
const BACKEND_URL = "https://mobile-app-final-d2d32-default-rtdb.firebaseio.com";

// Function to store bookmarks
// It sends a POST request to the backend with the bookmarks data
// Returns the id of the newly created resource
export async function storeBookmarks(bookmarks) {
  const response = await axios.post(BACKEND_URL + "/bookmarks.json", bookmarks);
  const id = response.data.name;
  return id;
}

// Function to fetch bookmarks
// It sends a GET request to the backend
// Returns an array of bookmarks
export async function fetchBookmarks() {
  const response = await axios.get(BACKEND_URL + "/bookmarks.json");

  // Initialize an empty array to store bookmarks
  const bookmarks = [];

  // Loop through the response data and create a bookmark object for each
  // Each bookmark object has an id and the rest of the data from the response
  // The bookmark object is then pushed to the bookmarks array
  for (const key in response.data) {
    const bookmarkObj = {
      id: key,
      ...response.data[key],
    };
    bookmarks.push(bookmarkObj);
  }

  // Return the array of bookmarks
  return bookmarks;
}
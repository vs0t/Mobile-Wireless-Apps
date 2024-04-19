import axios from "axios";

const BACKEND_URL = "https://mobile-app-final-d2d32-default-rtdb.firebaseio.com";

export async function storeBookmarks(bookmarks) {
  const response = await axios.post(BACKEND_URL + "/bookmarks.json", bookmarks);
  const id = response.data.name;
  return id;
}

export async function fetchBookmarks() {
  const response = await axios.get(BACKEND_URL + "/bookmarks.json");

  const bookmarks = [];

  for (const key in response.data) {
    const bookmarkObj = {
      id: key,
      ...response.data[key],
    };
    bookmarks.push(bookmarkObj);
  }

  return bookmarks;
}
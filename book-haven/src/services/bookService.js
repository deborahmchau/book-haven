import axios from "axios";

const BASE_URL = "https://openlibrary.org/search.json";

export const fetchBooks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}?q=${query}`);
    return response.data.docs;
  } catch (error) {
    throw new Error("Error fetching book data");
  }
};

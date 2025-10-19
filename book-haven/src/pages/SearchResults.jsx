import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { searchBooks } from "../services/bookService";
import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const SearchResults = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams(); 
  const query = searchParams.get("q"); 

  useEffect(() => {
    if (!query) return; 

      setLoading(true);
      setError(null);

      searchBooks(query)
        .then((data) => setBooks(data))
        .catch((err) => {
          console.error("Error fetching books:", err);
          setError("Failed to load books. Please try again.");
        })
        .finally(() => setLoading(false));
     }, [query]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Failed to load books." />;    

  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center relative" style={{ backgroundImage: "url('/books-bg.jpg')" }}> 
         <h1 className="text-2xl font-bold bg-white w-fit mx-auto px-4 py-2 mb-6 shadow-md"> 
          Search Results For: <span className="text-blue-600">{query}</span>
          </h1> 

          {books.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {books.map((book) => ( 
                <BookCard key={book.key} book={book} /> 
             ))}
            </div>
          ) : ( 
            <p className="text-white text-bold">No results found.</p> 
          )} 
   </div> 
  ); 
}

export default SearchResults;

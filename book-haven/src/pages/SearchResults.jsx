import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchBooks } from "../services/bookService"; 
import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) return;

    setLoading(true);
    setError(null);

    searchBooks(query)
      .then((data) => setBooks(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [query]);

  if (loading) return <p className="text-center text-gray-500 mt-10">Loading...</p>
  if (error) return <p className="text-center text-red-500 mt-10">Failed to load books.</p>

  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center relative" style={{ backgroundImage: "url('/books-bg.jpg')" }}>
      <h1 className="text-2xl font-bold bg-white w-fit mx-auto px-4 py-2 mb-6 shadow-md"> 
          Search Results For: <span className="text-blue-600">{query}</span>
          </h1> 

      {books.length > 0 ? (
          <p className="text-white text-bold">No results found.</p>
      ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {books.map((book) =>(
              <BookCard key={boo.key} book={book} />
            ))}
          </div>
      )}
    </div>
  );
}

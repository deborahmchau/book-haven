import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchBooks } from "../services/bookService";
import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooksData = async () => {
      if (!query.trim()) return;
      setLoading(true);
      setError(null);

      try {
        const data = await 
searchBooks(query);
        setBooks(data);
      } catch (err) {
        console.error("Error fetching books:", err);
        setError("Failed to fetch books. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchBooksData();
  }, [query]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center relative" style={{ backgroundImage: "url('/books-bg.jpg')" }}>
      <h2 className="text-2xl font-bold text-center text-white mb-4">
        Search Results For: <span className="text-indigo-600">{decodeURIComponent(query)}</span>
      </h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-600 mt-10">No results found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;

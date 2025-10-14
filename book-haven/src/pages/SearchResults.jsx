import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchBooks } from "../services/bookService";
import BookCard from "../components/BookCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export default function SearchResults() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const query = new URLSearchParams(useLocation().search).get("q");

  useEffect(() => {
    const getBooks = async () => {
      try {
        const data = await fetchBooks(query);
        setBooks(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getBooks();
  }, [query]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message="Failed to load books." />;

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
}

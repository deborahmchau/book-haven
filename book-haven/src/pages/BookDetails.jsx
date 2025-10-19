import { useParams, Link } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import { getCoverUrl } from "../services/bookService"; 
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorMessage from "../components/ErrorMessage";

export default function BookDetails() {
  const { id } = useParams(); // Get book ID from URL
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`https://openlibrary.org/works/${id}.json`);
        if (!response.ok) throw new Error("Failed to fetch book details");
        const data = await response.json();
        setBook(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error || !book) return <ErrorMessage message="Failed to load book details." />;

  // Extract cover image if available
  const coverId = book.covers ? 
book.covers[0] : null;
  const coverUrl = getCoverUrl(coverId, "L");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Book Cover */}
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full md:w-1/3 rounded-lg shadow-md object-cover"
        />

        {/* Book Info */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-2">{book.title}</h1>

          {book.description && (
            <p className="text-gray-700 mb-4">
              {typeof book.description === "string"
                ? book.description
                : book.description.value}
            </p>
          )}

          <div className="space-y-2 text-gray-600">
            {book.subjects && (
              <p>
                <span className="font-semibold">Subjects:</span>{" "}
                {book.subjects.slice(0, 5).join(", ")}
              </p>
            )}
            {book.first_publish_date && (
              <p>
                <span className="font-semibold">Published:</span>{" "}
                {book.first_publish_date}
              </p>
            )}
          </div>

          {/* Recommendation Button */}
          <div className="mt-6">
            <Link
              to={`/recommendations/${id}`}
              className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Books Similar to This
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

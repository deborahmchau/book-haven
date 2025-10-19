import React from "react";
import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  if (!book) return null;

  // Handle missing data safely
  const title = book.title || "Untitled";
  const authors = Array.isArray(book.author_name)
    ? book.author_name.join(", ")
    : book.author_name || "Unknown author";

  // Open Library cover URL pattern:
  // https://covers.openlibrary.org/b/id/<cover_i>-L.jpg
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : "https://via.placeholder.com/200x300?text=No+Cover";

  // Use work key if available, fallback to encoded title
  const bookKey = book.key ? book.key.replace("/works/", "") : encodeURIComponent(title);

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-3 flex flex-col items-center text-center">
      <img
        src={coverUrl}
        alt={title}
        className="w-40 h-56 object-cover rounded-lg mb-3"
        loading="lazy"
      />
      <h3 className="text-base font-semibold text-gray-800 line-clamp-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-3 line-clamp-1">{authors}</p>

      <Link
        to={`/book/${bookKey}`}
        state={{ book }}
        className="mt-auto px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}

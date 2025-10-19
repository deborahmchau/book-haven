import axios from "axios";

export async function searchBooks(query) {
  const response = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
  );
  if (!response.ok) throw new Error("Network response was not ok");
  const data = await response.json();

  return data.docs.map((book) => ({
    key: book.key,
    title: book.title,
    author: book.author_name ? book.author_name.join(", ") : "Unknown Author",
    cover_id: book.cover_i,
    cover_url: book.cover_i
      ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
      : null,
  }));
}

export function getCoverUrl(coverId, size= "L") {
  return coverId ? 'https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg'
                 : "https://via.placeholder.com/150x220?text=No+Cover";
}

export async function searchBooks(query) {
  const encodedQuery = encodeURIComponent(query.trim());
  const url = `https://openlibrary.org/search.json?q=${encodedQuery}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch books");

    const data = await response.json();
    return (data.docs || []).slice(0, 20).map((book) => ({
      key: book.key,
      title: book.title,
      author: book.author_name ? book.author_name.join(", ") : "Unknown Author",
      year: book.first_publish_year || "N/A",
      cover_i: book.cover_i,
      coverUrl: getCoverUrl(book.cover_i),
    }));
  } catch (error) {
    console.error("Error fetching books:", error);
    throw error;
  }
}

export function getCoverUrl(coverId) {
  return coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
    : "https://via.placeholder.com/150x200?text=No+Cover";
}

export async function getBookDetails(bookKey) {
  try {
    const response = await fetch(`https://openlibrary.org${bookKey}.json`);
    if (!response.ok) throw new Error("Failed to fetch book details");

    const data = await response.json();
    return {
      title: data.title,
      description:
        typeof data.description === "string"
          ? data.description
          : data.description?.value || "No description available.",
      subjects: data.subjects || [],
      publish_date: data.publish_date || "Unknown",
      covers: data.covers?.map((id) => getCoverUrl(id)) || [],
    };
  } catch (error) {
    console.error("Error fetching book details:", error);
    throw error;
  }
}

export async function getRecommendations(subject) {
  if (!subject) throw new Error("No subject provided for recommendations");

  const encodedSubject = encodeURIComponent(subject);
  const url = `https://openlibrary.org/subjects/${encodedSubject}.json?limit=10`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch recommendations");

    const data = await response.json();
    return (data.works || []).map((work) => ({
      key: work.key,
      title: work.title,
      author: work.authors?.[0]?.name || "Unknown Author",
      cover_i: work.cover_id,
      coverUrl: getCoverUrl(work.cover_id),
    }));
  } catch (error) {
    console.error("Error fetchig recommendations:", error);
    throw error;
  }
}

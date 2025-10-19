export async function searchBooks(query) {
  const response = await fetch(`https://openlibrary.org/search.json?q=${query}`);
  if (!response.ok) throw new Error("Failed to fetch books");
  const data = await response.json();
  return data.docs || [];
}

export function getCoverUrl(coverId, size = "M") {
  return coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`
    : "https://via.placeholder.com/150x220?text=No+Cover";
}

export async function getRecommendations(subject) {
  // Fetch books related to a given subject for recommendations
  const response = await fetch(
    `https://openlibrary.org/subjects/${encodeURIComponent(subject)}.json?limit=10`
  );
  if (!response.ok) throw new Error("Failed to fetch recommendations");
  const data = await response.json();
  return data.works || [];
}

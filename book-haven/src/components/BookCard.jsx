export default function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="bg-white shadow-md p-4 rounded-md hover:shadow-lg transition">
      <img src={coverUrl} alt={book.title} className="w-full h-60 object-cover rounded" />
      <h3 className="font-bold mt-2">{book.title}</h3>
      <p className="text-gray-600">{book.author_name?.[0]}</p>
    </div>
  );
}

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch();
      }}
      className="flex justify-center mt-6"
    >
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search for books..."
        className="border rounded-l-md p-2 w-1/2"
      />
      <button type="submit" className="bg-indigo-600 text-white px-4 rounded-r-md">
        Search
      </button>
    </form>
  );
}

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";

export default function Home() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className="text-center mt-10">
      <h1 className="text-3xl font-bold">Welcome to Book Haven</h1>
      <p className="mt-2 text-gray-600">Discover your next great read 📚</p>
      <SearchBar query={query} setQuery={setQuery} onSearch={handleSearch} />
    </div>
  );
}

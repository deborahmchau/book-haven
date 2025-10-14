import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-indigo-600 text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">Book Haven</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
        <Link to="/library">My Library</Link>
      </div>
    </nav>
  );
}

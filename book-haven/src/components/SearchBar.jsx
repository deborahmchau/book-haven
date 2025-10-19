import { Search } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (query.trim()) {
            navigate('/search?q=${encodeURIComponent(query)}');
        }
    };

    return ( 
       <div className="bg-white bg-opacity-95 shadow-xl rounded-md p-8 max-w-md w-full">
            <h2 className="text-center font-bold text-xl mb-6">Search Title / Author / Keyword</h2> 
        <div className="flex"> 
             <form onSubmit={handleSearch} className="flex items-center space-x-2">
             <input 
                 type="text" 
                 placeholder="Search..."
                 value={query}
                 onChange={(event) => setQuery(event.target.value)} 
                 className="border p-2 rounded w-full" /> 
              <button className="bg-gray-200 px-4 py-2 rounded-r-md hover:bg-gray-300"> 
                 <Search /> 
              </button> 
            </form>
         </div> 
      </div> 
    ); 
} 

export default SearchBar;

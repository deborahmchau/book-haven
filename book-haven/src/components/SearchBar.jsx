import { Search } from "lucide-react"; 

export default function SearchBar() {
    return ( 
       <div className="bg-white bg-opacity-95 shadow-xl rounded-md p-8 max-w-md w-full">
            <h2 className="text-center font-bold text-xl mb-6">Search Title / Author / Keyword</h2> 
        <div className="flex"> 
             <input 
                 type="text" 
                 placeholder="Search..." 
                 className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none" /> 
              <button className="bg-gray-200 px-4 py-2 rounded-r-md hover:bg-gray-300"> 
                 <Search /> 
              </button> 
         </div> 
      </div> 
    ); 
} 

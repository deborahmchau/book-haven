import { useParams } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import { getRecommendations, getCoverUrl } from "../services/bookService"; 

export default function Recommendations() { 
    const { id } = useParams(); 
    const [books, setBooks] = useState([]); 

    useEffect(() => {
getRecommendations("fiction").then(setBooks);
    }, [id]); 

    return (
       <div className="bg-[url('/bg-image.jpg')] bg-cover min-h-screen py-10 text-center"> 
             <h2 className="text-2xl font-bold mb-6 text-white">Recommended Books</h2> 
             <div className="flex flex-wrap justify-center gap-6 px-4"> {books.map((book) => ( 
                   <div key={book.key} className="bg-white rounded-xl shadow-md p-4 w-72" > 
                      <img src={getCoverUrl(book.cover_i)} alt={book.title} className="mx-auto mb-2 h-48 object-cover" /> 
                      <h3 className="font-semibold">{book.title}</h3> 
                      <p className="text-sm text-gray-600">{book.author_name?.join(", ")}</p> 
                   </div> 
                ))} 
             </div> 
      </div> 
    ); 
} 

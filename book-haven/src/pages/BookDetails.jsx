import { useParams, Link } from "react-router-dom"; 
import { useEffect, useState } from "react"; 
import { getBookById, getCoverUrl } from "../services/bookService"; 

export default function BookDetails() { 
    const { id } = useParams(); 
    const [book, setBook] = useState(null); 

    useEffect(() => { 
        getBookById(id).then(setBook); 
    }, [id]); 

    if (!book) return <p className="text-center mt-10">Loading...</p>; 

    return ( 
       <div className="bg-[url('/bg-image.jpg')] bg-cover min-h-screen py-10 text-center"> 
            <div className="bg-white max-w-3xl mx-auto p-6 rounded-2xl shadow-lg">
                <img src={getCoverUrl(book.covers ? book.covers[0] : null)} alt={book.title} className="mx-auto mb-4 rounded-lg 
h-72 object-cover" /> 
                <h2 className="text-2xl font-bold">{book.title}</h2> 
                <p className="text-gray-700 my-3">{book.description?.value || book.description || "No description available."}</p> 
                <p className="text-sm text-gray-600 mb-2"> Subjects: {book.subjects ? book.subjects.slice(0, 5).join(", ") : "N/A"} </p> 
                <p className="text-sm text-gray-500 mb-4"> First published in {book.first_publish_date || "Unknown"} </p> 

                <div className="mt-5"> 
                    <Link to={`/recommendations/${id}`} className="bg-purple-500 text-white px-5 py-2 rounded-lg hover:bg-purple-600" > See Similar Books </Link>
                </div> 
          </div> 
     </div> 
   ); 
} 


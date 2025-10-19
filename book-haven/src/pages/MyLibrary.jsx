import { useState } from "react"; 
import { Link } from "react-router-dom"; 

export default function MyLibrary() { 
    const [library] = useState([ { id: "OL82563W", title: "Lorem Lopus", author: "John Doe", status: "Read" }, { id: "OL12345W", title: "Book Ipsum", author: "Jane Smith", status: "Currently Reading" }, ]); 
    
    return ( 
        <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center relative" style={{ backgroundImage: "url('/books-bg.jpg')" }}>
             <div className="bg-white max-w-4xl mx-auto p-6 rounded-2xl shadow-lg"> 
                 <div className="grid md:grid-cols-2 gap-6"> 
                      <div> 
                          {library.map((book) => ( 
                            <div key={book.id} className="mb-6 border-b pb-4"> 
                                 <h3 className="font-semibold">TITLE: {book.title}</h3> 
                                 <p>AUTHOR: {book.author}</p> 
                                 <p>READING STATUS: {book.status}</p> 
                                 <div className="mt-3 flex justify-center gap-3"> 
                                      <Link to={`/Recommendations/${book.id}`} className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300" > Books Similar To This </Link> 
                                      <a href={`https://www.goodreads.com/search?q=${encodeURIComponent(book.title)}`} target="_blank" rel="noreferrer" className="bg-gray-200 px-3 py-1 rounded-lg hover:bg-gray-300" > Goodreads Review </a> 
                                 </div> 
                           </div> 
                        ))} 
                    </div> 

                    <div className="bg-white p-4 rounded-xl shadow"> 
                        <h3 className="font-semibold text-lg mb-3">On My Bookshelf</h3> 
                        <p>Books Read - 240</p> 
                        <p>Currently Reading - 4</p> 
                        <p>On my Wish List - 55</p> 
                    </div> 
              </div> 
 
              <button className="mt-6 bg-purple-500 text-white px-6 py-2 rounded-xl hover:bg-purple-600"> Load More </button> 
         </div> 
    </div> 
  ); 
}


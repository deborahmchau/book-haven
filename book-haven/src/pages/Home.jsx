import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import SearchBar from "../components/SearchBar"; 
import Footer from "../components/Footer"; 

export default function Home() { 
     return ( 
         <div className="bg-cover bg-center min-h-screen flex flex-col justify-center items-center relative" style={{ backgroundImage: "url('/books-bg.jpg')" }}>
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg text-center">
              <SearchBar />
            </div>
        </div>    
     ); 
} 

import { useState } from "react";
import ContactForm from "../components/ContactForm";
import bookLogo from "../assets/book-logo.png";

export default function Footer() { 
  const [showContact, setShowContact] = useState(false);

return ( 
    <footer className="bg-white text-black py-6 flex justify-between items-center px-8 font-bold"> 
         <img src={bookLogo} alt="Bookhaven Logo" className="w-32 cursor-pointer" />

         <button onClick={() => setShowContact(true)} className="hover:underline">CONTACT US</button>

         {showContact && (
           <ContactForm onClose={() => setShowContact(false)} />
         )}
    </footer>
  ); 
} 

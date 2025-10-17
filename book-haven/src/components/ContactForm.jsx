import { X } from "lucide-react";

export default function ContactForm({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
           <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3 relative">
               <button onClick={onClose} className="absolute top-3 right-3 text-gray-600 hover:text-black">
                   <X size={20} />
               </button>

               <h2 className="text-xl font-bold mb-4 text-center">Contact Us</h2>

               <form className="flex flex-col space-y-3">
                  <input 
                     type="text"
                     placeholder="Your Name"
                     className="border p-2 rounded"
                  />
                  <input 
                     type="email"
                     placeholder="Your Email"
                     className="border p-2 rounded"
                  />  
                  <textarea 
                     placeholder="Your Message"
                     className="border p-2 rounded h-24"
                   ></textarea>

                   <button type="submit" className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700"> 
                      Send Message

                   </button>
                </form>
            </div>
        </div>        
    )
}
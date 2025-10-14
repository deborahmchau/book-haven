export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <p>&copy; {new Date().getFullYear()} Book Haven. All rights reserved.</p>
      <p className="underline cursor-pointer">Contact Us</p>
    </footer>
  );
}

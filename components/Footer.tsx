import Link from "next/link";
import "../src/app/globals.css";

export default function Footer() {
  return (
    <footer className="w-full text-center py-5 mt-64 bg-gray-100 text-gray-800 font-bold text-lg">

      <div className="container mx-auto">

        <p>© 2024 Hareem. All Rights Reserved.</p>
        <p>Contact: hareemfarooqi2134@gmail.com</p>

        <p className="flex justify-center space-x-4">

          <Link className="text-blue-700 font-bold hover:text-blue-900 transition-colors duration-300 ease-in-out" href="https://www.linkedin.com/in/hareemfarooqi/">LinkedIn</Link>

          <span>|</span>

          <Link className="text-blue-700 font-bold hover:text-blue-900 transition-colors duration-300 ease-in-out" href="https://github.com/Hareem2134">GitHub</Link>

          <span>|</span>

          <Link className="text-blue-700 font-bold hover:text-blue-900 transition-colors duration-300 ease-in-out" href="https://www.instagram.com/HAREEM.FAROOQI">Instagram</Link>

        </p>

      </div>
      
    </footer>
  );
}

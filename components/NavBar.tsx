import Link from "next/link";
import "../src/app/globals.css";

export default function NavBar() {
    return (
        <div>
            <ul className="flex justify-center mt-5">
                
                <Link href="/" className="px-4 pb-3 text-lg font-bold text-white hover:text-[#fcd2cc]">Home</Link>
                <Link href="About" className="px-4 pb-3 text-lg font-bold text-white hover:text-[#fcd2cc]">About</Link>
                <Link href="Contact" className="px-4 pb-3 text-lg font-bold text-white hover:text-[#fcd2cc]">Contact</Link>
            </ul>
        </div>
    );
}

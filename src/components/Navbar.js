import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-white text-gray-800 shadow-md fixed top-0 w-full z-50 font-sans">
      <div className="flex-1">
        <Link
          href="/"
          className="ml-5 normal-case text-lg sm:text-xl font-bold text-gray-800 hover:text-indigo-600 transition-colors duration-300"
        >
          Al-Qur’an Digital Nusantara
        </Link>
      </div>

      <div className="flex-none flex items-center space-x-4 mr-5">
        {/* Ikon Tentang */}
        <Link
          href="/tentang"
          className="hover:scale-110 transition-transform duration-200"
          title="Tentang Website"
        >
          <AiOutlineInfoCircle className="w-6 h-6 text-gray-800 hover:text-indigo-600 transition-colors duration-200" />
        </Link>
      </div>
    </div>
  );
}

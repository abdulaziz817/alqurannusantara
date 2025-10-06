import { BsInstagram } from "react-icons/bs";
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
      <div className="flex-none">
        <Link
          href="https://www.instagram.com/abdulaziz.nusantara/"
          target="_blank"
          className="mr-5"
        >
          <BsInstagram className="w-6 h-6 text-gray-800 hover:text-pink-500 transition-colors duration-200" />
        </Link>
      </div>
    </div>
  );
}

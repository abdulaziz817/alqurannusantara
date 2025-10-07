"use client";
import { FcSearch } from "react-icons/fc";

export default function SearchBox({ onSearch = () => {} }) {
  // fungsi default untuk mencegah error jika onSearch belum dikirim
  return (
    <div className="relative mt-6">
      <FcSearch className="absolute w-[22px] h-[22px] ml-4 my-3" />
      <input
        type="text"
        placeholder="Cari surah..."
        className="w-full bg-gray-100 dark:bg-gray-800 text-black dark:text-white rounded-full pl-12 py-3 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-400 transition-all duration-300"
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

"use client";
import { FcSearch } from "react-icons/fc";

export default function SearchBox({ onSearch = () => {} }) {
  return (
    <div className="relative mt-6 flex justify-center">
      <div className="relative w-full max-w-md">
        {/* Icon Search */}
        <FcSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-[22px] h-[22px] opacity-80" />

        {/* Input */}
        <input
          type="text"
          placeholder="Cari surah..."
          className="
            w-full
            bg-gray-50 dark:bg-gray-900
            text-gray-900 dark:text-gray-100
            placeholder-gray-400 dark:placeholder-gray-500
            rounded-2xl
            pl-12 pr-4 py-3
            shadow-[0_2px_6px_rgba(0,0,0,0.08)]
            focus:shadow-[0_4px_12px_rgba(0,0,0,0.15)]
            focus:ring-0 focus:outline-none
            transition-all duration-300 ease-in-out
            border border-gray-200 dark:border-gray-700
          "
          onChange={(e) => onSearch(e.target.value)}
        />

        {/* Efek animasi highlight (glow) */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all duration-500 ease-in-out focus-within:ring-2 focus-within:ring-blue-400/60"></div>
      </div>
    </div>
  );
}

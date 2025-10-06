// src/components/SearchBox.js
import { FcSearch } from "react-icons/fc";

export default function SearchBox({ onSearch }) {
  return (
    <div className="relative mt-4">
      <FcSearch className="absolute w-[22px] h-[22px] ml-4 my-3" />
      <input
        type="text"
        placeholder="Cari surah..."
        className="input input-bordered w-full rounded-full pl-12 text-black dark:text-white"
        onChange={(e) => {
          if (typeof onSearch === "function") onSearch(e.target.value);
        }}
      />
    </div>
  );
}

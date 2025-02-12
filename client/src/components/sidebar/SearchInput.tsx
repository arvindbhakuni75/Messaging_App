import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 bg-gray-800 border border-gray-300 rounded-full focus:outline-none"
      />
      <button
        type="submit"
        className="w-10 h-10 flex items-center justify-center bg-sky-500 text-white rounded-full hover:bg-gray-900 transition"
      >
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;

import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <div className="flex justify-center px-7 sm:px-15 mb-5">
      <input
        type="text"
        placeholder="ابحث باسم المنتج..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
        className="font-semibold w-full px-4 py-2 border border-gray-300 rounded-xs focus:outline-none focus:ring focus:ring-indigo-950/65 focus:border-indigo-950/65 text-[13px] sm:text-sm transition-all duration-200"
      />
    </div>
  );
};

export default SearchBar;
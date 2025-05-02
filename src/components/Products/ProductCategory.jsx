import React from 'react';

const ProductCategory = ({ categories, selectedCategory, onSelect }) => {
  return (
    <div className="flex gap-3 flex-wrap justify-center mx-5 sm:mx-15 mb-7 sm:mb-5">
      {['الكل', ...categories].map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`py-1 px-3 text-[11px] sm:text-[13px] rounded-sm font-semibold cursor-pointer duration-200 transition-all ease-in-out ${
            selectedCategory === cat
              ? 'bg-indigo-950 text-gray-100'
              : 'bg-gray-200 text-indigo-950 hover:bg-gray-300'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default ProductCategory;
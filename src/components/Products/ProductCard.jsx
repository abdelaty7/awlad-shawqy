import React from 'react';

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="bg-white border border-indigo-100 rounded-2xl shadow-sm w-[135px] sm:w-[230px] overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="w-full h-[120px] sm:h-[240px] mt-3.5 sm:mt-0 mb-3 object-cover"
      />
      <div className="px-4">
        <h2 className="text-indigo-900 text-[12.5px] sm:text-[14.5px] font-bold mb-0.5">{title}</h2>
        <p className="text-gray-600 text-[11px] sm:text-[13.5px] mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
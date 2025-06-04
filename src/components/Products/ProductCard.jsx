import React from 'react';

const ProductCard = ({ title, description, image }) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center border border-indigo-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img
        src={image}
        alt={title}
        className="sm:w-[190px] h-[110px] sm:h-[230px] mt-3.5 sm:mt-0 mb-3 object-cover"
      />
      <div className="px-3 sm:px-4 w-[138px] sm:w-[220px]">
        <h2 className="text-indigo-900 text-[12px] sm:text-[14.5px] font-bold mb-0.5">{title}</h2>
        <p className="text-gray-600 text-[11px] sm:text-[13.5px] mb-4">{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;

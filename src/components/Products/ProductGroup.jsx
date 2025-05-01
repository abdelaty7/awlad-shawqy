import React from 'react';
import ProductCard from './ProductCard';

const ProductGroup = ({ products }) => {
  return (
    <div className="pb-7 mb-3 w-full flex justify-center mx-15">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGroup;
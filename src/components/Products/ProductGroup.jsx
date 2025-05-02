import React from 'react';
import ProductCard from './ProductCard';

const ProductGroup = ({ products }) => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGroup;
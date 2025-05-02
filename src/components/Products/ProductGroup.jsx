import React from 'react';
import ProductCard from './ProductCard';

const ProductGroup = ({ products }) => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-12 lg:px-15 mx-auto py-12">
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGroup;
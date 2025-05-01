import React, { useState } from 'react';
import productsData from './productsData';
import ProductCard from './ProductCard';
import ProductCategory from './ProductCategory';
import SearchBar from './SearchBar';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('الكل');
  const [searchTerm, setSearchTerm] = useState('');

  const uniqueCategories = [...new Set(productsData.map(p => p.category))];

  const filteredProducts = productsData.filter((p) => {
    const matchesCategory =
      selectedCategory === 'الكل' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* العنوان */}
      <div className='flex justify-center items-center gap-7 sm:gap-15 pt-33 sm:pt-25 pb-8 sm:pb-10'>
        <div className='flex items-center flex-1'>
          <div className='border-b-2 h-0.5 w-full border-gray-300'></div>
          <div className='h-3 w-3 rounded-full bg-amber-400 ml-2'></div>
        </div>
        <p className='text-[20px] sm:text-[21px] font-extrabold text-indigo-950 whitespace-nowrap'>
          جميع <span className='text-amber-400'>منتجاتنا</span>
        </p>
        <div className='flex items-center flex-1'>
          <div className='h-3 w-3 rounded-full bg-amber-400 mr-2'></div>
          <div className='border-b-2 h-0.5 w-full border-gray-300'></div>
        </div>
      </div>

      {/* التصنيفات */}
      <ProductCategory
        categories={uniqueCategories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      {/* البحث */}

      {/* عرض المنتجات */}
      <div className="flex flex-wrap gap-5.5 justify-start px-7 sm:px-15 pt-2">
        {filteredProducts.map(product => (
          <ProductCard key={product.id + product.title} {...product} />
        ))}
      </div>

      <div className='px-15 flex justify-center pb-15 mt-15 text-[14px] font-semibold text-indigo-950/75'>
        <p>للمزيد من المنتجات قم بزيارة أقرب فرع من فروعنا</p>
      </div>
    </>
  );
};

export default Products;
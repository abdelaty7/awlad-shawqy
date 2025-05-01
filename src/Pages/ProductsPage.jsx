import React from 'react'
import Note from '../components/Products/Note'
import Products from '../components/Products/Products'
import Contact from '../components/Utils/Contact'
import Footer from '../components/Utils/Footer'
import ScrollToTop from '../components/Utils/ScrollToTop'

const ProductsPage = () => {
  return (
    <div>
      <ScrollToTop />
      <Note />
      <Products />
      <Contact />
      <Footer />
    </div>
  )
}

export default ProductsPage
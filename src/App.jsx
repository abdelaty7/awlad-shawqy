import React from 'react'
import WelcomePage from './Pages/WelcomePage'
import ProductsPage from './Pages/ProductsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './hooks/ScrollToTop'

const App = () => (
  <div className='app'>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <WelcomePage /> } />
        <Route path="/products" element={ <ProductsPage /> } />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App

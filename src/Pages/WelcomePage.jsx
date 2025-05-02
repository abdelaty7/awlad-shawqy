import React from 'react'
import Navbar from '../components/Home/Navbar'
import Main from '../components/Home/Main'
import About from '../components/Home/About'
import Goods from '../components/Home/Goods'
import Certificate from '../components/Home/Certificate'
import QandA from '../components/Home/QandA'
import Contact from '../components/Utils/Contact'
import Footer from '../components/Utils/Footer'

const WelcomePage = () => {
  return (
    <div className='bg-gray-100'>
      <Navbar />
      <Main />
      <About />
      <Goods />
      {/* <Certificate /> */}
      <QandA />
      <Contact />
      <Footer />
    </div>
  )
}

export default WelcomePage
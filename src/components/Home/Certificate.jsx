import React from 'react'
import Marquee from 'react-fast-marquee'

const Certificate = () => {
  return (
    <>
      <div className='flex justify-center items-center gap-7 sm:gap-15 pt-15 sm:pt-20 pb-10 sm:pb-14 scroll-mt-23 sm:scroll-mt-13' id='cert'>
        <div className='flex items-center flex-1'>
          <div className='border-b-2 h-0.5 w-full border-gray-300'></div>
          <div className='h-3 w-3 rounded-full bg-amber-400 ml-2'></div>
        </div>
        <p className='text-[19px] sm:text-[22px] font-extrabold text-indigo-950 whitespace-nowrap'>
          شهادة <span className='text-amber-400'>إعتماد</span>
        </p>
        <div className='flex items-center flex-1'>
          <div className='h-3 w-3 rounded-full bg-amber-400 mr-2'></div>
          <div className='border-b-2 h-0.5 w-full border-gray-300'></div>
        </div>
      </div>

      <div className='flex flex-col sm:flex-row justify-end mx-7 sm:mx-15 items-center gap-28 sm:pt-4 '>
        <div className='w-75 sm:w-135 bg-gray-300 rounded-sm sm:ml-17'>
          <img src="cert.jpg" />
        </div>
        <div className='hidden sm:flex md-w-60 sm:w-120 h-10 sm:h-55 bg-amber-400/80 rounded-br-full rounded-tr-full mt-5'></div>
      </div>
    </>
  )
}

export default Certificate
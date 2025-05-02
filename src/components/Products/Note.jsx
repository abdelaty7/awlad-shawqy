import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom'

const Note = () => {
  return (
    <div className='bg-gray-200 py-4.5 px-7 sm:px-15 text-[11px] sm:text-[12px] font-semibold flex gap-15 justify-between fixed w-full shadow-sm'>
      <p className='hidden sm:flex'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
      <p className='text-gray-500 transition-all duration-300 ease-in-out'>الموقع مخصص فقط لعرض المنتجات للتسهيل على العملاء، ولا يهدف للبيع أو الربح الإلكتروني</p>
      <Link to="/">
      <p className='flex sm:gap-2 text-[12.5px] sm:text-[13px] cursor-pointer hover:text-gray-600/75 text-gray-700 transition-all duration-300 ease-in-out'>
        رجوع للرئيسية
        <ArrowBackIcon fontSize='small' />
      </p>
      </Link>
    </div>
  )
}

export default Note
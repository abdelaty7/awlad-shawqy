import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // icons
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isContactVisible, setContactVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleContact = () => {
    setContactVisible(!isContactVisible);
  };

  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between gap-5 items-center shadow-md px-7 sm:px-15 py-5 sm:py-3 z-50 bg-gray-100 fixed w-full'>
        {/* Logo + Menu Button + Products (Mobile) */}
        <div className='flex justify-between items-center w-full sm:w-auto'>
          <a href="#main">
            <img src="logo-i.svg" alt='اللوجو' className='w-22 mt-0.5 sm:mt-0 sm:w-24' />
          </a>
          <div className="flex items-center gap-4 sm:hidden mt-1">
            <Link to='/products'>
              <div className='px-2.5 py-1.5 bg-amber-400 hover:bg-amber-500/85 rounded-sm cursor-pointer transition-all duration-300 ease-in-out text-[13px] font-bold text-indigo-900'>
                المنتجات
              </div>
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>
        </div>

        {/* Navigation Links (Desktop only) */}
        <nav className="relative hidden sm:block">
          <ul className="flex gap-3 sm:gap-10 text-[11.5px] sm:text-[14.5px] font-medium">
            <li><a href="#main" className="cursor-pointer hover:opacity-75">الصفحة الرئيسية</a></li>
            <li><a href="#about" className="cursor-pointer hover:opacity-75">من نحن</a></li>
            <li><a href="#goods" className="cursor-pointer hover:opacity-75">مميزاتنا</a></li>
            <li><a href="#qna" className="cursor-pointer hover:opacity-75">أسئلة شائعة</a></li>
            <li><a href="#contact" className="cursor-pointer hover:opacity-75">فروعنا</a></li>
          </ul>
        </nav>

        {/* Buttons (Desktop only) */}
        <div className='hidden sm:flex gap-5 -mt-1.5'>
          <Link to='/products'>
            <div className='px-3 sm:px-4 py-1.5 sm:py-2 bg-amber-400 hover:bg-amber-500/85 rounded-sm cursor-pointer transition-all duration-300 ease-in-out text-[12px] sm:text-[13.5px] flex justify-center font-semibold text-indigo-900'>
              المنتجات
            </div>
          </Link>
          <div
            onClick={toggleContact}
            className='px-3 sm:px-4 py-1.5 sm:py-2 bg-indigo-900 hover:bg-indigo-800 rounded-sm cursor-pointer transition-all duration-300 ease-in-out text-[10.2px] sm:text-[13.3px] flex justify-center font-medium text-white'
          >
            تواصل معنا
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="fixed left-5 top-21 w-48 bg-white shadow-md rounded-md py-4.5 px-4 flex flex-col gap-3.5 text-[14px] font-semibold z-50 sm:hidden">
          <li><a href="#main" className="hover:opacity-75">الصفحة الرئيسية</a></li>
          <li><a href="#about" className="hover:opacity-75">من نحن</a></li>
          <li><a href="#goods" className="hover:opacity-75">مميزاتنا</a></li>
          <li><a href="#qna" className="hover:opacity-75">أسئلة شائعة</a></li>
          <li><a href="#contact" className="hover:opacity-75">فروعنا</a></li>
        </ul>
      )}

      {/* The contact info sidebar */}
      <div
        className={`fixed top-0 left-0 h-full z-50 max-w-md bg-white shadow-2xl transition-transform duration-500 ease-in-out ${isContactVisible ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex flex-col justify-between h-full p-6 space-y-6">
          <div>
            <div className="flex justify-start">
              <button
                onClick={toggleContact}
                aria-label="إغلاق"
                className="text-gray-600 hover:text-red-600 cursor-pointer transition absolute top-6"
              >
                <CloseIcon fontSize="small" />
              </button>
            </div>
            <div className='flex justify-center mt-7'>
              <h2 className="text-center text-[16.5px] border-b w-fit font-bold text-indigo-900 border-indigo-900">
                معلومات التواصل
              </h2>
            </div>
            <p className='text-[13px] mt-3.5 font-medium px-1 text-indigo-950'>
              لخدمتكم بشكل أفضل، يسعدنا استقبال استفساراتكم مباشرة في أقرب فرع من فروعنا، حيث سيكون فريقنا في انتظاركم لتقديم الدعم والمساعدة اللازمة.
            </p>
          </div>
          <div className='flex justify-center -mt-5 mb-7'>
            <img src="pic.svg" className='w-65' />
          </div>
          <div className='mb-2'>
            <div className='flex gap-1.5 mb-2 items-center'>
              <div className='py-1 px-2.5 rounded-full border-2 border-indigo-700 z-1'>
                <FontAwesomeIcon icon={faLocationDot} className="text-indigo-700 mt-1" style={{ fontSize: '19px' }} />
              </div>
              <div className='h-10 rounded-full w-full -mr-11 flex items-center border border-indigo-700'>
                <span className='text-indigo-900 font-semibold text-[11.5px] pr-14 pl-6'> حلوان، الشارع الغربي، بجوار نادي مركز شباب غرب </span>
              </div>
            </div>
            <div className='flex gap-1.5 mb-2 items-center'>
              <div className='py-1 px-2.5 rounded-full border-2 border-indigo-700 z-1'>
                <FontAwesomeIcon icon={faLocationDot} className="text-indigo-700 mt-1" style={{ fontSize: '19px' }} />
              </div>
              <div className='h-10 rounded-full w-full -mr-11 flex items-center border border-indigo-700'>
                <span className='text-indigo-900 font-semibold text-[11.5px] pr-14 pl-6'> حلوان، شارع أحمد راغب باشا، تقاطع شارع البرهان </span>
              </div>
            </div>
            <div className='flex gap-1.5 items-center'>
              <div className='py-1 px-2.5 rounded-full border-2 border-indigo-700 z-1'>
                <FontAwesomeIcon icon={faLocationDot} className="text-indigo-700 mt-1" style={{ fontSize: '19px' }} />
              </div>
              <div className='h-10 rounded-full w-full -mr-11 flex items-center border border-indigo-700'>
                <span className='text-indigo-900 font-semibold text-[11.5px] pr-14 pl-6'> حلوان، شارع مصطفى صفوت   </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
      <footer className="bg-black text-gray-300 text-center py-3.5 sm:p-3 text-[12.5px]">
        © {currentYear} أولاد شوقي. جميع الحقوق محفوظة. <a href="https://www.linkedin.com/in/abdel2ty/" className='opacity-75'>حساب المطور</a>
      </footer>
  );
};

export default Footer;
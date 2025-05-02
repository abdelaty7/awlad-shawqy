import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        zIndex: '1000',
        position: 'fixed',
        fontSize: '11px',
        fontWeight: '600',
        bottom: '20px',
        right: '20px',
        padding: '9px 16px 11px 16px',
        backgroundColor: '#221f52',
        color: '#fff',
        border: 'none',
        borderRadius: '10px',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.4s ease, visibility 0.4s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <FontAwesomeIcon icon={faArrowUp} />
      للأعلى
    </button>
  );
};

export default ScrollToTop;
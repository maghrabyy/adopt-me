import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Header = () => {
  const [showHeaderBg, setShowHeaderBg] = useState(false);
  useEffect(() => {
    const scrollEvent = window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setShowHeaderBg(true);
      } else {
        setShowHeaderBg(false);
      }
    });
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);
  return (
    <header
      className={`header fixed top-0 left-0 w-full mainP py-2 z-10 ${showHeaderBg && 'bg-orange-950 bg-opacity-95'}`}
    >
      <Link to="/">
        <div className="logo-title inline-flex items-center gap-2 cursor-pointer">
          <img src="../assets/paw-print.png" className="w-10" alt="paw print" />
          <h1 className="title">Adopt Me!</h1>
        </div>
      </Link>
    </header>
  );
};
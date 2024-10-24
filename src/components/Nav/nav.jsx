import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './nav.css';
import logowhite from './logo-white.png';

const Nav = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation(); 
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 180);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={sticky ? 'scroll-nav' : ''}>
      <img src={logowhite} alt='' className='white-logo' />

      <div className={`menu-container ${sticky ? 'shrink' : ''}`}>
        <ul className={`regular-nav ${sticky ? 'shrink' : ''}`}>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/story" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Story
            </NavLink>
          </li>
          <li>
            <NavLink to="/solution" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Solution
            </NavLink>
          </li>
          <li>
            <NavLink to="/sectors" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Sectors
            </NavLink>
          </li>
          <li>
        <NavLink to="/contactUs" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          <button className='contact'>Contact</button>
        </NavLink>
      </li>
        </ul>
      </div>

      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={toggleMenu}>Home</NavLink></li>
        <li><NavLink to="/story" onClick={toggleMenu}>Our Story</NavLink></li>
        <li><NavLink to="/solution" onClick={toggleMenu}>Solution</NavLink></li>
        <li><NavLink to="/sectors" onClick={toggleMenu}>Sectors</NavLink></li>
        <li><button className='contact' onClick={toggleMenu}>Contact</button></li>
      </ul>
    </nav>
  );
};

export default Nav;

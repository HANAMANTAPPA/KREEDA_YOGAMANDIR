import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../stylesheets/Navbar.css';
import logo from '../assets/symbol.png'; 

const Navbar = () => {
  const location = useLocation(); 
  const [activeLink, setActiveLink] = useState('');
  const navbarCollapseRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === '/') {
      setActiveLink('home');
    } else if (currentPath.includes('fitness')) {
      setActiveLink('fitness');
    } else if (currentPath.includes('pricing')) {
      setActiveLink('pricing');
    } else if (currentPath.includes('about')) {
      setActiveLink('about');
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && navbarCollapseRef.current && !navbarCollapseRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        document.querySelector('.navbar-collapse').classList.remove('show'); 
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" ref={navbarCollapseRef}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                to="/"
                onClick={() => setActiveLink('home')}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === 'fitness' ? 'active' : ''}`}
                to="/fitness"
                onClick={() => setActiveLink('fitness')}
              >
                Fitness
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === 'pricing' ? 'active' : ''}`}
                to="/pricing"
                onClick={() => setActiveLink('pricing')}
              >
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                to="/about"
                onClick={() => setActiveLink('about')}
              >
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex buttons-collapse mt-3 mt-lg-0">
            {/* Updated to be a Link for routing */}
            <Link to="/login" className="btnsCont btn-sign-up">
              SIGN IN
            </Link>
            <Link to ="/signUp" className="btnsCont btn-join-now">JOIN NOW</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

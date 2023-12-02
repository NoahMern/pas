import React, { useEffect, useRef, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import { GiHamburgerMenu } from 'react-icons/gi';
import logo from '../src/Images/logo.png';
import './Nav.css';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <div className="maindiv">
      <div className="aaulogo">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <div className="nameofuni">
        <p>ADDIS ABABA</p>
        <p className="p2">UNIVERSITY</p>
      </div>
      <div className="pas">
        <p>PROCTOR ASSISTING SYSTEM</p>
      </div>
      <div className="hamburg" ref={menuRef}>
        <GiHamburgerMenu size={30} onClick={handleMenuClick} />
        <Menu isOpen={isMenuOpen} onStateChange={({ isOpen }) => setIsMenuOpen(isOpen)}>
          <a id="stuinfo" className="menu-item" href="/studentinfo">
            Student Information
          </a>
          <a id="dorminfo" className="menu-item" href="/dorminfo">
            Dormitory Information
          </a>
          <a id="incident" className="menu-item" href="/incidentt">
            Incident List
          </a>
        </Menu>
      </div>
    </div>
  );
}

export default Nav;
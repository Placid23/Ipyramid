import React, { useState } from 'react';
import './Navbar.css'; // Importing the existing styles
import logo from '../assets/logo.jpg';
import menuIcon from '../assets/menu_icon.png';
import closeIcon from '../assets/close_icon.png';

const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const showSidebar = () => {
    setSidebarVisible(true);
  };

  const hideSidebar = () => {
    setSidebarVisible(false);
  };

  return (
    <nav>
      <ul className="side-bar" style={{ display: sidebarVisible ? 'flex' : 'none' }}>
        <li onClick={hideSidebar}>
          <a href="#">
          <img src={closeIcon} alt="Close" height={30} width={30} />
          </a>
        </li>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">News</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <ul>
        <li className="logo">
          <a href="#">
          <img src={logo} alt="Logo" height={66} />
          </a>
        </li>
        <li className="hideOnMobile"><a href="#">Home</a></li>
        <li className="hideOnMobile"><a href="#">About</a></li>
        <li className="hideOnMobile"><a href="#">Service</a></li>
        <li className="hideOnMobile"><a href="#">Pricing</a></li>
        <li className="hideOnMobile"><a href="#">News</a></li>
        <li className="hideOnMobile"><a href="#">Contact</a></li>
        <li className="menu-button" onClick={showSidebar}>
          <a href="#">
          <img src={menuIcon} alt="Menu" height={30} width={30}/>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


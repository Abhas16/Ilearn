import React from 'react';
import { FaCog, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import logo from '../assets/images/logo.PNG'; // Ensure this path is correct
import profilePic from '../assets/images/profile.jpg'; // Add profile image if available
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-search">
        <img src={logo} alt="iLearn Logo" className="logo-img" />
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header-right">
        <FaCog className="header-icon" />
        <FaBell className="header-icon" />
        <FaUserCircle className="header-icon" />
        <div className="user-profile">
          <img src={profilePic} alt="Profile" className="profile-pic" /> {/* Placeholder for profile image */}
          <span>Alexander</span>
        </div>
      </div>
    </header>
  );
};

export default Header;


/*import React from 'react';
import { FaCog, FaBell, FaSearch, FaUserCircle } from 'react-icons/fa';
import logo from '../assets/images/logo.PNG'; // Ensure this path is correct
import profilePic from '../assets/images/profile.jpg'; // Add profile image if available
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo-search">
        <img src={logo} alt="iLearn Logo" className="logo-img" />
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header-right">
        <FaCog className="header-icon" />
        <FaBell className="header-icon" />
        <FaUserCircle className="header-icon" />
        <div className="user-profile">
          <img src={profilePic} alt="Profile" className="profile-pic">
          <span>Alexander</span>
          </img>
        </div>
      </div>
    </header>
  );
};

export default Header;*/




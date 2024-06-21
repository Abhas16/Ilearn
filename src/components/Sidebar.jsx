import React, { useState } from 'react';
import { FaUser, FaCogs, FaChartLine, FaGraduationCap, FaChalkboardTeacher, FaStore, FaCog, FaLayerGroup, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import './Sidebar.css';
import logo from '../assets/images/logo.PNG';  

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState('');

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? '' : menu);
  };

  return (
    <aside className="sidebar">
      <div className="logo-section">
        <img src={logo} alt="iLearning Logo" className="logo" />
        <h2>iLearning</h2>
        <p>Super Admin Panel</p>
      </div>
      <ul>
        <li 
          onClick={() => toggleMenu('user')} 
          className={`menu-item ${activeMenu === 'user' ? 'active' : ''}`}
        >
          <FaUser className="icon" />
          <span>User</span>
          {activeMenu === 'user' ? <FaChevronDown className="arrow-icon" /> : <FaChevronRight className="arrow-icon" />}
        </li>
        {activeMenu === 'user' && (
          <ul className="submenu">
            <li className="submenu-item">User</li>
            <li className="submenu-item">Group</li>
            <li className="submenu-item">Permission</li>
          </ul>
        )}
        <li className={`menu-item ${activeMenu === 'cms' ? 'active' : ''}`}>
          <FaCogs className="icon" />
          <span>CMS</span>
          <FaChevronRight className="arrow-icon" />
        </li>
        <li className={`menu-item ${activeMenu === 'config' ? 'active' : ''}`}>
          <FaCog className="icon" />
          <span>Config</span>
          <FaChevronRight className="arrow-icon" />
        </li>
        <li className={`menu-item ${activeMenu === 'dashboard' ? 'active' : ''}`}>
          <FaChartLine className="icon" />
          <span>Dashboard</span>
          <FaChevronRight className="arrow-icon" />
        </li>
        <li className={`menu-item ${activeMenu === 'courses' ? 'active' : ''}`}>
          <FaGraduationCap className="icon" />
          <span>Courses</span>
          <FaChevronRight className="arrow-icon" />
        </li>
        <li className={`menu-item ${activeMenu === 'instructor' ? 'active' : ''}`}>
          <FaChalkboardTeacher className="icon" />
          <span>Instructor</span>
          <FaChevronRight className="arrow-icon" />
        </li>
        <li className={`menu-item ${activeMenu === 'shop' ? 'active' : ''}`}>
          <FaStore className="icon" />
          <span>Shop</span>
          <FaChevronRight className="arrow-icon" />
        </li>
        <li className={`menu-item ${activeMenu === 'widget' ? 'active' : ''}`}>
          <FaCog className="icon" />
          <span>Widget</span>
          <FaChevronRight className="arrow-icon" />
        </li>
        <li className={`menu-item ${activeMenu === 'pages' ? 'active' : ''}`}>
          <FaLayerGroup className="icon" />
          <span>Pages</span>
          <FaChevronRight className="arrow-icon" />
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;

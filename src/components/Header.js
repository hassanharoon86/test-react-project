import React from 'react';
import { FaBars } from 'react-icons/fa';
import Menu from './Menu';

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <header className="App-header">
      <nav className="Hamburger-menu">
        <FaBars className="menu-icon" onClick={() => setMenuOpen(!menuOpen)} />
        {menuOpen && <Menu closeMenu={() => setMenuOpen(false)} />}
      </nav>
      
      <nav className="Horizontal-menu">
        <a href="#students">Students</a>
        <a href="#courses">Courses</a>
        <a href="#faculty">Faculty</a>
      </nav>
    </header>
  );
};

export default Header;

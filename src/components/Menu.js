import React from 'react';

const Menu = ({ closeMenu }) => {
  return (
    <div className="menu-items open">
      <span className="close-button" onClick={closeMenu}>&times;</span>
      <a href="#students" onClick={closeMenu}>Students</a>
      <a href="#courses" onClick={closeMenu}>Courses</a>
      <a href="#faculty" onClick={closeMenu}>Faculty</a>
    </div>
  );
};

export default Menu;

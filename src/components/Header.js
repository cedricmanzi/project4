import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <Link to="/">YouTube Clone</Link>
      <input type="text" placeholder="Search..." />
    </header>
  );
}

export default Header;

import React from 'react';
import './Header.css';

const defaultTitle = 'Default Title'

const Header = ({ title }) => {
  const getTitle = title ? title : defaultTitle

  return (
    <div id="title-container" className="title-container">
      <h1>{getTitle}</h1>
    </div>
  )
}

export default Header;

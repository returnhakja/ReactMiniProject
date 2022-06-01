import React from 'react';
import imgA from './MainImg.png';
import './main.css';
import clear from './clear.png';
import Footer from './Footer';

function Main() {
  return (
    <div className="body-wrapper">
      <div className="maincoutainer">
        {/* <img className="main-img" src={imgA} alt="image" /> */}
        <img className="main-img" src={clear} alt="image" />
      </div>
      {/* <Footer className="footer" /> */}
    </div>
  );
}

export default Main;

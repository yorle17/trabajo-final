import React from 'react';
import './Header.css';
import imagen from '../../assets/img/logo.png';

function Header() {
  return (
    <header className="header">
      <a href="/index.html">
            <img src={imagen} alt=">Logo_pagina"/>         
        </a>   
        <h2>GOLDEN STORE</h2>     
        <h1>Bienvenidos a nuestra pagina en donde
           encontraras lo mejor en software.    .</h1>
           
        <div className="lines">
          <div className='line line1'></div>
          <div className='line line2'></div>
          <div className='line line3'></div>
          <div className='line line4'></div>
          <div className='line line5'></div>
        </div>
    </header>
  );
}

export default Header;

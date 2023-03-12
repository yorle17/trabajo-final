import React, { useState, useRef } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [theme, setTheme] = useState('claro');
  const themeToggle = useRef(null);

  function toggleTheme() {
    if (theme === 'claro') {
      setTheme('oscuro');
      themeToggle.current.innerHTML = 'Modo claro';
    } else {
      setTheme('claro');
      themeToggle.current.innerHTML = 'Modo oscuro';
    }
  }

  return (
    <nav className={`navbar ${theme === 'oscuro' ? 'modo-oscuro' : ''}`}>
      <ul>
        <li><a href="index.html">Inicio</a></li>
        <li><a href="Productos.html">Productos</a></li>
        <li><a href="Nosotros.html">Nosotros</a></li>
        <li><a href="Ingresar.html">Ingresar</a></li>
        <li><button id="theme-toggle" ref={themeToggle} onClick={toggleTheme}>Modo oscuro</button></li>
      </ul>
      <br></br>
    </nav>
    
  );
}

export default Navbar;

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componentes/header/Header.js';
import Navbar from './componentes/navbar/Navbar.js';
import Carousel from './componentes/carousel/Carousel.js';
import Mapa from './componentes/mapas/Mapa.js';
import Footer from './componentes/footer/Footer.js';
import Reloj from './componentes/reloj/Reloj.js';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <Navbar />
    <Carousel />  
    <Mapa/>  
    <Reloj/>
    <Footer />
  </React.Fragment>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './componentes/header/Header.js';
import Navbar from './componentes/navbar/Navbar.js';
import Carousel from './componentes/carousel/Carousel.js';
import Mapa from './componentes/mapas/Mapa.js';
import Footer from './componentes/footer/Footer.js';
import Reloj from './componentes/reloj/Reloj.js';
import './index.css';
import Steam from './componentes/steam/Steam.js';
import YouTube from './componentes/youtube/Youtube.js';

ReactDOM.render(
  <React.Fragment>
    <Header />
    <Navbar />
    <div className='contenedor'>
    <Carousel />  
    <Mapa/>  
    <Reloj/>
    </div>
    <br></br>
    <div className='contenedor2'>
    <Steam/>
    </div>
    <br></br>
    <div className='contenedor3'>
    <YouTube/>
    </div>
        <Footer />
  </React.Fragment>,
  document.getElementById('root')
);

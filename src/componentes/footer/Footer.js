import React from 'react';
import './Footer.css';
import facebook from '../../assets/img/facebook.png';
import whatsapp from '../../assets/img/whatsapp.png';

const Footer = () => {
  return (
    <footer>
        <div className='container'>
          <div className='social-icons'>
            <a href="https://wa.me/+573197885585" target="_blank"><img src={whatsapp} alt="WhatsApp"/></a>
            <a href="https://www.facebook.com/UniremingtonOficial/?locale=es_LA" target="_blank"><img src={facebook} alt="Facebook"/></a>
          </div>
          <p className='copy'>&copy; Todos los derechos reservados 2023</p>
        </div>
    </footer>
  );
}

export default Footer;

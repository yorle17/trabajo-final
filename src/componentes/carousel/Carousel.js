import React, { useState, useEffect } from 'react';
import './Carousel.css';
import producto1 from '../../assets/img/producto1.jpg';
import producto2 from '../../assets/img/producto2.jpg';
import producto3 from '../../assets/img/producto3.jpg';
import producto4 from '../../assets/img/producto4.jpg';
import producto5 from '../../assets/img/producto5.jpg';

function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) =>
        prevIndex === 4 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel">
      <div className={`carousel-item ${slideIndex === 0 ? 'active' : ''}`}>
        <img src={producto1} alt="Producto 1" />
      </div>
      <div className={`carousel-item ${slideIndex === 1 ? 'active' : ''}`}>
        <img src={producto2} alt="Producto 2" />
      </div>
      <div className={`carousel-item ${slideIndex === 2 ? 'active' : ''}`}>
        <img src={producto3} alt="Producto 3" />
      </div>
      <div className={`carousel-item ${slideIndex === 3 ? 'active' : ''}`}>
        <img src={producto4} alt="Producto 4" />
      </div>
      <div className={`carousel-item ${slideIndex === 4 ? 'active' : ''}`}>
        <img src={producto5} alt="Producto 5" />
      </div>
    </div>
    
  );
}

export default Carousel;

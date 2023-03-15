import React, { useState, useEffect } from 'react';
import './Reloj.css';
function Reloj() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const hours = time.getHours().toString().padStart(2, '0');
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  return (
    <div className="clock">
        <h1>Aprovecha nuestras ofertas antes de que acabe el dia!</h1>
      {24-hours}:{60-minutes}:{60-seconds}
    </div>
  );
}

export default Reloj;

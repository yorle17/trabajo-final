import React, { Component } from 'react';
import './Mapa.css';


class Mapa extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      marker: null,
    };
  }

  componentDidMount() {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDHOslD78Hc1nzmNuiewJZwZBCTmuKDh_Y`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener('load', () => {
      this.crearMapa();
    });
  }

  crearMapa() {
    const ubicacion = { lat: 4.6677871757966285, lng: -74.05668350885807 };

    const mapa = new window.google.maps.Map(document.getElementById('mapa'), {
      zoom: 15,
      center: ubicacion,
    });

    const marcador = new window.google.maps.Marker({
      position: ubicacion,
      map: mapa,
    });

    this.setState({
      map: mapa,
      marker: marcador,
    });
  }

  render() {
    return <div id="mapa" style={{ height: '300px' }} />;
  }
}

export default Mapa;

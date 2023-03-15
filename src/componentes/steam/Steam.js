import React, { Component } from 'react';
import axios from 'axios';
import './Steam.css';

class Steam extends Component {
  constructor(props) {
    super(props);

    this.state = {
      games: []
    };
  }

  componentDidMount() {
    axios.get('https://api.steampowered.com/ISteamApps/GetAppList/v2/')
      .then(response => {
        const games = response.data.applist.apps.slice(0, 5); // obtener solo los primeros 5 juegos
        this.setState({ games });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { games } = this.state;

    return (
      <div className="steam-container">
        <h2>Lista de los primeros 5 juegos en Steam</h2>
        <ul className="steam-list">
          {games.map(game => (
            <li key={game.appid}>{game.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Steam;

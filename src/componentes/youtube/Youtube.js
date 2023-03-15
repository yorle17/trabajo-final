import React, { Component } from 'react';
import './Youtube.css';

class Youtube extends Component {
  render() {
    return (
      <div className="youtube-container">
        <h2>Video de YouTube</h2>
        <div className="video-wrapper">
          <iframe
            title="video de youtube"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            frameBorder="0"
            allowFullScreen
          />
        </div>
      </div>
    );
  }
}

export default Youtube;

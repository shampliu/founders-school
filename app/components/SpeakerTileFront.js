import React from 'react';
import '../scss/SpeakerTile.scss';

export default class SpeakerTileFront extends React.Component {
  render() {
    return(
      <div className="front">
        <p className="speaker-name">{this.props.name}</p>
        <p className="speaker-title">{this.props.title}</p>
        <div className="speaker-img" style={{background: 'url('+this.props.uri+')'}} />
      </div>
    );
  }  
}
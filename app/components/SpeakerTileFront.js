import React from 'react';
import '../scss/SpeakerTile.scss';

export default class SpeakerTileFront extends React.Component {
  render() {
    return(
      <div className="front">
        <p className="speakerName">{this.props.name}</p>
        <p className="speakerTitle">{this.props.title}</p>
        <div className="speakerImg" style={{background: 'url('+this.props.uri+')'}} />
      </div>
    );
  }  
}
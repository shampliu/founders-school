import React from 'react';
import '../scss/SpeakerTile.scss';

export default class SpeakerTile extends React.Component {
  render() {
    return (
      <div className="speaker-tile-wrapper">      
        <a href={this.props.site}>
          <div className="speaker-tile">
            <div className="speaker-img hover" style={{width: '80%', background: 'url('+this.props.logo+')', left: '2px'}} />
            <div className="speaker-img" style={{background: 'url('+this.props.uri+')'}} />
          </div>
        </a>
        <p className="speaker-name">{this.props.name}</p>
        <p className="speaker-title">{this.props.title}</p>
      </div>
    );
  }
}

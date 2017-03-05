import React from 'react';
import '../scss/SpeakerTile.scss';

export default class SpeakerTile extends React.Component {
  render() {
    return (
      <div className="speaker-tile-wrapper">      
        <div className="speaker-tile">
          <div className="speaker-img" style={{background: 'url('+this.props.uri+')'}} /> 
        </div>
        <p className="speaker-name">{this.props.name}</p>
        <p className="speaker-title">{this.props.title}</p>
      </div>
    );
  }
}

/*
ontouchstart allows panes to swap on touch screens
// onTouchStart={this.classList.toggle('hover')}>

on click/focus method to display more info (summary about them) either in a like
dropdown or somehow take over the screen
    - possibly affecting the state of the grid (at least the spacing)
    - so maybe add this into the SpeakerGrid's component
*/
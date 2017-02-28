import React from 'react';
import '../scss/SpeakerTile.scss';

export default class SpeakerTile extends React.Component {
  render() {
    return (
      <div className="speakerTile">
        <p className="speakerName">{this.props.name}</p>
        <p className="speakerTitle">{this.props.title}</p>
        <div className="speakerImg" style={{background: 'url('+this.props.uri+')'}} />
      </div>
    );
  }
}

/*
on click/focus method to display more info (summary about them) either in a like
dropdown or somehow take over the screen
    - possibly affecting the state of the grid (at least the spacing)
    - so maybe add this into the SpeakerGrid's component
*/
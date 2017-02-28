import React from 'react';
import '../scss/SpeakerTile.scss';

export default class SpeakerTileBack extends React.Component {
  render() {
    return(
      <div className="back">
        Hello World!
        <br /><br />
        {this.props.description}
      </div>
    );
  }  
}

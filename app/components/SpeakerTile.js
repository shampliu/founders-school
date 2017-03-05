import React from 'react';
import SpeakerTileFront from './SpeakerTileFront';
import SpeakerTileBack from './SpeakerTileBack';
import '../scss/SpeakerTile.scss';

export default class SpeakerTile extends React.Component {
  render() {
    return (
      <div className="speaker-tile">
        <div className="flipper">
          <SpeakerTileFront name={this.props.name} title={this.props.title}
                            uri={this.props.uri} />
          <SpeakerTileBack description={this.props.description} />
        </div>
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
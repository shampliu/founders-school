import React from 'react';
import SpeakerTile from './SpeakerTile';
import '../scss/SpeakerGrid.scss';
// Can't mix import and module.exports

/*
  'initials': {
    'name': '[name]',
    'title': 'position',
    'description': 'summary',
    'uri': '[path_to_uri]'
  }
*/
const speakers = {
  'ak': {
    'name': 'Ajay Kamat',
    'title': 'Partner, Pejman Mar Ventures',
    'description': '',
    'uri': './assets/headshots/ak.jpg'
  },
  'fb': {
    'name': 'Forrest Browning',
    'title': 'Co-founder, StacksWare',
    'description': '',
    'uri': './assets/headshots/fb.jpg'
  },
  'jb': {
    'name': 'Justin Brezhnev',
    'title': 'Executive Director, Hacker Fund',
    'description': '',
    'uri': './assets/headshots/jb.jpg'
  },
  'kh': {
    'name': 'Kevin Hale',
    'title': 'Partner, Y Combinator',
    'description': '',
    'uri': './assets/headshots/kh.jpg'
  },
  'ma': {
    'name': 'Mahbod Moghadam',
    'title': 'Founder, Rap Genius',
    'description': '',
    'uri': './assets/headshots/ma.jpg'
  },
  'mh': {
    'name': 'Michael Hartl',
    'title': 'Author of Ruby on Rails Tutorial',
    'description': '',
    'uri': './assets/headshots/mh.jpg'
  },
  'pb': {
    'name': 'Peter Brack',
    'title': 'Partner, Mucker Capital',
    'description': '',
    'uri': './assets/headshots/pb.jpg'
  },
  'sf': {
    'name': 'Shahin Farshchi',
    'title': 'Partner, Lux Capital',
    'description': '',
    'uri': './assets/headshots/sf.jpg'
  },
  'sl': {
    'name': 'Stephanie Lin',
    'title': 'Founder, Sandbox: Startup Stories',
    'description': '',
    'uri': './assets/headshots/sl.jpg'
  },
  'tl': {
    'name': 'Tiffany Li',
    'title': 'Investor, Anthos',
    'description': '',
    'uri': './assets/headshots/tl.jpg'
  },
  'tr': {
    'name': 'Tess Rinearson',
    'title': 'Software Engineer, Chain',
    'description': '',
    'uri': './assets/headshots/tr.jpg'
  },
  'vlad': {
    'name': 'Vladimir Tenev',
    'title': 'CEO, Robinhood',
    'description': 'Founder and CEO of Robinhood, gave the keynote talk at last \
    year\'s founders school',
    'uri': './assets/headshots/vlad.png'
  },
};

function createGrid() {
  var grid = [];

  var numSpeakers = 0;
  for (var speaker in speakers) {
    var speakerData = speakers[speaker];
    var key = speakerData['name'];

    grid.push(
      <SpeakerTile key={key} name={key} title={speakerData['title']}
                   uri={speakerData['uri']} />
    );
    numSpeakers++;
  }

  return grid;
}

export default class SpeakerGrid extends React.Component {
  render() {
    return (
      <div className="speakers">
        <div className="speaker-grid-title"><b>Speakers</b></div>
        <div className="speaker-grid">
          {createGrid()}
        </div>
      </div>
    );
  }
}

/*
TODO: make responsive for mobile
*/

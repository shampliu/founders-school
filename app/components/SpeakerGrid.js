import React from 'react';
import SpeakerTile from './SpeakerTile';
import '../scss/SpeakerGrid.scss';
// Can't mix import and module.exports

/*
  'initials': {
    'name': 'name',
    'title': 'position',
    'logo': 'path_to_logo',
    'uri': 'path_to_uri',
    'site': 'link_to_company_website'
  }
*/
const speakers = {
  'ak': {
    'name': 'Ajay Kamat',
    'title': 'Partner, Pejman Mar Ventures',
    'logo': './assets/logos/pear.png',
    'uri': './assets/headshots/ak.jpg',
    'site': 'https://www.pear.vc/',
  },
  'fb': {
    'name': 'Forrest Browning',
    'title': 'Co-founder, StacksWare',
    'logo': './assets/logos/stacksware.png',
    'uri': './assets/headshots/fb.jpg',
    'site': 'https://stacksware.com/',
  },
  'jb': {
    'name': 'Justin Brezhnev',
    'title': 'Executive Director, Hacker Fund',
    'logo': './assets/logos/hackerfund.png',
    'uri': './assets/headshots/jb.jpg',
    'site': 'https://hacker.fund/',
  },
  'kh': {
    'name': 'Kevin Hale',
    'title': 'Partner, Y Combinator',
    'logo': './assets/logos/ycombinator.png',
    'uri': './assets/headshots/kh.jpg',
    'site': 'https://www.ycombinator.com/',
  },
  'ma': {
    'name': 'Mahbod Moghadam',
    'title': 'Founder, Rap Genius',
    'logo': './assets/logos/rapgenius.png',
    'uri': './assets/headshots/ma.jpg',
    'site': 'https://rap.genius.com/',
  },
  'mh': {
    'name': 'Michael Hartl',
    'title': 'Author of Ruby on Rails Tutorial',
    'logo': './assets/logos/ruby.png',
    'uri': './assets/headshots/mh.jpg',
    'site': 'https://www.railstutorial.org/',
  },
  'pb': {
    'name': 'Peter Brack',
    'title': 'Partner, Mucker Capital',
    'logo': './assets/logos/mucker.png',
    'uri': './assets/headshots/pb.jpg',
    'site': 'http://www.muckercapital.com/',
  },
  'sf': {
    'name': 'Shahin Farshchi',
    'title': 'Partner, Lux Capital',
    'logo': './assets/logos/lux.png',
    'uri': './assets/headshots/sf.jpg',
    'site': 'http://www.luxcapital.com/',
  },
  'sl': {
    'name': 'Stephanie Lin',
    'title': 'Founder, Sandbox: Startup Stories',
    'logo': './assets/logos/eztable.png',
    'uri': './assets/headshots/sl.jpg',
    'site': 'https://en.eztable.com/',
  },
  'tl': {
    'name': 'Tiffany Li',
    'title': 'Investor, Anthos',
    'logo': './assets/logos/anthos.png',
    'uri': './assets/headshots/tl.jpg',
    'site': 'https://anthoscapital.com/',
  },
  'tr': {
    'name': 'Tess Rinearson',
    'title': 'Software Engineer, Chain',
    'logo': './assets/logos/chain.png',
    'uri': './assets/headshots/tr.jpg',
    'site': 'https://chain.com/',
  },
  'vlad': {
    'name': 'Vladimir Tenev',
    'title': 'CEO, Robinhood',
    'logo': './assets/logos/robinhood.jpg',
    'uri': './assets/headshots/vlad.png',
    'site': 'https://robinhood.com/',
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
                   logo={speakerData['logo']} uri={speakerData['uri']}
                   site={speakerData['site']} />
    );
    numSpeakers++;
  }

  return grid;
}

export default class SpeakerGrid extends React.Component {
  render() {
    return (
      <div id="speakers" className="speakers">
        <div className="header-title">Speakers</div>
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

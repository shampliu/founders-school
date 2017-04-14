import React from 'react';
import SpeakerTile from './SpeakerTile';
import '../scss/SpeakerGrid.scss';
// Can't mix import and module.exports


const speakers = {
  'eugene': {
    'name': 'Eugene Marinelli',
    'title': 'Co-founder and CTO @ Blend',
    'logo': './assets/logos/2017/bsolid.png',
    'uri': './assets/headshots/2017/EugeneMarinelli.jpg',
    'site': 'https://blend.com',
  },
  'ann': {
    'name': 'Ann Wang',
    'title': 'Co-founder and CEO @ Enrou',
    'logo': './assets/logos/2017/enrou.jpg',
    'uri': './assets/headshots/2017/AnnWang.jpg',
    'site': 'https://enrou.co/',
  },
  'jacob': {
    'name': 'Jacob Jaber',
    'title': 'CEO @ Philz Coffee',
    'logo': './assets/logos/2017/philz.png',
    'uri': './assets/headshots/2017/JacobJaber.jpg',
    'site': 'http://www.philzcoffee.com/',
  },
  'frank': {
    'name': 'Frank Donner',
    'title': 'Founder and CEO @ BLKBX Creative Group',
    'logo': './assets/logos/2017/blkbxsolid.png',
    'uri': './assets/headshots/2017/FrankDonner.jpg',
    'site': 'http://blkbxcg.com/',
  },
  // 'tiffani': {
  //   'name': 'Tiffani Ashley Bell',
  //   'title': 'Executive Director at The Human Utility',
  //   'logo': './assets/logos/2017/humanutility.png',
  //   'uri': './assets/headshots/2017/TiffaniAshleyBell.jpg',
  //   'site': 'https://www.detroitwaterproject.org/',
  // },
  'bryan': {
    'name': 'Bryan Ciambella',
    'title': 'Principal @ B Capital',
    'logo': './assets/logos/2017/bcapital.png',
    'uri': './assets/headshots/2017/BryanCiambella.jpeg',
    'site': 'http://www.bcapgroup.com/',
  },
  'cassidy': {
    'name': 'Cassidy Williams',
    'title': 'Senior Software Engineer @ L4 Digital',
    'logo': './assets/logos/2017/l4solid.png',
    'uri': './assets/headshots/2017/CassidyWilliams.jpg',
    'site': 'https://l4digital.com',
  },
  'john': {
    'name': 'John Baldecchi',
    'title': 'CEO @ Digital Riot Media',
    'logo': './assets/logos/2017/digitalriotmedia.jpg',
    'uri': './assets/headshots/2017/JohnBaldecchi.jpg',
    'site': 'http://www.digitalriotmedia.com/',
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
        <div className="speaker-grid section">
          {createGrid()}
        </div>
      </div>
    );
  }
}

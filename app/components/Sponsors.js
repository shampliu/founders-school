import React, {Component} from 'react';
import '../scss/Sponsors.scss';



export default class Sponsors extends Component {

  render() {
    return (
      <div id="sponsors" className="sponsors">
        <div className="containers">
          <div className="header-title">Sponsors</div>
          <div className="section">
            <div className="sponsors-grid">
              <div className="sponsor-tile"><img src="./assets/sponsors/startupucla.jpg"/></div>
              <div className="sponsor-tile"><img src="./assets/sponsors/blackstone.png"/></div>
              <div className="sponsor-tile" id="reslife"><img src="./assets/sponsors/reslife.png"/></div>
            </div>
            <div className="sponsors-grid lower">
              <div className="sponsor-tile"><img src="./assets/sponsors/upe.png"/></div>
              <div className="sponsor-tile"><img src="./assets/sponsors/acm.png"/></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

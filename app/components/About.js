import React from 'react';
import { Watch } from 'scrollmonitor-react';
require('../scss/About.scss');

export default Watch(class About extends React.Component {
  render() {

    var left_anim;
    var right_anim;
    if (this.props.isInViewport) {
      left_anim = " appear";
      right_anim = " come-in";
    }
    else {
      left_anim = "";
      right_anim = "";
    }

    return (
      <section id="about" className="about-wrapper">
        <div className="container about-container">
          <div className={"left" + left_anim}>
            Where:<br />
            Carnesale Commons<br />
            UCLA, Los Angeles, CA<br /><br />

            When:<br />
            Sunday<br />
            May 7th, 2017<br />
          </div>
          <div className={"right" + right_anim}>
              <h2>UCLA Founder's School</h2>
              <p>Founder's School is the largest university entrepreneurship conference in Southern California hosted by UCLA ACM and UPE. We are bringing together over 160 students, engineers, founders, investors, professionals, and professors to share their own stories and build meaningful connections.</p>
              <br />
              <p>Our theme for this year is EXPLORATION. We believe in starting when you are inspired and not when you are ready. This is the start of a long-term learning experience that we hope everyone will carry on even beyond the event.</p>
          </div>
        </div>
      </section>
    )
  }
});

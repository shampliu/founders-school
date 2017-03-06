import React from 'react';
require('../scss/About.scss');

export default class About extends React.Component {
  render() {
    return (

      <section id="about" className="about-wrapper">
        <div className="container about-container">
          <div className="left">
            asdf
          </div>
          <div className="right">
            <h2>UCLA Founder's School</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. </p>
          </div>
        </div>
      </section>
    )
  }
};

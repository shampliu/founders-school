import React from 'react';
require('../scss/Header.scss');

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-inner">
          <ul className="nav-links">
            <a href="">
              <li>About</li>
            </a>
            <a href="">
              <li>Speakers</li>
            </a>
            <a href="">
              <li>Sponsors</li>
            </a>
            <a href="">
              <li>FAQ</li>
            </a>
            <a href="">
              <li>Schedule</li>
            </a>
          </ul>

        </div>
      </div>
    )
  }
}

class Logo extends React.Component {
  render() {
    return (
      <object className="logo" data="/app/assets/logo.svg" type="image/svg+xml">
        <img src="/app/assets/logo.svg" />
      </object>
    )
  }
}

class HeaderWrapper extends React.Component {
  render() {
    return (
      <div className="header-wrapper">
        <Navbar />
        <Title />
      </div>
    )
  }
}

class Description extends React.Component {
  render() {
    return (
      <div className="description-wrapper">
        <div className="description">
          <h1>Tech Meets <span>Entrepreneurship</span></h1>
          <p>SoCal’s Largest University Entrepreneurship Conference</p>
          <h3><i className="fa fa-calendar-check-o"></i>&nbsp;MAY 7, 9AM - 7PM</h3>
          <button>Apply</button> <button>Sponsor</button>
        </div>
      </div>
    )
  }
}

class Title extends React.Component {
  render() {
    return (
      <div className="title-wrapper">
        <Logo />
        <Description />
      </div>
    )
  }
}

export default class Header extends React.Component {
  render() {
    return (
      <HeaderWrapper />
    )
  }
}

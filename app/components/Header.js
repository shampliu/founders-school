import React from 'react';
require('../scss/Header.scss');

class Navbar extends React.Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-inner">
          <ul className="nav-links">
            <a href="">
              <li>Home</li>
            </a>
            <a href="">
              <li>Sponsors</li>
            </a>
            <a href="">
              <li>Sponsors</li>
            </a>
            <a href="">
              <li>Sponsors</li>
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
      <div className="description">
        
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

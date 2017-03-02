import React from 'react';
require('../scss/Carousel.scss');

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      left: 0
    };
  }
  componentDidMount() {
    let carousel = document.querySelector('section.carousel-wrapper');
    let slide = setInterval(function() {
      // console.log(carousel)
      // console.log(this.state.left)

      this.setState({
        left: this.state.left - 1
      })

      carousel.style.transform = `translateX(${this.state.left}px)`;
    }.bind(this), 30)
    this.setState({
      interval: slide
    })
  }

  render() {
    return (

      <section className="carousel-wrapper">
        <div>
          <img src="/app/assets/carousel-1.png" alt=""/>
        </div>
        <div>
          <img src="/app/assets/carousel-2.png" alt=""/>
        </div>
      </section>
    )
  }
};

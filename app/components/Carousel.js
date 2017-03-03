import React from 'react';
require('../scss/Carousel.scss');

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      interval: null,
      items: [{
        "class" : "one",
        "left" : 0
      }, {
        "class" : "two",
        "left" : 1400
      }, {
        "class" : "one",
        "left" : 2800
      }]
    };
  }

  startInterval() {
    let slide = setInterval(function() {

      let items = this.state.items.map(item => {
        item.left -= 1;
        if (item.left <= -1400) {
          item.class = item.class == "one" ? "two" : "one";
          item.left = 2800;
        }
        return item
      });

      this.setState({ items: items });

    }.bind(this), 30)

    this.setState({
      interval: slide
    })
  }

  componentDidMount() {
    this.startInterval();
    document.querySelector('.carousel-wrapper').addEventListener('mouseover', function() {
      clearInterval(this.state.interval);
    }.bind(this));
    document.querySelector('.carousel-wrapper').addEventListener('mouseout', function() {
      this.startInterval();
    }.bind(this));
  }

  render() {
    return (

      <section className="carousel-wrapper">
        { this.state.items.map((item, i) => {
          return <div key={i} className={item.class} style={{left: item.left + "px"}}></div>
        })}
      </section>
    )
  }
};

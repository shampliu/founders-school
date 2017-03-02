import React, {Component} from 'react';
import SpeakerGrid from './SpeakerGrid';
import Header from './Header';
import About from './About';
import Carousel from './Carousel';
import Footer from './Footer';
import '../scss/Main.scss';


export default class Main extends Component {
  render() {
    return (
      <div className=''>
        <Header />
        <About />
        <SpeakerGrid />
        <Footer />
      </div>
    )
  }
}

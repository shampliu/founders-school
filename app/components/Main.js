var React = require('react');
import Header from './Header';
import About from './About';
require('../scss/Main.scss');

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <About />
      </div>
    )
  }
};

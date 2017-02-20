var React = require('react');
require('../scss/Main.scss');

var Main = React.createClass({
  render: function () {
    return (
      <div className=''>
        Hello World!
        <img src={require('../assets/vladspeaking.jpg')}/>
      </div>
    )
  }
});

module.exports = Main;

import React from 'react';
import '../scss/Footer.scss';

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="left">
            <div className="logo">
              <img src="/assets/logo.svg" alt=""/>
            </div>
            <div className="hosts">
              Hosted by
              <br/>
              <strong>UCLA <a href="">ACM</a> & <a href="">UPE</a></strong>
            </div>
            <div className="social">
              Connect with us
              <br/>
              <a href="https://www.facebook.com/UCLAFoundersSchool/"><i className="fa fa-facebook"></i></a>
              <a href="https://twitter.com/uclafs"><i className="fa fa-twitter"></i></a>
              <a href="mailto:uclafoundersschool@gmail.com?Subject=Thanks%20for%20your%20interest%20in%20Founders%20School%202016!"><i className="fa fa-envelope"></i></a>
            </div>
          </div>
          <div className="right">
            <ul className="inline">
              <a href=""><li>About</li></a>
              <a href=""><li>Speakers</li></a>
              <a href=""><li>Sponsors</li></a>
              <a href=""><li>FAQ</li></a>
              <a href=""><li>Schedule</li></a>
              <a href=""><li><span className="apply">Apply</span></li></a>
            </ul>

          </div>
          <div className="copyright">
            &copy; Copyright 2017 | Made with <span className="heart">♥</span> in Los Angeles
          </div>
        </div>

      </footer>
    )
  }
}

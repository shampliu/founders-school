import React, {Component} from 'react';
import '../scss/Faq.scss';

export default class Sponsors extends Component {

  render() {
    return (
      <div id="faq" className="faq">
        <div className='container'>
          <div className="header-title">Faq</div>
          <div className="section">
            {/*<div id="tba">TBA</div>*/}
            <div className="faq-column-container">
              <ul>
              <li>
                <h3>How do I get there?</h3>
                <p>Directions for getting to Carnesale Commons can be found <a href="http://www.igcmat.com/Carnesale_Commons_Directions.pdf">here.</a></p>
              </li>
              <li>
                <h3>What should I bring?</h3>
                <p>Just yourself, your invite confirmation and anything you might want to take notes with!</p>
              </li>
              <li>
                <h3>How much is this going to cost me?</h3>
                <p>The event will be free, all we ask is that you bring your enthusiasm and an open mind.</p>
              </li>
              <li>
                <h3>How do I get invited?</h3>
                <p>Apply to the event using the apply button at the top of this page or through <a href="https://uclafoundersschool.typeform.com/to/G7VxEU">this Typeform link!</a></p>
              </li>
              <li>
                <h3>I have a question that's not answered here!</h3>
                <p>Send us an <a href="mailto:uclafoundersschool@gmail.com">email</a> or message us on <a href="https://www.facebook.com/UCLAFoundersSchool/">Facebook and we'd be happy to answer</a>!</p>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
/*
            <div className="faq-column-container">
              <div className="faq-column">
                <ul>
                  <li>
                    <h3>How do i get there?</h3>
                  </li>
                  <li>
                    <h3>What should I bring?</h3>
                  </li>
                  <li>
                    <h3>I have a question that's not answered here!</h3>
                  </li>
                </ul>
              </div>
              <div className="faq-column">
                <ul>
                  <li>
                    
                  </li>
                </ul>
              </div>
*/
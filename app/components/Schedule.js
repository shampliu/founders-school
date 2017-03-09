import React from 'react';
import ScheduleDay from './ScheduleDay';
import '../scss/Schedule.scss';

export default class Schedule extends React.Component {
  render() {
    return (
      <div className="container">
        <div id="schedule" className="schedule-container">
          <div className="header-title"><b>Schedule</b></div>
          <div className="schedule-title-description">
            Explore the sessions and map out your FS experience.
          </div>
          <div className="schedule-timeline">
            <ScheduleDay /> {/* Allows for adding multiple days*/}
            <div className="timeline-markers">
              <div className="hour-marker"><span>9 AM</span></div>
              <div className="hour-marker"><span>10</span></div>
              <div className="hour-marker"><span>11</span></div>
              <div className="hour-marker"><span>12 PM</span></div>
              <div className="hour-marker"><span>1</span></div>
              <div className="hour-marker"><span>2</span></div>
              <div className="hour-marker"><span>3</span></div>
              <div className="hour-marker"><span>4</span></div>
              <div className="hour-marker"><span>5</span></div>
              <div className="hour-marker"><span>6</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

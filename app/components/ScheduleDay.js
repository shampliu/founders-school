import React from 'react';
import '../scss/Schedule.scss';

export default class ScheduleDay extends React.Component {
  render() {
    return (
      <div className="schedule-day">
        <div className="timeline-table">
          <div className="timeline-row">
            <div className="timeline-block">Keynote 1</div>
            <div className="timeline-block" style={{width:"29.9%"}}>First Sessions</div>
            <div className="timeline-block">Lunch</div>
            <div className="timeline-block" style={{width:"40%"}}>Second sessions</div>
            <div className="timeline-block" style={{width:"9.5%"}}>Keynote 2</div>
          </div>
          <div className="timeline-row">
            <div className="timeline-block" style={{marginLeft:"10%", width:"29.97%"}}>First Sessions</div>
            <div className="timeline-block" style={{marginLeft:"10%", width:"39.97%"}}>Second sessions</div>
          </div>
        </div>
      </div>
    );
  }
}
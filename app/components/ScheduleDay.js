import React from 'react';
import '../scss/Schedule.scss';

let web_styles = {
  "row1": {
    "first_sessions": {
      width: "29.9%"
    },
    "30" : {
      width: "5%"
    },
    "45": {
      width: "7.5%",
      marginRight: "2.5%"

    },
    "75" : {
      width: "12.5%",
      marginRight: "2.5%"
    }
  },
  "row2": {
    "first_sessions": {
      marginLeft: "10%",
      width: "29.97%"
    },
    "second_sessions": {
      marginLeft: "10%",
      width: "39.97%"
    },
  }
}

let mobile_styles = {
  "row1": {
    "first_sessions": {
      height: "30%"
    },
    "second_sessions": {
      height: "40%"
    },
    "keynote1": {
    },
    "keynote2": {
    }
  },
  "row2": {
    "first_sessions": {
      marginTop: "37.5px",
      height: "30%",
    },
    "second_sessions": {
      marginTop: "37.5px",
      height: "40%",
      backgroundColor: "#C44C60",
    },
  }
}

export default class ScheduleDay extends React.Component {
  render() {
    let active_style = web_styles;
    if (window.innerWidth < 790) {
      active_style = mobile_styles;
    }

    return (
      <div className="schedule-day">
        <div className="timeline-table">
          <div className="timeline-row">
            <div className="timeline-block" style={active_style["row1"]["45"]}>Check-In</div>
            <div className="timeline-block" style={active_style["row1"]["75"]}>Keynote</div>
            <div className="timeline-block" style={active_style["row1"]["45"]}>Breakout Session #1</div>
            <div className="timeline-block">Lunch</div>
            <div className="timeline-block" style={active_style["row1"]["45"]}>Second sessions</div>
            <div className="timeline-block" style={active_style["row1"]["30"]}>Refreshments</div>
            <div className="timeline-block">Closing Speaker</div>
            <div className="timeline-block" style={active_style["row1"]["30"]}>Closing</div>
          </div>
          <div className="timeline-row">
            <div className="timeline-block" style={active_style["row2"]["first_sessions"]}>First Sessions</div>
            <div className="timeline-block" style={active_style["row2"]["second_sessions"]}>Second sessions</div>
          </div>
        </div>
      </div>
    );
  }
}

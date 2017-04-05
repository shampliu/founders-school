import React from 'react';
import '../scss/Schedule.scss';

let web_styles = {
  "row1": {
    "first_sessions": {
      width: "29.9%"
    },
    "second_sessions": {
      width: "39.82%"
    },
    "keynote1": {
      width: "9.86%"
    },
    "keynote2": {
      width: "9.5%"
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
            <div className="timeline-block" style={active_style["row1"]["keynote1"]}>Keynote 1</div>
            <div className="timeline-block" style={active_style["row1"]["first_sessions"]}>First Sessions</div>
            <div className="timeline-block">Lunch</div>
            <div className="timeline-block" style={active_style["row1"]["second_sessions"]}>Second sessions</div>
            <div className="timeline-block" style={active_style["row1"]["keynote2"]}>Keynote 2</div>
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
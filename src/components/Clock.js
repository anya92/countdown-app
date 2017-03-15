import React, { Component } from 'react';

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time < 0) return;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 1000 / 60) % 60);
    const hours = Math.floor(time / (1000 * 60 * 60) % 24);
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    
    this.setState({
      days,
      hours,
      minutes,
      seconds
    });
  }

  leadingZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  render() {
    return (
      <div className="clock">
        <div className="days">{this.state.days} <span>DAYS</span></div>
        <div className="hours">{this.leadingZero(this.state.hours)} <span>HOURS</span></div>
        <div className="minutes">{this.leadingZero(this.state.minutes)} <span>MINUTES</span></div>
        <div className="seconds">{this.leadingZero(this.state.seconds)} <span>SECONDS</span></div>
      </div>
    );
  }
}

export default Clock;

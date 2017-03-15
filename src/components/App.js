import React, { Component } from 'react';
import Clock from './Clock';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deadline: 'April 13, 2017',
      newDeadline: ''
    };
  }

  changeDeadline() {
    this.setState({
      deadline: this.state.newDeadline
    });
  }

  render() {
    return (
      <div className="App">
        <div className="title">Countdown to {this.state.deadline}</div>
        <div className="clock">
          <div className="days">30 Days</div>
          <div className="hours">3 hours</div>
          <div className="minutes">11 minutes</div>
          <div className="seconds">29 seconds</div>
        </div>
        <div>
          <input 
            placeholder="new date"
            onChange={e => this.setState({newDeadline: e.target.value})}
          />
          <button onClick={() => this.changeDeadline()}>Submit</button>
        </div>
      </div>
    )
  }
}

export default App;

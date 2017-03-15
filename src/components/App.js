import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import Clock from './Clock';

class App extends Component {
  constructor() {
    super();

    this.state = {
      deadline: 'December 6, 2017',
      newDeadline: ''
    };
    this.changeDeadline = this.changeDeadline.bind(this);
  }

  formatMonth(str) {
    return `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
  }

  changeDeadline(e) {
    e.preventDefault();
    this.setState({
      deadline: this.state.newDeadline,
      newDeadline: ''
    });
  }

  render() {
    return (
      <div>
        <div className="deadline-date">Countdown to <h1>{this.formatMonth(this.state.deadline)}</h1></div>
          <Clock deadline={this.state.deadline}/>
        <div>
        <Form inline onSubmit={this.changeDeadline}>
          <FormControl
            placeholder="May 26, 2017"
            value={this.state.newDeadline}
            className="deadline-input"
            onChange={e => this.setState({newDeadline: e.target.value})}
            required
          />
          <Button type="submit" className="btn btn-danger">Submit</Button>
        </Form>
        </div>
        
      </div>
    );
  }
}

export default App;

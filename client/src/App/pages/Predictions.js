import React, { Component } from 'react';
import './Pages.css';

const mockResult = 'away'

function calculator(home, away) {
  if (home < 0 || away < 0) {
    return "error";
  }
  let result;
  let userPoints = 0;
  if (home > away) {
    result = 'home';
  }
  if (away > home) {
    result = 'away';
  }
  if (home === away) {
    result = 'draw'
  }
  if (result === mockResult) {
    userPoints += 5;
  }
  return userPoints;
}

class Predictions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      value: '',
    }
  }

  changeHandler = (event) => {
    this.setState({
      homeGoals: event.target.homeGoals,
      awayGoals: event.target.homeGoals,
    });
  }

  render() {
    return (
      <div className="inputFields">
        <div>
          <input type="text" value={this.state.homeGoals} onChange={this.changeHandler} />
          <div>{this.state.homeGoals}</div>
        </div>
        <div>
          <input type="text" value={this.state.awayGoals} onChange={this.changeHandler} />
          <div>{this.state.awayGoals}</div>
        </div>
      </div>
    );
  }
}

export default Predictions;

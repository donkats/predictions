import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <div className="homeWrapper">
        <div className="heading">
          <h1 className="mainTitle">Euro 2021 Predictor</h1>
          <Link to={'./'}>
          <button className="predictButton">
              Back to team info!
          </button>
          </Link>
        </div>

        <div className="predictions">
          <h3 className="subHeading">Your prediction for the next match</h3>
        </div>

        <div className="inputFields">
        <div className="homeGoals">
          <div>Home goals</div>
          <input type="text" value={this.state.homeGoals} onChange={this.changeHandler} />
          <div>{this.state.homeGoals}</div>
        </div>
        <div className="awayGoals">
          <div>Away goals</div>
          <input type="text" value={this.state.awayGoals} onChange={this.changeHandler} />
          <div>{this.state.awayGoals}</div>
        </div>
      </div>
      </div>
    );
  }
}

export default Predictions;

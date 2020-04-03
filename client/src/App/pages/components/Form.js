import React from 'react';
import TextInput from './Textinput.js';
import Button from './Button.js';
import './Form.css';

const mockResult = 'home'
const mockDifference = 1;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userPrediction: '' };
    this.homeChange = this.homeChange.bind(this);
    this.awayChange = this.awayChange.bind(this);
    this.computeWinner = this.computeWinner.bind(this);
    this.getScore = this.getScore.bind(this);
  }

  homeChange(homeValue) {
    this.setState({ home: homeValue });
  }

  awayChange(awayValue) {
    this.setState({ away: awayValue });
  }

  computeWinner() {
    let chosenOutcome = (this.state.home - this.state.away);
    this.setState({ userPrediction: chosenOutcome });
    let finalScore = this.getScore(chosenOutcome);
    this.setState({ finalScore: finalScore });
  }

  getScore(userPrediction) {
    let userScore = 0;
    let outCome = '';
    if (userPrediction > 0) {
      outCome = 'home';
    }
    if (userPrediction < 0) {
      outCome = 'away';
    }
    if (userPrediction === 0) {
      outCome = 'draw';
    }
    if (outCome === mockResult) {
      userScore += 5;
    }
    if (outCome === mockResult && userPrediction === mockDifference) {
      userScore += 2
    }

    return userScore;
  }

  render() {
    return (
      <div>
        <div className="row">
          <TextInput label="Home: " placeholder="Enter home goals" onChange={this.homeChange} />
        </div>
        <div className="row">
          <TextInput label="Away: " placeholder="Enter away goals" onChange={this.awayChange} />
        </div>
        <div className="row">
          <Button label="Submit" onClick={this.computeWinner} />
        </div>
        <div className="row">
          <h5>Your score for this match: {this.state.finalScore}</h5>
        </div>
      </div>
    )
  }
}

export default Form;
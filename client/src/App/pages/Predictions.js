import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Match from './Match.js';
import Form from './components/Form.js'
import './Pages.css';

class Predictions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    fetch('/api/resultsNed')
      .then((response) => response.json())
      .then((data) => this.setState({ results: data, isLoading: false }))
  }

  renderMatches() {
    const { results } = this.state
    const allMatches = results.map((item, id) => <Match key={id} location={item.location} stage={item.stage_name} home={item.home_team_country} away={item.away_team_country} date={item.datetime} />);
    return allMatches[5];
  }

  render() {
    const { results, isLoading } = this.state;
    if (isLoading) {
      return <p>Loading...</p>
    }
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

        <div className="pageWrapper">
          <div className='matches'>
            {this.renderMatches()}
          </div>
          <div className="calculatorWrapper">
            <Form />
          </div>
          </div>
          <div className="explanation">
            <h3>How are the scores calculated?</h3>
            <h4>If you guess correctly which team winst the match/ the match ends in a draw you get 5 points. If you also predict the goal difference correctly you get 2 bonus points.</h4>
          </div>
      </div>
    );
  }
}

export default Predictions;

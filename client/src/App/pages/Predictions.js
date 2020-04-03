import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Match from './Match.js';
import Calculations from './Calculations.js'
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
        <div className='matches'>
          {this.renderMatches()}
        </div>

        <div className="calculatorWrapper">
          <h3 className="calcHeading">Fill in your scores</h3>
          <Calculations />
        </div>

      </div>
    );
  }
}


// class Predictions extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       value: '',
//     }
//   }

//   changeHandler = (event) => {
//     this.setState({
//       homeGoals: event.target.homeGoals,
//       awayGoals: event.target.homeGoals,
//     });
//   }

//   render() {
//     return (
//       <div className="homeWrapper">
//         <div className="heading">
//           <h1 className="mainTitle">Euro 2021 Predictor</h1>
//           <Link to={'./'}>
//           <button className="predictButton">
//               Back to team info!
//           </button>
//           </Link>
//         </div>

//         <div className="predictions">
//           <h3 className="subHeading">Your prediction for the next match</h3>
//         </div>

//         <div className="matchInfo">
//           <


//         </div>

export default Predictions;

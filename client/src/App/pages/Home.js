import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Information from './Information.js';
import './Pages.css';

class Home extends Component {
  render() {
    return (
      <div className="homeWrapper">
        <div className="heading">
          <h1 className="mainTitle">Euro 2021 Predictor</h1>
          <Link to={'./predictions'}>
          <button className="predictButton">
              Predict the scores!
          </button>
          </Link>
        </div>
        <div className="countries">
          <h3 className="subHeading">Participating Countries</h3>
          <Information />
        </div>
      </div>
    );
  }
}
export default Home;
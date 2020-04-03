import React from 'react';
import './Pages.css';

function Calculation (props) {

    return (
        <div className ="calculation">
          <div>
          <input type="text" id="homePrediction"></input>
          <input type="text" id="awayPrediction"></input>
          <button id="submitButton" name="submitButton"> Submit </button>
          </div>
          <p id="result">Result:</p>
        </div>
      );
}
  
export default Calculation;

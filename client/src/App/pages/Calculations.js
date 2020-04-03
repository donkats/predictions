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

// const mockResult = 'away';

// let homePrediction = 1;
// let awayPrediction = 2;

// window.addEventListener("onload", function () {
  //   let userScore = document.querySelector('#result');
  //   let button = document.querySelector('#submitButton');
  //     button.addEventListener("onclick", () => {
  //       let userPoints = calculator(homePrediction, awayPrediction);
  //       userScore.innerText = userPoints;
  //     });
  //   });
    
  //   function calculator(home, away) {
  //     if (home < 0 || away < 0) {
  //       return "error";
  //     }
  //     let result = '';
  //     let userPoints = 0;
  //     if (home > away) {
  //       result = 'home';
  //     }
  //     if (away > home) {
  //       result = 'away';
  //     }
  //     if (home === away) {
  //       result = 'draw'
  //     }
  //     if (result === mockResult) {
  //       userPoints += 5;
  //     }
  //     return userPoints;
  //   }
  
export default Calculation;

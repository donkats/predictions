import React from 'react';
import './Pages.css';

function Match (props) {
    return (
        <div className ="match">
            <h2>Date: 03-07-2019</h2>
            <h3>Location: {props.location}</h3>
            <h3>Stage: {props.stage}</h3>
            <h4>Home team: {props.home}</h4>
            <h4>Away team: {props.away}</h4>
        </div>
      );
}

export default Match;

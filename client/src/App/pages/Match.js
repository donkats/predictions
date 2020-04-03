import React from 'react';
import './Pages.css';

function Match (props) {
    return (
        <div className ="match">
            <h3>Date: 05-04-2020</h3>
            <h4>Location: {props.location}</h4>
            <h4>Stage: {props.stage}</h4>
            <h4>Home team: {props.home}</h4>
            <h4>Away team: {props.away}</h4>
        </div>
      );
}

export default Match;

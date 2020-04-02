import React from 'react';
import './Pages.css';

function Card (props) {
    return (
        <div className ="card">
            <h2><a href={props.url}> {props.title}</a></h2>
            <h3>Fifa Code: {props.url}</h3>
            <h3>Group: {props.group}</h3>
        </div>
      );
}

export default Card;
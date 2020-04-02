import React from 'react';
import './Pages.css';

function Card (props) {
    return (
        <div className ="card">
            <h3>Country: {props.title}</h3>
            <a href={props.url}> {props.url}</a>
            <h5>Group: {props.group}</h5>
        </div>
      );
}

export default Card;
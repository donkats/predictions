import React from 'react';
import './Pages.css';

function Card (props) {
    return (
        <div className ="card">
            <h5>{props.title}</h5>
            <a href={props.url}>{props.url}</a>
        </div>
      );
}

export default Card;
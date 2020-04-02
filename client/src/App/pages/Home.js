import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Information from './Information.js'
import './Pages.css';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="countries">
          <h1>Participating Countries</h1>
          <Information />
        </div>
        <div className="button">
          <h1>Project Home</h1>
          {/* Link to List.js */}
          <Link to={'./list'}>
          <button variant="raised">
              My List
          </button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Home;
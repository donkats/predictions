import React, { Component } from 'react';
import './Pages.css';

class Predictions extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      value: '',
    }
  }
  
  changeHandler = (event) => {
    this.setState({
      name: event.target.name,
      value: event.target.value,
    });
  }

  render () {
    return (
      <div className="inputFields">
        <div>
        <input type="text" value={this.state.name} onChange={this.changeHandler}/>
        <div>{this.state.name}</div>
        </div>
        <div>
        <input type="text" value={this.state.value} onChange={this.changeHandler}/>
        <div>{this.state.value}</div>
        </div>
      </div>
    );        
  }
}

export default Predictions;

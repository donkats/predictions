import React, { Component } from 'react';
import Card from './Card';
import './Pages.css';

class Information extends Component {
  constructor(props){
    super(props);
    this.state = {
      results: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({isLoading: true})
    fetch('/api/teamInfo')
      .then((response) => response.json())
      .then((data) => this.setState({results: data, isLoading: false}))
  }

  renderCountries() {
    const {results} = this.state
    const allCountries = results.map((item, id) => <Card key={id} title={item.country} url={item.fifa_code} group={item.group_letter} />);
    
    return allCountries;
  }

render() {
        const { results, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading...</p>
        }
        return (
          <div className = 'information'>
            {this.renderCountries()}
          </div>
        );
      }
    }

export default Information;
import React, { Component } from 'react';
import Card from './Card';
import './Pages.css';

class List extends Component {
  // Initialize the state
  constructor(props){
    super(props);
    this.state = {
      results: [],
      isLoading: false,
    }
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.setState({isLoading: true})
    fetch('/api/getList')
      .then((response) => response.json())
      .then((data) => this.setState({results: data, isLoading: false}))
  }

  renderCountries() {
    const {results} = this.state
    const allCountries = results.map((item, id) => <Card key={id} title={item.country} url={item.fifa_code}/>);
    return allCountries;
  }

render() {
        const { results, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading...</p>
        }
        return (
          <div className = 'list'>
            {this.renderCountries()}
          </div>
        );
      }
    }

export default List;
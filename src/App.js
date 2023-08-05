/* eslint-disable no-undef */
import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './Components/SearchBox';
import Scroll from './Components/Scroll';

import './App.css';
import {Robot} from './Components/Robot'
class App extends Component {
  constructor() {
    super()
    this.state = {
      Robot: [],
      searchfield: ''
    }
  }

  componentDidMount(){
    this.setState({Robot:Robot})
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() { 
    const filteredRobots = this.state.Robot.filter(Robot =>{
      return Robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
          <CardList Robot={filteredRobots} />
          </Scroll>
            
        </div>
      );
  }
}

export default App;
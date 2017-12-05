import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Pintoo',
      number: 0,
    };
  }

  increment = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  decrement = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div>
        <p> Hello
        { this.state.name }
        { this.state.number }
        </p>
        <button onClick={this.increment}> Increment </button>
        <button onClick={this.decrement}> Decrement </button>
        <Test name = 'Chintoo'/>
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import './index.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: true,
    }
  }

  handleClick = () => {
    this.setState({
      color: !this.state.color
    })
  }
  
  render() {
    return (
    <div>
      <p className={this.state.color ? 'red' : 'blue' }> This is {this.props.name} </p>
      <button onClick={ this.handleClick }> Switch </button>

    </div>
  )}
}

export default Test;

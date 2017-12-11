import React, { Component } from 'react';
import './index.css';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: true,
      text: 'Click to change color'
    }
  }

  handleClick = () => {
    this.setState({
      color: !this.state.color,
      text: this.state.color == true ? "Click to get Red" : "Click to get Blue"
    })
  }

  render() {
    return (
    <div>
      <p className={this.state.color ? 'red' : 'blue' }> This is {this.props.name} </p>
      <button onClick={ this.handleClick }>{ this.state.text }</button>
    </div>
  )}
}


export default Test;

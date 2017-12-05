import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Test from './Test'
import List from './List';

const divStyle = {
  textAlign: 'center',
  marginTop: '50px',
}
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: null,
      numbers: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    let a = this.state.numbers
    a.push(this.state.value)
    // alert('Submitted valus is: ' + this.state.value )
    this.setState({
      numbers: a,
      // numbers: this.state.numbers.concat(this.state.value)
    })
  // event.preventDefault();
    
  }

  render() {
    return (
      <div style= {divStyle}>
        <input type = "text" value = {this.state.value} onChange= {this.handleChange}/>
        <button onClick = {this.handleSubmit}>Submit</button>
        <List numbers={this.state.numbers} name= {this.state.value}/>
      </div>
    );
  }
}


export default App;

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
    this.delete = this.delete.bind(this);

  }
  delete(event){
    this.setState({
      numbers: this.state.numbers.pop(this.state.value)
    })
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
      value: ''
      // numbers: this.state.numbers.concat(this.state.value)
    })
  
  event.preventDefault();
  event.target.reset();
    
  }

  render() {
    return (
      <div style= {divStyle}>
        <form onSubmit={this.handleSubmit}>
          <input type = "text" value = {this.state.value} onChange= {this.handleChange}/>
          <input type = "submit" value= "Submit" />
        </form>
        <List numbers={this.state.numbers} name= {this.state.value}/>
      </div>
    );
  }
}


export default App;

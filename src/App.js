import React, { Component } from 'react';
import List from './List'

const divStyle = {
  textAlign: 'center',
  marginTop: '50px'
}

const h3Style = {
  color: 'red'
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      numbers: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteTask = this.deleteTask.bind(this); //New method created
  }

  handleChange(event){
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event){
    let a = this.state.numbers
    a.push(this.state.value)
    this.setState({
      numbers: a,
    });
    // alert('Submitted value is:' + this.state.value)
  }

  deleteTask(index) {
    console.log(index)
    let numbers = this.state.numbers;
    numbers.splice(index, 1);

    this.setState({
      numbers
    })
  }

  render() {
    return (
      <div style={divStyle}>
        <input type='text' value={this.state.value} onChange={this.handleChange} />
        <button onClick={this.handleSubmit}>Submit</button>
        <h3 style={h3Style}>Listing the form values:</h3>
        <p>
          <List
            numbers={this.state.numbers}
            deleteTask={this.deleteTask}
          />
        </p>
      </div>
    );
  }
}


export default App;

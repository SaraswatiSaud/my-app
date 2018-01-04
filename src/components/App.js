import React, { Component } from 'react';
import ListNotes from './ListNotes';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import { createStore } from 'redux';

const divStyle = {
  marginTop: '70px',
  textAlign: 'center'
}

const h3Style = {
  color: 'red'
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
    this.deleteTask = this.deleteTask.bind(this);

  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    let a = this.state.numbers
    a.push(this.state.value)
    this.setState({
      numbers: a,
      value: ''
    })
  event.preventDefault();
  }

  deleteTask(index) {
    let numbers = this.state.numbers;
    numbers.splice(index, 1);
    this.setState({
      numbers
    });
  }

  render() {
    return (
      <div>
        <div style= {divStyle}>
          <form onSubmit={this.handleSubmit}>
            <textarea type = "text"
                      value = {this.state.value}
                      onChange= {this.handleChange}
                      rows="6"
                      cols="60"
                      placeholder= "Add Your Notes">
            </textarea><br />
            <Button type = "submit" raised color="primary">Submit</Button>
          </form>
          <h3 style={h3Style}>Listing the form values:</h3>
        </div>
        <p>
          <ListNotes
            numbers={this.state.numbers}
            deleteTask={this.deleteTask}
          />
        </p>
      </div>
    );
  }
}

export default App;

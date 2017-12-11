import React, { Component } from 'react';
import ListNotes from './ListNotes';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Math from './Math';
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
    // alert('Submitted valus is: ' + this.state.value )
    this.setState({
      numbers: a,
      value: ''
      // numbers: this.state.numbers.concat(this.state.value)
    })
  event.preventDefault();
  }

  // 1 new method created
  deleteTask(index) {
    let numbers = this.state.numbers;
    numbers.splice(index, 1); // 4. index used to remove which list
                              // and 1 to remove how many element
    this.setState({   // 5. now modify this value to state
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
            deleteTask={this.deleteTask} // 2. called deleteTask method here
          />
        </p>
        <Math />
        {/* <TextField hintText="The hint text can be as long as you want, it will wrap."/><br /> */}
      </div>
    );
  }
}

export default App;

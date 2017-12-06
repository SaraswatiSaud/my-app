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
      // numbers: this.state.numbers.concat(this.state.value)
    })
  }
  // event.preventDefault();

  // 1 new method created
  deleteTask(index) {
    let numbers = this.state.numbers;
    numbers.splice(index, 1); // 4. index used to remove which list and 1 to remove
                              // and 1 to remove how many element
    this.setState({   // 5. now modify this value to state
      numbers
    )};
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
            deleteTask={this.deleteTask} // 2. called deleteTask method here
          />
        </p>
      </div>
    );
  }
}

export default App;

import React from 'react';
import {connect} from 'react-redux';

class Math extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
    };
  }

  increment = () => {
    this.setState({
      value: this.state.value + 1
    });
  }

  decrement = () => {
    this.setState({
      value: this.state.value - 1
    });
  }

  render() {
    const {
      value
    } = this.props;

    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <p>{this.state.value}</p>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const {
    value
  } = state;
  return {
    value
  };
}

const connectedApp = connect(mapStateToProps) (Math);

export {
  connectedApp as Math
};

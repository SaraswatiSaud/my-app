import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import '../css/index.css';

const pStyle = {
  marginLeft: '10px',
  float: 'right',
 }
 const listStyle = {
  backgroundColor: '#f7f7f7',
  marginLeft: '400px',
  marginRight: '400px',
  marginBottom: '10px',
  paddingLeft: '10px',
  paddingRight: '10px',
  height: '40px',
 }

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 2,
    }
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    })
  }

  render() {
    const { currentPage, itemsPerPage } = this.state;

    // logic for displaying list
    const lastIndex = currentPage * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    let numbers = this.props.numbers;
    const currentItems = numbers.slice(firstIndex, lastIndex);

    let listItems = currentItems.map((number, index) =>
      <p style = {listStyle}>{number}</p>
    );

    // logic for displaying page number
    const pageNumber = [];
    for( let i = 1; i <= Math.ceil(numbers.length / itemsPerPage ); i++) {
      pageNumber.push(i);
    }

    const renderPage = pageNumber.map(page => {
      return(
        <li
          key={page}
          id={page}
          onClick={this.handleClick}
        >{page}</li>
      )
    })

    return(
      <div className='page-numbers'>
        <p>{listItems}</p>
        <ul>{renderPage}</ul>
      </div>
    );
  }
}

export default Items;




{/* <Button
  style= {pStyle}
  raised color="accent"
  onClick={() => {this.props.deleteTask(this.props.index)}}
>Delete</Button> */}

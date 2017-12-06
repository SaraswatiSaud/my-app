import React from 'react';

function List(props) {
  let numbers = props.numbers;
  let listItems = numbers.map((number, index) =>
    <li>{number}<button onClick={(event) => {
      event.stopPropagation();
      props.deleteTask(props.index)
    }}>Delete</button></li>
  );
  return(
    <div>{listItems}</div>
  );
}

export default List;

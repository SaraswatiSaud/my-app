import React from 'react';

function List(props) {
  let numbers = props.numbers;
  let listItems = numbers.map((number, index) =>
    // 3. Create button with onClick and pass props with index to define which
    // list is selected
    <li>{number}<button onClick={() => {
      props.deleteTask(props.index)
    }}>Delete</button></li>
  );
  return(
    <div>{listItems}</div>
  );
}

export default List;
// class List extends Component {
//     const name = props.name;
//     const listItems = name.map((list) =>
//         {list}
//     );
//     render(){
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//                 {listItems}
//             </div>
//         );
//     }
// }

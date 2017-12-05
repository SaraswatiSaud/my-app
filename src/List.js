import React, { Component } from 'react';

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

function List(props) {
    let numbers = props.numbers;
    let listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <div>
            <p>{props.name}</p>
            <p>{listItems}</p>
        </div>   
    );
}

export default List;


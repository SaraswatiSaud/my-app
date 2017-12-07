import React from 'react';

// import Delete from 'material-ui-icons/Delete';
import Items from './Items';



function ListNotes(props) {
  // let numbers: props.numbers
  return(
    <div>
        <Items
        numbers= {props.numbers} deleteTask= {props.deleteTask}/>
    </div>
  );

}

export default ListNotes;
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

import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
// import Delete from 'material-ui-icons/Delete';
 
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
 
function ListNotes(props) {
  let numbers = props.numbers;
  let listItems = numbers.map((number, index) =>
    // 3. Create button with onClick and pass props with index to define which
    // list is selected
    <List style = {listStyle}>{number} <Button style= {pStyle} raised color="accent" onClick={() => {
      props.deleteTask(props.index)
    }}>Delete</Button></List>
  );
  return(
    <div>{listItems}</div>
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

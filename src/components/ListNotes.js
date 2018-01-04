import React from 'react';
import Items from './Items';

function ListNotes(props) {
  return(
    <div>
        <Items
          numbers= {props.numbers}
          deleteTask= {props.deleteTask}
        />
    </div>
  );
}

export default ListNotes;

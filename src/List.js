import React, { Component } from 'react';


function List(props) {
    let numbers = props.numbers;
    let listItems = numbers.map((number) =>
        <li>{number}</li>

    );
    return (
        <div>
            {/* <p>{props.name}</p> */}
            <p>{listItems}</p>
        </div>   
    );
}

export default List;


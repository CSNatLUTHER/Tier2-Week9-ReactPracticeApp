import React from 'react';
import {useState} from 'react';
import axios from 'axios'; 

function NewItem(props) {
  const[ newItem, setNewItem ]=useState( {
    item: '',
    description: '',
    price: 0
} );

  const addItem = ()=>{
    console.log( ' in NewItem' );
    axios.post( '/items', newItem ).then( (response )=>{
        console.log( 'back from POST:', response )
        props.getItems();
    }).catch( ( err )=>{
        console.log(err);
        alert( 'nope' );
    })  
  } // end addItem

const addListItem = (event) =>{
  // console.log(event.target.value);
  setNewItem({...newItem, item: event.target.value });
} // end addListItem

const addDescription = (event) =>{
  // console.log(event.target.value);
  setNewItem({...newItem, description: event.target.value });
} // end addDescription

const addPrice = (event) =>{
  // console.log(event.target.value);
  setNewItem({...newItem, price: event.target.value });
} // end addPrice



  // addItem();
    return (
      <div>
        <h2>NewItem</h2>
        <input type="text" placeholder="item" onChange={(event)=> addListItem( event )}></input>
        <input type="text" placeholder="description" onChange={(event)=>addDescription( event )}></input>
        <input type="number" placeholder="price" onChange={(event)=>addPrice( event )}></input>
        <button onClick={ addItem }>Add</button>
      </div>
    );
} //

export default NewItem;
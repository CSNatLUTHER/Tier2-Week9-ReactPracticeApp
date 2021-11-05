import React from 'react';
import axios from 'axios';



function Item(props) {
  const deleteItem = () =>{
    console.log('in deleteItem');
    axios.delete( `/items/${ props.item.id}` ).then( ( response )=>{
        console.log( 'back from DELETE:', response );
        props.getItems();
    }).catch( (err)=>{
        alert( 'blergh' );
        console.log( err );
    })
  }

  const purchaseComplete = () =>{
    console.log('in purchaseComplete');
    axios.put( `/items/${ props.item.id}` ).then( ( response )=>{
        console.log( 'back from PUT:', response );
        props.getItems();
    }).catch( (err)=>{
        alert( 'blergh' );
        console.log( err );
    })
  }
    return (
      <tbody>
        <tr>
          <td>{props.item.id}</td>
          <td>{props.item.item}</td>
          <td>{props.item.description}</td>
          <td>{props.item.price}</td>
          <td onClick={purchaseComplete}>{JSON.stringify(props.item.purchased)}</td>
          <td><button onClick={deleteItem}>Delete Item</button></td>
        </tr>
      </tbody>
    );
}

export default Item;
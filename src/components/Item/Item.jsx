import React from 'react';


function Item(props) {
    return (
      <tbody>
        <tr>
          <td>{props.item.id}</td>
          <td>{props.item.item}</td>
          <td>{props.item.description}</td>
          <td>{props.item.price}</td>
          <td>{JSON.stringify(props.item.purchased)}</td>
        </tr>
      </tbody>
    );
}

export default Item;
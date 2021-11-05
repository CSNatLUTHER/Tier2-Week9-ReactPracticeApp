import React from 'react';
import Item from '../Item/Item';

function ItemList(props) {
    return (
      <div id="itemList">
        <h2>ItemList</h2>
        <table id="itemTable">
          <thead>
            <tr>
              <th>id</th>
              <th>item</th>
              <th>description</th>
              <th>price</th>
              <th>purchased</th>
              <th>delete</th>
            </tr>
          </thead>
            {props.items.map( item => (<Item item={item} key={item.id} getItems={props.getItems}/>)  ) }
        </table>
      </div>
    );
}

export default ItemList;
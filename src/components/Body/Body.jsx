import React from 'react';
import ItemList from '../ItemList/ItemList';
import NewItem from '../NewItem/NewItem';

function Body( props ) {
    return (
      <div>
        <h2>Body</h2>
        <NewItem getItems={props.getItems}/>
        <ItemList items={props.items} getItems={props.getItems}/>
      </div>
    );
}

export default Body;
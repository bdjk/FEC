import React from 'react';
import App from './app.jsx';
import ListEntry from './listEntry.jsx';

const List = props => (
<div className="list">
  {props.items.map( (item, index) => {
      return <ListEntry 
      item={item}
      key ={item.index} 
      index = {props.index}
       />
  })}
  
</div>
)

export default List;
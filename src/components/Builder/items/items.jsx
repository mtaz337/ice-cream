 import React from 'react';
import Item from './item/item';
 const items = ({items}) => {
  const flavours = Object.keys(items);
   return (
    <div >
        <ul> 
          {flavours.map(flavour=>
            <Item key={flavour} name={flavour}/>)}
        </ul>
    </div>
   )
 }
 
 export default items
 
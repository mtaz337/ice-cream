import React from 'react';
import classes from './iceCream.module.css';
import Scoop from './Scoop/Scoop';
const iceCream = ({items}) => {
  const flavours = Object.keys(items);
  return (
    <div>
            <div className={classes.icecream} >
              <p className={classes.cone}></p>
              {/* <!-- <p>Please start adding scoops</p> --> */}
             
              {/* scoops go here */}
              {flavours.map((flavour)=>(
                <Scoop key={flavour} scoop={flavour}/>
              ))}
              <div className={classes.cherry}></div>
            </div>
   </div>
  )
}

export default iceCream

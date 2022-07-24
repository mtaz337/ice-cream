import React from 'react'
import classes from './iceCream.module.css'
import Scoop from './Scoop/Scoop'
const iceCream = () => {
  return (
    <div>
            <div className={classes.icecream} >
              <p className={classes.cone}></p>
              {/* <!-- <p>Please start adding scoops</p> --> */}
             
              {/* scoops go here */}
              <Scoop/>
              <div className={classes.cherry}></div>
            </div>
          </div>
  )
}

export default iceCream

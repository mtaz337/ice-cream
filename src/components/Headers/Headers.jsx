import React from 'react'
import logo from '../../assests/images/logo.svg'
import react from '../../assests/images/react.svg'
import classes from './Headers.module.css'

const Headers = () => {
  return (
    
       <header>
        <div className="container">
          <div>
            <img className={classes.logo} src={logo} alt="Logo" />
          </div>
          <div className="textRight">
            <img src={react} alt="React" class={classes.reactLogo} /><strong
              >React</strong
            >
          </div>
        </div>
      </header>

  )
}

export default Headers

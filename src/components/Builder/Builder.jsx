import React from 'react'
import classes from './Builder.module.css'
import Items from './items/items'
import Modal from './Modal/Modal'
import TotalPrice from './TotalPrice/TotalPrice'
const Builder = ({items}) => {
  return (
        <div>
                <div className={classes.builder}>
                    <h3>Build your own Ice Cream Sundae</h3>
                    <Items items={items}/>
                    <TotalPrice/>
                    <button type="button"  className={[classes.order ,'rounded'].join(' ')}>
                      Add to Cart
                    </button>
                </div>
                  <Modal>
                    modal goes here 
                  </Modal>
        </div>
        //   <!-- builder end -->
  )
}

export default Builder

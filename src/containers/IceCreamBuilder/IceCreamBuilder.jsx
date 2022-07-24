import React, { Component } from 'react';
import Builder from '../../components/Builder/Builder';
import IceCream from '../../components/iceCream/iceCream';
import classes from './IceCreamBuilder.module.css';

export default class IceCreamBuilder extends Component {
    state = {
      items:{
        vanilla: 50,
        chocolate: 60,
        lemon: 40,
        orange: 55,
        strawberry: 75,
      },
      scoops:[],
      totalPrice:0,
    };
  render() {
    const {items} = this.state;
    return (
        <div className={['container', classes.container].join(" ")}>
            <IceCream items={items}/>
            <Builder/>
        </div>
    )
  }
}

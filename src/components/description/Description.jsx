import './Description.css'

import React from 'react'
import Quantity from '../quantity/Quantity'

const Description = ({shoppingCart, setShoppingCart}) => {
  return (
    <div>
      <div className='item-description-container'>
        <h3 className='item-brand'>SNEAKER COMPANY</h3>
        <h1 className='item-name'>Fall Limited Edition Sneakers</h1>
        <p className='item-description'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className='discount-container'>
          <p className='discounted-price'>$125.00</p>
          <div className='discount-percent-container'>
            <p className='discount-percent'>50%</p>
          </div>
        </div>
        <s className='retail-price'>$250.00</s>
      </div>
      <Quantity shoppingCart={shoppingCart} />
    </div>
  )
}

export default Description
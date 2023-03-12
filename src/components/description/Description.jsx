import './Description.css'

import React from 'react'
import Quantity from '../quantity/Quantity'

const Description = () => {
  return (
    <div>
      <div className='item-description-container'>
        <h3 className='item-brand'>SNEAKER COMPANY</h3>
        <h1 className='item-name'>Fall Limited Edition Sneakers</h1>
        <p className='item-description'>These low-profile sneakers are your perfect casual wear companion. Featuring a 
          durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <p className='discounted-price'>$125.00</p>
        <p className='discount-percent'>50%</p>
        <s className='retail-price'>$250.00</s>
      </div>
      <Quantity/>
    </div>
  )
}

export default Description
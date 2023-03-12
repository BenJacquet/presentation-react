import React from 'react'

const Quantity = () => {
  return (
    <div className='quantity-container'>
      <div className='quantity-bar-container'>
        <p className='quantity-bar'>
          <span className='minus' onClick="">-</span>
          <span className='amount'>0</span>
          <span className='plus' onClick="">+</span>
        </p>
      </div>
      <div className='add-to-cart-container'>
        <button type='button' className='add-to-cart-button' onClick="">
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Quantity
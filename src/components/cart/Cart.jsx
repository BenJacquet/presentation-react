import React from 'react'
import CartItem from '../cartitem/CartItem'
import './Cart.css'

function Cart() {
  return (
    <div>
        <div className='cart-card'>Cart</div>
        <CartItem/>
    </div>
  )
}

export default Cart
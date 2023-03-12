import React, { useState } from 'react'
import './CartItem.css'

function CartItem({shoppingCart, setShoppingCart}) {
    function handledelete(){
       const emptyCart = {
        ...shoppingCart,
        amount: 0
        };
        setShoppingCart(emptyCart);
    }

  return (
    <div className='cart-container'>
        <p className='cart-title'>Cart</p>
        <hr />
        <div className='cart-items-container'>
            {shoppingCart.amount === 0
            ? 
            <div key={shoppingCart.itemId}>
            <img src={shoppingCart.image} alt="product" />
            <p>{shoppingCart.name}</p>
            <span>{shoppingCart.price}</span><span> x {shoppingCart.number}</span>
            <p>{shoppingCart.price * shoppingCart.number}</p>
            <button onClick={()=> handledelete(shoppingCart.itemId)}>delete</button></div>
            :
            <p className='empty-cart'>Your cart is empty</p>
            }
        </div>
    </div>
  )
}

export default CartItem
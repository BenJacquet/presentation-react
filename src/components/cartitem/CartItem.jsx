import React, { useState } from 'react'
import ItemIMG from '../../../images/image-product-1-thumbnail.jpg'
import './CartItem.css'

function CartItem({shoppingCart, setShoppingCart}) {
    function handledelete(props){
       const filtredCart = shoppingCart.filter(
            item => (item.itemId!== props)
        );
        setShoppingCart(filtredCart);
    }

  return (
    <div className='cart-container'>
        <p className='cart-title'>Cart</p>
        <hr />
        <div className='cart-items-container'>
            {shoppingCart.map((item) =>
            <div key={item.itemId}>
            <img src={item.image} alt="product" />
            <p>{item.name}</p>
            <span>{item.price}</span><span>x{item.number}</span>
            <p>{item.price * item.number}</p>
            <button onClick={()=> handledelete(item.itemId)}>delete</button></div>
            )}
        </div>
    </div>
  )
}

export default CartItem
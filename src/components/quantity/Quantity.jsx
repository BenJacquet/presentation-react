import React from 'react'
import './Quantity.css'

import { useState } from 'react';
import minus from '../../../images/icon-minus.svg';
import plus from '../../../images/icon-plus.svg';
import cartIcon from '../../../images/icon-cart-white.svg';

const Quantity = ({shoppingCart, setShoppingCart}) => {
  const [itemQuantity, setItemQuantity] = useState(0);

  function handleDecreaseQuantity() {
    if (itemQuantity > 0)
      setItemQuantity(itemQuantity => itemQuantity - 1);
  }

  function handleIncreaseQuantity() {
    setItemQuantity(itemQuantity => itemQuantity + 1);
  }

  function handleAddToCart() {
    const updatedCart = shoppingCart.map(item => {
        return {
          ...item,
          number: item.number + itemQuantity
        };
    });
    setShoppingCart(updatedCart);
    setItemQuantity(0);
  }

  return (
    <div className='quantity-container'>
        <div className='quantity'>
          <button onClick={handleDecreaseQuantity} className='minus'>
            <img src={minus} alt="minus" />
          </button>

          <span className='amount'>{itemQuantity}</span>
          
          <button onClick={handleIncreaseQuantity} className='plus'>
            <img src={plus} alt="plus" />
          </button>
        </div>
        <button className='add-to-cart-button' onClick={handleAddToCart}>
          <span>
            <img src={cartIcon} alt="cart icon" />
          Add to cart
          </span>
        </button>
    </div>
  )
}

export default Quantity
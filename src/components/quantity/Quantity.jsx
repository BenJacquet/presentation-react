import React from 'react'
import './Quantity.css'
import minus from '../../../images/icon-minus.svg';
import plus from '../../../images/icon-plus.svg';
import cartIcon from '../../../images/icon-cart-white.svg';

const Quantity = () => {
  function handleDecreaseQuantity() {
    return (0);
  }

  function handleIncreaseQuantity() {
    return (0);
  }

  function handleAddToCart() {
    return (0);
  }

  return (
    <div className='quantity-container'>
        <div className='quantity'>
          <button onClick={handleDecreaseQuantity} className='minus'>
            <img src={minus} alt="minus" />
          </button>

          <span className='amount'>0</span>
          
          <button onClick={handleIncreaseQuantity} className='plus'>
            <img src={plus} alt="plus" />
          </button>
        </div>
        <button type='button' className='add-to-cart-button' onClick={handleAddToCart}>
          <img src={cartIcon} alt="cart icon" />
          Add to cart
        </button>
    </div>
  )
}

export default Quantity
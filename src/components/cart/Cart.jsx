import './Cart.css'
import React, { useState } from 'react'
import CartIcon from '../../IconComponents/CartIcon'
import Avatar from "../../../images/Avatar.png"

function Cart({shoppingCart, setShoppingCart}) {
    const [cart, setCart] = useState(false);

    function handleDelete(){
        setShoppingCart({
            ...shoppingCart,
            number: 0
        });
    }

    function getCartContent(){
        console.log(shoppingCart.number);
        if (shoppingCart.number > 0) {
            return (
                <div key={shoppingCart.itemId}>
                    <img src={shoppingCart.image} alt="product" />
                    <p>{shoppingCart.name}</p>
                    <span>{shoppingCart.price}</span><span> x {shoppingCart.number}</span>
                    <p>{shoppingCart.price * shoppingCart.number}</p>
                    <button onClick={handleDelete}>delete</button>
                </div>
            );
        }
        return (<p className='empty-cart'>Your cart is empty</p>);
    }

  return (
    <div>
        <div className='menu-container'>
            <CartIcon onSmash= {()=> setCart(!cart)}/> {shoppingCart.number > 0 && <sup>{shoppingCart.number}</sup>}
            <img className='avatar' src={Avatar} alt="hello" />
            {
            cart &&
            <div className='cart-container'>
                <p className='cart-title'>Cart</p>
                <hr />
                <div className='cart-items-container'>
                    {getCartContent()}
                </div>
            </div>
            }
        </div>
    </div>
  )
}

export default Cart
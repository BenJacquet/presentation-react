import React, { useState } from 'react'
import ItemIMG from '../../images/image-product-1-thumbnail.jpg'

function CartItem() {
    const [item,setItem] = useState({
        image : ItemIMG ,
        name : 'Fall limited edtion snakers',
        price : 100,
        number : 5,
    })
  return (
    <div>
        <img src={item.image} alt="product" />
        <p>{item.name}</p>
        <span>{item.price}</span><span>x{item.number}</span>
        <p>{item.price * item.number}</p>
        <button>delete</button>
    </div>
  )
}

export default CartItem
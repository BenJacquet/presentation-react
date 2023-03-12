import React, { useState } from 'react'
import ItemIMG from '../../../images/image-product-1-thumbnail.jpg'
import './CartItem.css'

function CartItem() {
    const [items,setItems] = useState([{
        itemId : 1,
        image : ItemIMG ,
        name : 'Fall limited edtion snakers',
        price : 100,
        number : 5,
    },
    {
        itemId : 2,
        image : ItemIMG ,
        name : 'limited edition ',
        price : 400,
        number : 2,
    }
])
    function handledelete(props){
       const filtredCard = items.filter(
            item => ( item.itemId!== props)
        );
        setItems(filtredCard);
    } 

  return (
    <div>
        {items.map((item) =>
        <div key={item.itemId}>
        <img src={item.image} alt="product" />
        <p>{item.name}</p>
        <span>{item.price}</span><span>x{item.number}</span>
        <p>{item.price * item.number}</p>
        <button onClick={()=> handledelete(item.itemId)}>delete</button></div>
        )}
    </div>
  )
}

export default CartItem
import React from 'react'
import AvatarIcon from '../IconComponents/AvatarIcon'
import CartIcon from '../IconComponents/CartIcon'

const NavBar = () => {
  return (
    <div>
        <nav></nav>
        <a href='#'>Logo</a>
        <a href='#'>Collections</a>
        <a href='#'>Men</a>
        <a href='#'>Women</a>
        <a href='#'>About</a>
        <a href='#'>Contact</a>
        <CartIcon />
        {/* <AvatarIcon/> */}
        {/* <img src="../../images/image-avatar.png" alt="" width="20" height="20"></img> */}

    </div>
  )
}

export default NavBar
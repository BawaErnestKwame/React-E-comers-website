import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../assets/logo.png'
import cart from '../assets/cart_icon.png'

const Navbar = () => {
    const[menu, setMenu] = useState("shop")


  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>

        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link to='/'>Shop</Link> {menu=== "shop" ? <hr/> : <></>}</li>
            <li li onClick={()=>{setMenu("men")}}> <Link to='/men'>Men</Link> {menu=== "men" ? <hr/> : <></>}</li>
            <li li onClick={()=>{setMenu("women")}}> <Link to='/women'>Women </Link>{menu=== "women" ? <hr/> : <></>}</li>
            <li li onClick={()=>{setMenu("kids")}}> <Link to='/kids'>Kids </Link>{menu=== "kids" ? <hr/> : <></>}</li>
        </ul>

        <div className="nav-logo-cart">
            <Link to='/login'><button>Login</button></Link>
            <Link to='/cart'><img src={cart} alt="" /></Link>
            <div className="nav-cart-count">
                0
            </div>
        </div>
        
        
        </div>
  )
}

export default Navbar
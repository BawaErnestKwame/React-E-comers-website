import React from 'react'
import './Footer.css'
import footer from '../assets/logo_big.png'
import instagram from '../assets/instagram_icon.png'
import pintest from '../assets/pintester_icon.png'
import whatsapp from '../assets/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        
     <div className="footer-logo">
        <img src={footer} alt="" />
       <p>SHOPPER</p>
     </div>

     <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Office</li>
        <li>About</li>
        <li>Contact</li>
     </ul>

     <div className="footer-socials-icon">
        <div className="footer-icons-container">
            <img src={instagram} alt="" />
            <img src={pintest} alt="" />
            <img src={whatsapp} alt="" />
        </div>
     </div>

     <div className="footer-copyrighT">
        <hr />

<p>Copyright @ 2023 - All Right Reserved</p>     </div>
        
        </div>
  )
}

export default Footer
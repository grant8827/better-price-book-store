import React from 'react';
import logo from '../../assets/images/better-price-books-logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTiktok, faYoutube, } from "@fortawesome/free-brands-svg-icons"

function Topfooter() {
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', padding:'20px', height:'auto', backgroundColor:'var(--secondary)', color:'white', }}>
    <div style={{margin:'20px', width:'250px'}}>
      <h3 style={{fontSize:'25px', textDecoration:'underline'}}>Website Identity</h3>
      <img style={{width:'180px', marginTop:'20px'}} src={logo} alt='logo'/>
    </div>


    <div style={{width:'300px'}}>
    <h3 style={{fontSize:'25px', textDecoration:'underline'}}>Contact Us</h3>
    <ul >
      <li style={{marginTop:'20px'}}>Shop# 16 Upstairs Taylors Plaza, Runaway Bay St. Ann</li>
<li style={{marginTop:'20px'}}>Call Us: 876-779-0483, 876-201-7605, 876-705-3175</li>
<li style={{marginTop:'20px'}}>Email: betterpricebookstore@gmail.com</li>
<li style={{marginTop:'20px'}}>Opening Hours:
Monday-Friday 8:30am - 5pm
Saturday 9am - 5pm</li>
    </ul>
    </div>


    <div style={{margin:'20px', width:'200px'}}>
    <h3 style={{fontSize:'25px', textDecoration:'underline'}}>Nav Links</h3>
      <ul>
        <li style={{marginTop:'20px'}}> Shop</li>
        <li style={{marginTop:'20px'}}>Cart</li>
        <li style={{marginTop:'20px'}}>Book List</li>
        <li style={{marginTop:'20px'}}>Login</li>
      </ul>
    </div>
 
 
 <div style={{margin:'20px', width:'250px'}}>
 <h3 style={{fontSize:'25px', textDecoration:'underline'}}>Nav Links</h3>
 <div style={{marginTop:'20px'}}> <FontAwesomeIcon style={{ marginRight:"30px"}} icon={faFacebook} size='2x' color='blue' />
 <FontAwesomeIcon style={{ marginRight:"30px"}} icon={faInstagram} size='2x' color='pink'  />
 <FontAwesomeIcon style={{ marginRight:"30px"}} icon={faTiktok} size='2x' />
 <FontAwesomeIcon  icon={faYoutube} size='2x' color='red' />
 </div>
  
 </div>

    </div>
  )
}

export default Topfooter
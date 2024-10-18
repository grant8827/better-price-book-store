import React from 'react';
import logo from '../../assets/images/better-price-books-logo.png'
import '../../App.css'
import '../Header/header.css';
import Navbar from '../Header/Navbar';
import Searchbar from '../Header/Searchbar';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTiktok, faYoutube, } from "@fortawesome/free-brands-svg-icons"
import Cart from '../Header/Cart';
function Header() {
 
  return (
    <div>
      <div className='topHeader'>
<div className='topheadSocialIcons'> <FontAwesomeIcon style={{ marginRight:"30px"}} icon={faFacebook} size='1x' color='blue' />
 <FontAwesomeIcon style={{ marginRight:"30px"}} icon={faInstagram} size='1x' color='pink'  />
 <FontAwesomeIcon style={{ marginRight:"30px"}} icon={faTiktok} size='1x' />
 <FontAwesomeIcon  icon={faYoutube} size='1x' color='white' />
 </div>
<p style={{color:'white'}}>All prices are quoted in Jamaican Dollars and are subject to change without notice.</p>
      </div>
      <nav className='navbar'>
<img style={{width:'200px', borderRadius:'20px'}} src={logo} alt='logo'/>

<Navbar/>
      </nav>
    
      <div className="searchbar">
       
      <Searchbar/>
      <Cart/>
        
      </div>
   

    </div>
  )
}

export default Header

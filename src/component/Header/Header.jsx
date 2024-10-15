import React from 'react'
import '../Header/header.css';
import Navbar from '../Header/Navbar';
import Searchbar from '../Header/Searchbar';
55

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faTiktok, faYoutube } from "@fortawesome/free-brands-svg-icons"
function Header() {
 
  return (
    <div>
      <div className='topHeader'>
<div> <FontAwesomeIcon style={{ marginRight:"30px"}} icon={faFacebook} size='1x' color='blue' />
 <FontAwesomeIcon style={{ marginRight:"30px"}} icon={faInstagram} size='1x' color='pink'  />
 <FontAwesomeIcon style={{ marginRight:"30px"}} icon={faTiktok} size='1x' />
 <FontAwesomeIcon  icon={faYoutube} size='1x' color='white' />
 </div>
<p style={{color:'white'}}>All prices are quoted in Jamaican Dollars and are subject to change without notice.</p>
      </div>
      <Navbar/>
      <Searchbar/>
    </div>
  )
}

export default Header

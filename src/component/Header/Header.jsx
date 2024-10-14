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
<div> <FontAwesomeIcon icon={faFacebook} />
 <FontAwesomeIcon icon={faInstagram} />
 <FontAwesomeIcon icon={faTiktok} />
 <FontAwesomeIcon icon={faYoutube} />
 </div>
<p style={{color:'white'}}>All prices are quoted in Jamaican Dollars and are subject to change without notice.</p>
      </div>
      <Navbar/>
      <Searchbar/>
    </div>
  )
}

export default Header

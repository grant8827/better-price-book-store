import React from 'react';
import logo from '../../assets/images/better-price-books-logo.png'

function Topfooter() {
  return (
    <div style={{display:'flex', justifyContent:'space-around', padding:'20px', height:'auto', backgroundColor:'var(--secondary)', color:'white'}}>
    <div>
      <h3>Website Identity</h3>
      <img style={{width:'180px', marginTop:'20px'}} src={logo} alt='logo'/>
    </div>
    
    <ul style={{width:'300px'}}>
      <h3>Contact Us</h3>
      <li style={{marginTop:'20px'}}>Quick Print Building
40 Top Road Brown's Town St. Ann</li>
<li style={{marginTop:'20px'}}>Call Us: 876-779-0483, 876-201-7605, 876-705-3175</li>
<li style={{marginTop:'20px'}}>Email: betterpricebookstore@gmail.com</li>
<li style={{marginTop:'20px'}}>Opening Hours:
Monday-Friday 8:30am - 5pm
Saturday 9am - 5pm</li>
    </ul>
 
  <p>hello 3</p>
  <p>hello 4</p>

    </div>
  )
}

export default Topfooter
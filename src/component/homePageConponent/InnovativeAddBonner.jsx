import React from 'react'
import bonnerimg2 from '../../assets/images/bonnerimg2.png';
import logo2 from '../../assets/images/innovative-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocation, faMailBulk, faPhone } from '@fortawesome/free-solid-svg-icons';
function InnovativeAddBonner() {
  return (
    <div>
      <div style={{backgroundImage:`url(" ${bonnerimg2}")`,  backgroundSize: "cover",
    backgroundRepeat: "no-repeat", width:'100%', height:'auto', backgroundColor:'rgba(0, 0, 0, 0.8)',  backgroundBlendMode: 'overlay' }}>

        <h1 style={{textAlign:'center', color:'#09d300', padding:'20px 0 50px 0'}}>INNOVATIVE ACCOUNTING & MANAGEMENT SERVICES</h1>
       <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around', alignItems:'center'}}>
        <div style={{margin:'20px',}}><img style={{width:'100%'}} src={logo2} alt='logo'/></div>
        <div style={{margin:'10px'}}>
            <h2 style={{color:'#09d300'}}>Services Offered</h2>
        <ul style={{color:'white'}}>
            <li>General Accounting</li>
            <li>GCT Returns</li>
            <li>Personal & Company Taxes</li> 
            <li>Payroll Services</li>
            <li>Consultations</li>
            <li>Obtaining Tax Compliance</li>
            <li>Audit & Accounting Services</li>
            <li>Company Formation & secretarial Supports</li>
        </ul>
        </div>
        <div style={{display:'block', margin:'10px'}}>
            <h2 style={{color:'#09d300'}}>Contact</h2>
        <div style={{ color:'white', margin:'10px' }}><FontAwesomeIcon style={{ color:'var(--primary)', marginRight:'10PX'}} icon={faLocation} size='1x' color='var(--secondary)'/>Shop#16 Taylor's Plaza Runaway Bay St. Ann</div>
        <div style={{ color:'white', margin:'10px' }}><FontAwesomeIcon style={{ color:'var(--primary)', marginRight:'10PX' }} icon={faMailBulk} size='1x' color='var(--secondary)'/>innovativeacc2018@gmail.com</div>
        <div style={{ color:'white', margin:'10px' }}><FontAwesomeIcon style={{ color:'var(--primary)', marginRight:'10PX' }} icon={faPhone } size='1x' color='var(--secondary)'/>876-779-0483, 876-705-3175, 876-201-7605</div>
        <button>Contact</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default InnovativeAddBonner

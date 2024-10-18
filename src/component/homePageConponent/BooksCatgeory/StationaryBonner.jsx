import React from 'react'
import stationarybg from "../../../assets/images/stationartBonner.png"
function StationaryBonner() {
  return (
    <div className='container'>
    <div className='stationaryImg' style={{backgroundImage:`url("${stationarybg}")`}}>
 <div style={{width:'70%',padding:'50px 0 0 10px', height:'auto', margin:'10px'}}>
      <h3 style={{color:'white', fontSize:'30px', margin:'20px'}}>We have Book for your every needs</h3>
<p  style={{color:'white', margin:'20px'}}>School that but in bulk get a special discount </p>
<button>Shop Now</button>
      </div>
    </div>
    </div>
  )
}

export default StationaryBonner
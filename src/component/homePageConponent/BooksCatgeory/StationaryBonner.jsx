import React from 'react'
import stationarybg from "../../../assets/images/stationartBonner.png"
function StationaryBonner() {
  return (
    <div className='container'>
    <div style={{backgroundImage:`url("${stationarybg}")`, backgroundRepeat:'no-repeat', backgroundSize:'cover',
    height:'300px', margin:'10px'
}}>
<h4>hello</h4>
    </div>
    </div>
  )
}

export default StationaryBonner
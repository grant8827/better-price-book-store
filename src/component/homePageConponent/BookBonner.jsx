import React from 'react'
import bonnerimg from '../../assets/images/bannerimg1.png'

function BookBonner() {
  return (
    <div style={{width:'100%',  display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      <div style={{backgroundImage:`url("${bonnerimg}")`,  backgroundSize: "cover",
    backgroundRepeat: "no-repeat", width:'40%', height:'300px',margin:'20px' }}>
<p>hello from borderfjsryjksyjkrtykwstkwskjwskjwskwsjwksj</p>
      </div>
      <div style={{backgroundImage:`url("${bonnerimg}")`,  backgroundSize: "cover",
    backgroundRepeat: "no-repeat", width:'40%', height:'300px', margin:'20px'}}>
<p>hello from border</p>
      </div>
    </div>
  )
}

export default BookBonner

import React from 'react'
import sidebarimg from '../../assets/images/sidebarimage.png';
import sidebarimg2 from '../../assets/images/sidebarimage2.png';
function SidebarImage() {
  return (
    <div style={{display:'flex',flexWrap:'wrap', width:'60%', justifyContent:'center'}}>


<div style={{width:'100%',marginLeft:'20px', justifyContent:'center', alignItems:'center'}}>

<div style={{backgroundImage: `url("${sidebarimg}")`,  backgroundSize: "cover",
    backgroundRepeat: "no-repeat", width:'100%', height:'240px',  marginBottom:'20px', border:'1px solid black '}}>
<p>hello </p>
            </div>
            <div style={{backgroundImage: `url("${sidebarimg2}")`,  backgroundSize: "cover",
    backgroundRepeat: "no-repeat", width:'100%', height:'240px', marginTop:'20px'}}>
<p>hello </p>
            </div>

</div>

 
       
    </div>
  )
}

export default SidebarImage

import React from 'react'
import sidebarimg from '../../assets/images/sidebarimage.png';
import sidebarimg2 from '../../assets/images/sidebarimage2.png';
function SidebarImage() {
  return (
    <div className='sideBarImage'>


<div style={{width:'100%',marginLeft:'20px', justifyContent:'center', alignItems:'center'}}>

<div className='sidebarImg' style={{backgroundImage: `url("${sidebarimg}")`}}>
 <div style={{width:'70%',padding:'50px 0 0 10px', height:'auto',}}>
      <h3  style={{color:'white'}}>We have Book for your every needs</h3>
<p  style={{color:'white'}}>School that but in bulk get a special discount </p>
<button>Shop Now</button>
      </div>
            </div>
            <div className='sidebarImg' style={{backgroundImage: `url("${sidebarimg2}")`}}>
      <div style={{width:'70%',padding:'50px 0 0 10px', height:'auto', margin:'10px'}}>
      <h3 style={{color:'white'}}>We have Book for your every needs</h3>
<p  style={{color:'white'}}>School that but in bulk get a special discount </p>
<button>Shop Now</button>
      </div>
 
            </div>

</div>

 
       
    </div>
  )
}

export default SidebarImage

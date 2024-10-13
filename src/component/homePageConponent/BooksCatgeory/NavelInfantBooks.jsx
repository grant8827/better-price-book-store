import React from 'react'
import bookimg1 from '../../../assets/images/socialstudiesworkbook5.png'
function NavelInfantBooks() {
  return (
    <div style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>
      <div style={{width:'100%', justifyContent:'center'}}>
      <div className='bookCategory' ><h2>Tertiary Books</h2></div>
        <div style={{display:'flex', flexWrap:'wrap', width:'100%', }}>
        <div className="itemCard">
    
    <img style={{width:'230px', height:'230px'}} src={bookimg1 } alt='productimg'/>
    <p style={{width:'230px', margin:'10px'}}>Jamaica Primary Social Studies Workbook 5</p>
    <button>Show Now</button>
  </div>
  <div className="itemCard">
    
      <img style={{width:'230px', height:'230px'}} src={bookimg1 } alt='productimg'/>
      <p style={{width:'230px', margin:'10px'}}>Jamaica Primary Social Studies Workbook 5</p>
      <button>Show Now</button>
    </div>
    <div className="itemCard">
    
      <img style={{width:'230px', height:'230px'}} src={bookimg1 } alt='productimg'/>
      <p style={{width:'230px', margin:'10px'}}>Jamaica Primary Social Studies Workbook 5</p>
      <button>Show Now</button>
    </div>
        </div>
      </div>
      
      <div style={{width:'50%'}}>
      <div style={{textAlign:'left'}} className='bookCategory' ><h2>Infant</h2></div>
        <div>
        <div style={{display:'flex', margin:'20px'}}>
    
    <img style={{width:'200px', height:'230px'}} src={bookimg1 } alt='productimg'/>
    <div>
    <p style={{width:'230px', margin:'10px'}}>Jamaica Primary Social Studies Workbook 5</p>
    <button>Show Now</button>
    </div>
   
  </div  >
  <div style={{display:'flex', margin:'20px'}}>
    
      <img style={{width:'200px', height:'230px'}} src={bookimg1 } alt='productimg'/>
      <div>
    <p style={{width:'230px', margin:'10px'}}>Jamaica Primary Social Studies Workbook 5</p>
    <button>Show Now</button>
    </div>
    </div>
    <div style={{display:'flex', margin:'20px'}}>
    <img style={{width:'200px', height:'230px'}} src={bookimg1 } alt='productimg'/>
      <div>
    <p style={{width:'230px', margin:'10px'}}>Jamaica Primary Social Studies Workbook 5</p>
    <button>Show Now</button>
    </div>
    </div>
        </div>

      </div>
    </div>
  )
}

export default NavelInfantBooks

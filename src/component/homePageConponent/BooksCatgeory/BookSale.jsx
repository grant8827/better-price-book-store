import React from 'react'

function BookSale() {
  return (
    <div>
        <div style={{width:"100%", justifyContent:'center', alignItems:'center',}}>
        <div className='bookCategory' ><h2>Primary Books</h2></div>
    <div style={{display:'flex', flexWrap:'wrap', alignItems:'center', justifyContent:'center'}}>
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
    </div></div></div>
  )
}

export default BookSale

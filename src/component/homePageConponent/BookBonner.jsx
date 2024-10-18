import React from 'react'
import '../../App.css';
import bonnerimg from '../../assets/images/bannerimg1.png'

function BookBonner() {
  return (
    <div className='bookbonner' >
      <div className='BbonnerImg' style={{backgroundImage:`url("${bonnerimg}")`}}>
      <div style={{width:'70%',padding:'50px 0 0 10px', height:'auto', margin:'10px'}}>
      <h3 style={{color:'white'}}>We have Book for your every needs</h3>
<p>School that but in bulk get a special discount </p>
<button>Shop Now</button>
      </div>
      </div>
      <div className='BbonnerImg' style={{backgroundImage:`url("${bonnerimg}")`}}>
      <div style={{width:'70%',padding:'50px 0 0 10px', height:'auto', margin:'10px'}}>
      <h3 style={{color:'white'}}>We have Book for your every needs</h3>
<p>School that but in bulk get a special discount </p>
<button>Shop Now</button>
      </div>
      </div>
    </div>
  )
}

export default BookBonner

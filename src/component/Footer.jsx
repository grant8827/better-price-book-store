import React from 'react'

function Footer() {
  return (
    <div style={{width:'100%', height:'300px', backgroundColor:'var(--secondary',justifyContent:'space-between' }}>
        <div style={{display:'flex', justifyContent:'space-around', padding:'20px', height:'20px'}}>
        <p>hello 1</p>
      <p>hello 2</p>
      <p>hello 3</p>
      <p>hello 4</p>

        </div>
        <hr></hr>
   <div style={{position:'relative', bottom:'0px', justifyContent:'center', textAlign:'center', padding:'10px'}}> 
    <p>Copyright © All Right Reserved. Better Price Book Store</p>
    </div>
    </div>
  )
}

export default Footer

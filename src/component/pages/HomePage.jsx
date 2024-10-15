import React from 'react'
import '../../App.css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import SidebarImage from '../homePageConponent/SidebarImage';
import SlideWidget from '../homePageConponent/SlideWidget';
import PrimaryBooks from '../homePageConponent/BooksCatgeory/PrimaryBooks';
import BookBonner from '../homePageConponent/BookBonner';
import TertiaryBooks from '../homePageConponent/BooksCatgeory/TertiaryBooks';
import InnovativeAddBonner from '../homePageConponent/InnovativeAddBonner';
import NavelInfantBooks from '../homePageConponent/BooksCatgeory/NavelInfantBooks';
import StationaryBonner from '../homePageConponent/BooksCatgeory/StationaryBonner';
import Topfooter from '../footer/Topfooter';
import InfantBooks from '../homePageConponent/BooksCatgeory/InfantBooks';
function HomePage() {
  return (
    <div>
    <div className="container">
    <div className="SliderHeader">
      <div style={{width:'70%'}}><SlideWidget/></div>
    
      <SidebarImage/>
    </div>
     
  
    </div>
    <div className="container">
      <h2 className='bookCategory'>Primary</h2>
      <PrimaryBooks/>
  
    </div>
    <div className="container">
      
      < BookBonner/>
  
    </div>
    <div className="container">
    <h2 className='bookCategory'>Tertiary</h2>
      < TertiaryBooks/>
  
    </div>
    <InnovativeAddBonner/>

    <div className="container">
    <h2 className='bookCategory'>Navels</h2>

      < NavelInfantBooks/>
  
    </div>
    <div className="container">
    

      < StationaryBonner/>
  
    </div>
    <div className="container">
    <h2 className='bookCategory'>Infant Books</h2>

    < InfantBooks/>

  </div>

  <Topfooter/>
    </div>
  )
}

export default HomePage

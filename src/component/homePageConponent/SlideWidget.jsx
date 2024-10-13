import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from '../../assets/images/slideimage1.png';
import image2 from '../../assets/images/slideimage2.png';
import image3 from '../../assets/images/slideimage3.png';
function SlideWidget() {
  return (
    <div style={{height:'auto ',width:'100%', justifyContent:'center'}}>
    <Carousel  >
                <div style={{width:'80%'}}>
                   <img style={{}} src={image1} alt='slide Image1'/>
                    <p style={{fontSize:'20px'}}className="legend">Better Price variety Books and Stationery Supplies</p>
                </div>
                <div>
                    <img style={{ }} src={image2} alt='slide image2'/>
                   
                    <p style={{fontSize:'20px'}}className="legend">Read More, Learn More, Achieve More </p>
                    
                   
                </div>
                <div>
                    <img style={{ }} src={image3} alt='slide image3'/>
                    <p className="legend"></p>
                </div>
            </Carousel>
            </div>
  )
}

export default SlideWidget
 

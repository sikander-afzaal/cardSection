import React, { useState } from 'react';
import Slider from 'react-slick';
import gNav1 from '../assets/img/p1.jpg';
import gNav2 from '../assets/img/p2.jpg';
import gNav3 from '../assets/img/p3.jpg';
import gNav4 from '../assets/img/p4.jpg';
import gCont1 from '../assets/img/5a.jpg';
import gCont2 from '../assets/img/5b.jpg';
import gCont3 from '../assets/img/5c.jpg';
import gCont4 from '../assets/img/5d.jpg';
import gCont5 from '../assets/img/5e.jpg';
import gCont6 from '../assets/img/5f.jpg';
import gCont7 from '../assets/img/5g.jpg'; 

const Gallery = () => {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const gallerySlid = { 
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1, 
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1, 
            }
          }
           
        ]
    };
    return (
        <div className='gallery-area'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12"> 
                        <Slider
                            {...gallerySlid}
                            asNavFor={nav1}
                            ref={(slider2) => setNav2(slider2)}
                            slidesToShow={4}
                            swipeToSlide={true}
                            focusOnSelect={true}
                            className="gallery-nav"
                        >
                            <div className="gallery-item">
                                <img src={gCont1} alt="nav image" />
                            </div>  
                            <div className="gallery-item">
                                <img src={gCont2} alt="nav image" />
                            </div>  
                            <div className="gallery-item">
                                <img src={gCont3} alt="nav image" />
                            </div>  
                            <div className="gallery-item">
                                <img src={gCont4} alt="nav image" />
                            </div> 
                            <div className="gallery-item">
                                <img src={gCont5} alt="nav image" />
                            </div> 
                            <div className="gallery-item">
                                <img src={gCont6} alt="nav image" />
                            </div> 
                            <div className="gallery-item">
                                <img src={gCont7} alt="nav image" />
                            </div> 
                        </Slider>
                        <Slider 
                            asNavFor={nav2} 
                            ref={(slider1) => setNav1(slider1)}
                            autoplay={false} 
                            className="gallery-content"
                        >
                            <div className="gallery-item">
                                <img src={gCont1} alt="nav image" />
                            </div>  
                            <div className="gallery-item">
                                <img src={gCont2} alt="nav image" />
                            </div>  
                            <div className="gallery-item">
                                <img src={gCont3} alt="nav image" />
                            </div>  
                            <div className="gallery-item">
                                <img src={gCont4} alt="nav image" />
                            </div> 
                            <div className="gallery-item">
                                <img src={gCont5} alt="nav image" />
                            </div> 
                            <div className="gallery-item">
                                <img src={gCont6} alt="nav image" />
                            </div> 
                            <div className="gallery-item">
                                <img src={gCont7} alt="nav image" />
                            </div> 
                        </Slider> 
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Gallery
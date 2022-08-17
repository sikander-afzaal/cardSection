import React, { Component } from "react";
import Slider from "react-slick";
import image1 from '../assets/img/a1.jpg';
import image2 from '../assets/img/a2.jpg';
import image3 from '../assets/img/a3.jpg';
import image4 from '../assets/img/a4.jpg';
import image5 from '../assets/img/a5.jpg';
import image6 from '../assets/img/a6.jpg';
import image7 from '../assets/img/a7.jpg';

const Exclusive = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true, 
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="py-5 exclusive-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6"> 
            <Slider {...settings}>
              <div className="exclusive-item">
                <img src={image1} alt="img" />
              </div>
              <div className="exclusive-item">
                <img src={image2} alt="img" />
              </div>
              <div className="exclusive-item">
                <img src={image3} alt="img" />
              </div>
              <div className="exclusive-item">
                <img src={image4} alt="img" />
              </div>
              <div className="exclusive-item">
                <img src={image5} alt="img" />
              </div>
              <div className="exclusive-item">
                <img src={image6} alt="img" />
              </div>
              <div className="exclusive-item">
                <img src={image7} alt="img" />
              </div>
            </Slider>
          </div>
          <div className="col-lg-5 offset-lg-1 align-self-center">
            <div className="text-center exclusive-text">
                <div className="h2 text-white">
                    Exclusive Vanda NFT
                    ‘Singapore forum’ boxset
                </div>
                <p className="text-white">
                    Each Vanda NFT is paired with Limited Edt’s collaborative adidas Originals Forum 84 Low, also known as the Singapore Forum.
                <br />
                The Singapore Forum comes in a special box set exclusive for this NFT launch that includes a basketball, jersey and an exclusive Singapore Forum collectible trading card.
                </p>
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Exclusive;

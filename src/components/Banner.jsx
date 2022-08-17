import React, { Component } from "react";
import Slider from "react-slick";
/* import gitImg2 from "../assets/img/banner-img1.png"; */
import bannerImg2 from "../assets/img/banner-img2.png";
import Countdown from "./Countdown";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import ReactPlayer from 'react-player'
import video from '../assets/img/slider-v.mp4'
import gitImg from '../assets/img/banner.gif';
import gitImg2 from '../assets/img/banner2.gif';


const Banner = () => {
    const sliders = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    function convertTZ(date, tzString) {
        return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
    }

    const TargetDate = new Date("August 20, 2022 00:00:00")

    return (
        <section className="banner-area">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <Slider {...sliders} className="banner-slider">
                            <div className="banner-item">
                                <div className="row">
                                    <div className="col-lg-6 align-self-center banner-col">
                                        <div className="banner-text text-center">
                                            <h1>Vanda NFT</h1>
                                            <p>
                                                60 unique Vanda NFT will launch on 20 August 2022, alongside an exclusive Limited Edt Singapore Forum boxset. Be part of this exclusive club and redeem your physical collectible!
                                            </p>
                                            <div className="time-count"> 
                                                {/* <Countdown countDownDate={new Date("August 20, 2022 00:00").getTime()} />  */}
                                                <Countdown countDownDate={convertTZ(TargetDate).getTime()} /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 align-self-center ms-auto">
                                        <div className="banner-img">
                                            {/* <ReactPlayer playing={true} loop={true} width="100%" height="100%" url={video} /> */}
                                            <img src={gitImg} alt="banner images" width='100%' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-item">
                                <div className="row">
                                    <div className="col-lg-6 align-self-center banner-col">
                                        <div className="banner-text text-center">
                                            <h1>
                                                Limited edt x adidas originals
                                                <br />  forum 84 low ‘singapore forum’
                                            </h1>
                                            <p>
                                                Inspired by Peranakan heritage - one of the many cultures in vibrant Singapore, this is the third and final collaborative project between adidas Originals and Limited Edt using the Limited Edt-designed batik flower pattern. Only 300 pairs of the Singapore Forum are available globally.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-5 align-self-center ms-auto">
                                        <div className="banner-img">
                                            <img src={gitImg2} alt="banner images" width='100%' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner
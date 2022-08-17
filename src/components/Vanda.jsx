import React, { Component } from "react";
import Slider from "react-slick";

import vandaImag from '../assets/img/vand.png';
import vandaImag1 from '../assets/img/vand-1.jpg';

const Vanda = () => {
    const vandaSlid = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className="vanda-area ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...vandaSlid} className="vanda-slid">
                            <div className="vanda-slid-item"> 
                                <div className="row">
                                    <div className="col-lg-5 align-self-center">
                                        <div className="vanda-img">
                                            <img src={vandaImag} alt="images" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                        <div className="vanda-text">
                                            <div className="h2">Who is Vanda?</div>
                                            <p>
                                                Vanda hails from Singapore; A mythic folk heroine to countless of young women, Vanda was herself saved from a life of bondage and exploitation. 
                                            </p>
                                            <p>
                                                The tragic death of her elder sister changed the course of her life and since then, Vanda became consumed with rage and vowed to exact revenge on those responsible.
                                            </p>
                                            <p>
                                                Little is known about her except that she has a taste for orchids and sneakers. Fresh orchids left next to her footprint of different sneakers has become the signature of this vigilante when she completes her missions...
                                            </p>   
                                        </div>
                                    </div>
                                </div>
                            </div> 
                            <div className="vanda-slid-item"> 
                                <div className="row">
                                    <div className="col-lg-5 align-self-center">
                                        <div className="vanda-img">
                                            <img src={vandaImag1} alt="images" width="100%" />
                                        </div>
                                    </div>
                                    <div className="col-lg-7 align-self-center">
                                        <div className="vanda-text">
                                            <div className="h2">Who is Vanda?</div>
                                            <p>
                                                Looking for guidance and fighting skills, Vanda came across an old martial arts school in Singapore and became well-trained in Kuntao by a mysterious master. She then moved to Japan and trained under several clans in forbidden tai and kenjutsu arts.
                                            </p>
                                            <p>
                                                Coming back to Singapore, Vanda began working under the cover of an air stewardess to travel the world while dismantling crime syndicates exploiting women.
                                            </p>
                                            <p>
                                                What started as a desire to quench her thirst for revenge has unwittingly led her to a path of being a protector.
                                                She has yet to find those responsible for her sister’s death but with every mission, she is getting closer to the truth...
                                            </p> 
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Vanda
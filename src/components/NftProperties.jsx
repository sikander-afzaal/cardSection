import React from 'react';
// import propertiesImg from '../assets/img/banner-img2.png'; 
import propertiesImg from '../assets/img/NFTCard.png'; 
import PropertiesSize from '../assets/img/PropertiesSize.png'; 
import PropertiesBoxset from '../assets/img/PropertiesBoxset.png'; 
import propertiestag from '../assets/img/propertiestag.jpg'; 
import eth from '../assets/img/eth.png';
import { FaListUl } from "react-icons/fa";


const NftProperties = () => {
  return (
    <section className="properties-area">
        <div className="container">
            <div className="row">
                <div className="col-lg-5">
                    <div className="properties-images"> 
                        <img src={propertiesImg} alt="properties images" width="100%"/>
                        {/* <div className="properties-title d-flex align-item-center">
                            <div className="h4">Vanda #54</div>
                            <div className="eth ms-auto">
                                <img src={eth} alt="icon" width={25} height={25} />
                                0.18ETH
                             </div>
                        </div> */}
                    </div>
                    <div className="not">*Price does not include gas fees</div>
                </div>
                <div className="col-lg-7">
                    <div className="properties-content">
                        <div className="h2 mb-lg-4">
                            NFT Properties & traits
                           <br /> reflect shoe size & Availability
                        </div>
                        {/* <span>Example</span> */}
                        <div className="properties-box gap-4 d-none d-lg-block">
                            <img src={propertiestag} alt="" />
                            {/* <FaListUl/>
                            <div className="text">
                                <div className="h5">Properties</div>
                                <p>Textual traits that show up as rectangles</p>
                            </div> */}
                        </div>
                        <p className='check-text'>
                            Check the <u>‘PROPERTIES’</u> tab of the VANDA NFT Collection in Opeasea to find out the different traits attached to each NFT. 
                            <u> The shoe size and availability of the box set are indicated so please check before purchasing.</u>
                        </p>
                        <div className="properties-box gap-4 d-block d-lg-none mt-2">
                            <img src={propertiestag} alt="" /> 
                        </div>
                        <div className="details-content">
                            <div className="details-box">
                                <img src={PropertiesSize} alt="images" />
                                {/* <div className='box-text'>
                                    <div className="h6">SHOE SIZE</div>
                                    <div className="h6 text-black">US 12</div>
                                    <p>5% have this trait</p>
                                </div> */}
                            </div>
                            <div className="details-text">
                                <div className='h6'>‘SHOE SIZE’</div>
                                <p>Reflects the size of the shoe</p>
                            </div>
                        </div>
                        <div className="details-content">
                            <div className="details-box">
                                <img src={PropertiesBoxset} alt="images" />
                                {/* <div className='box-text'>
                                    <div className="h6">BOXSET</div>
                                    <div className="h6 text-black">Unclaimed</div>
                                    <p>70% have this trait</p>
                                </div> */}
                            </div>
                            <div className="details-text"> 
                                <div className='h6'>‘BOXSET’</div>
                                <p>
                                    ‘Unclaimed’ means you can still 
                                   <br /> redeem the boxset via the 
                                   <br /> ‘REDEEM SNEAKER BOXSET’ page
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default NftProperties
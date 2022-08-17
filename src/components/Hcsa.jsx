import React from 'react';
import hcsaI from '../assets/img/hcsa.png';
import hcsaImg from '../assets/img/HCSAPic.jpg';

const Hcsa = () => {
  return (
    <div className="hcsa-area">
        <div className="container">
            <div className="row ">
                <div className="col-lg-6 align-self-center hcsa-col"> 
                    <div className="text-center hcsa-content">
                        <img src={hcsaI} alt="logo" />
                        <div className="d-block d-lg-none pt-4">
                            <img src={hcsaImg} alt="images" width="100%" />
                        </div>
                        <div className="h2">
                            Each sale of the vanda nft will
                           <br /> benefit HCSA community services
                        </div>
                        <p>
                        All proceeds will go towards two of HCSA Community Services Programmes - HCSA Dayspring Residential Treatment Centre, and HCSA Dayspring SPIN (Single Parents INformed, INvolved, INcluded) - which focuses on serving the vulnerable group of abused teenage girls and single parent families.
                        </p>
                        <a href="https://hcsa.org.sg/programmes/" className="btn-lg">Read more on their website</a>
                    </div>
                </div>
                <div className="col-lg-6 align-self-center d-none d-lg-block">
                    <img src={hcsaImg} alt="images" width="100%" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hcsa
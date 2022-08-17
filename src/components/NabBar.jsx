import React from 'react';
import logo from '../assets/img/logo.png';

const NabBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navBar-area">
        <div className="container">
            <div className="logo-nav">
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">
                    <img src={logo} alt="logo" height={35} />
                </a>
            </div>
            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                        <img src={logo} alt="logo" height={35} />
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-4">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">View the Collection</a>
                        </li> 
                        <li className="nav-item">
                            <a className="nav-link" href="#">Redeem Sneaker Boxset</a>
                        </li>  
                    </ul> 
                </div>
            </div>
        </div>
    </nav> 				
  )
}

export default NabBar
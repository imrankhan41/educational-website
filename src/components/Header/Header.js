import React from 'react';
import { Link } from 'react-router-dom';
import   "./Header.css"
import logo from "../../images/logo.png"

const Header = () => {
    return (
        <div className=" header sticky-top">
            <div >
                <img className="img" src={logo} alt=""/>
            </div>
           <div >
           <Link className="header-link" to="/home">Home</Link>
            <Link className="header-link" to="/about">About</Link>
            <Link className="header-link" to="/services">Services</Link>
            <Link className="header-link" to="/contact">Contact</Link>
           </div>
        </div>
    );
};

export default Header;
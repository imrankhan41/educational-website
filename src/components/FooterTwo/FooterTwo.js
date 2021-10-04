import React from 'react';
import { Link } from 'react-router-dom';
import "./FooterTwo.css"
const FooterTwo = () => {
    return (
        <div className="footer-two container-fluid sticky-bottom">
            <div className="footer-two-first">
                <p>Copyright © 2021 All rights reserved. Kajeet, Inc.</p>
            </div>
            <div className="footer-style">
                <Link className="footer-two-side" to="/">Careers</Link>
                <Link className="footer-two-side" to="/">Terms of Service</Link>
                <Link className="footer-two-side" to="/">Privacy Policy</Link>
                <Link className="footer-two-side" to="/">Fair Use Policy</Link>
                <Link className="footer-two-side" to="/">Patents and IP Rights</Link>
                </div>

        </div>
       
    );
};

export default FooterTwo;
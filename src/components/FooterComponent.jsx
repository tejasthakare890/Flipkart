import React from 'react';
import './FooterComponent.css';

function FooterComponent() {
    return (
        <div className="footer">
            <div className="footer-section">
                <h3>ABOUT</h3>
                <ul>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Flikart Stories</li>
                    <li>Press</li>
                    <li>Corporate Information</li>
                </ul>
            </div>
            <div className="footer-section1">
                <h4>GROUP COMPANIES</h4>
                <ul>
                    <li>Myntra</li>
                    <li>Flipkart Wholesale</li>
                    <li>Cleartrip</li>
                    <li>Shopsy</li>
                </ul>
            </div>
            <div className="footer-section2">
                <h3>HELP</h3>
                <ul>
                    <li>Payments</li>
                    <li>Shipping</li>
                    <li>Cancellation & Returns</li>
                    <li>FAQ</li>
                    <li>Report Infringement</li>
                </ul>
            </div>
            <div className="footer-section3">
                <h3>CONSUMER POLICY</h3>
                <ul>
                    <li>Cancellation & Returns</li>
                    <li>Terms Of Use</li>
                    <li>Security</li>
                    <li>Privacy</li>
                    <li>Sitemap</li>
                  
                </ul>
            </div>
            <div className="footer-contact">
                <h3><b>Mail Us:</b> </h3> <h9> Flipkart Internet Private Limited, Buildings Alyssa, Begonia &amp; Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India</h9>
                <p>Registered Office Address: Same as above</p>
                <p>CIN: U51109KA2012PTC066107</p>
                <p>Telephone: 044-45614700 / 044-67415800</p>
            </div>
        </div>
    )
}

export default FooterComponent;

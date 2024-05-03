import React from 'react';
import './Footer.css';

const Footer = () => (
  <div className="footer">
    <div className="footer-content">
      <p className="footer-logo">ECom <br/> Shop smarter, live better!</p>
      <div  className='footer-link'>
        <div>
        <div className="footer-link-data">
          <h2 >Useful Links</h2>
          <ul>
          <li> Blog</li>
          <li>Instructor</li>
          <li>Events</li>
          </ul>
          
      </div>
        </div>
        <div>
        <div className="footer-links">
          
          <h2 >Our Company</h2>
          <ul>
          <li> Blog</li>
          <li>Instructor</li>
          <li>Events</li>
          </ul>
      </div>
        </div>
        <div>
        <div className="footer-links">
          <h2 >Contact Us</h2>
          <ul>
          <li> Blog</li>
          <li>Instructor</li>
          <li>Events</li>
          </ul>
      </div>
        </div>
      </div>
     
      
     
    </div>
    <div className="footer-copyright">
      <p>©2024 E.com. All rights reserved.</p>
      <p>
        Get In Touch: <br/>
        503 10th Ave, NY 10018, USA <br/>
        +123 00 0000 456
      </p>
    </div>
  </div>
);

export default Footer;
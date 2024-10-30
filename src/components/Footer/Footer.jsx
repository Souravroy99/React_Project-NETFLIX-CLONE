import React from 'react';
import "./Footer.css";
import YT_icon from "../../assets/youtube_icon.png"
import TW_icon from "../../assets/twitter_icon.png"
import INSTA_icon from "../../assets/instagram_icon.png"
import FB_icon from "../../assets/facebook_icon.png"



function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={FB_icon} alt="" />
        <img src={INSTA_icon} alt="" />
        <img src={TW_icon} alt="" />
        <img src={YT_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 1997-2024 Netflix, Inc.</p>
    </div>
  )
}

export default Footer
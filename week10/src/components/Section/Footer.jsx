import React from 'react'
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import bar from "../../assets/img/home/bar.svg"
import { Link } from "react-router-dom";


function Footer() {
  return (
    <div className="footer">
      <div className="footer_sns">
        <FaTwitter />
        <FaInstagram />
        <FaYoutube />
      </div>

      <img src={bar} alt="" className='bar'/>
      <div className="footer_info">
        <p>support@openui.design</p>
        <p>+60 825 876</p>
        <p>08:00 - 22:00 - Everyday</p>
      </div>

      <img src={bar} alt="" className='bar'/>

      <div className="footer_menu">
        <Link to="/Story">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </div>

      <div className="footer_copyright">
        Copyright© OpenUI All Rights Reserved.
      </div>
    </div>
  );
}

export default Footer;
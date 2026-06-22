import React from 'react'
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa"
import call from '../../../src/assets/img/menu/Call.svg'
import location from '../../../src/assets/img/menu/Location.svg'
import forword from '../../../src/assets/img/menu/Forward.svg'
import bar from '../../../src/assets/img/home/bar.svg'

const Menu = () => {
  return (
    <div className="wrap">
      <div className="menu_wrap">
        <Link to="/">✕</Link>
        <div className="menu_tab">
            <p className="active">WOMEN</p>
            <p>MAN</p>
            <p>KIDS</p>
        </div>
        <div className="tab_line">
            <div className="active_line">
                <span className="diamond"></span>
            </div>
            <div className="inactive_line"></div>
            <div className="inactive_line"></div>
        </div>
        <div className="menu_category">
            <div className="menu_item">
            <span>New</span>
            <img src={forword} alt="" />
            </div>

            <div className="menu_item">
            <span>Apparel</span>
            <img src={forword} alt="" />
            </div>

            <div className="menu_item">
            <span>Bag</span>
            <img src={forword} alt="" />
            </div>

            <div className="menu_item">
            <span>Shoes</span>
            <img src={forword} alt="" />
            </div>

            <div className="menu_item">
            <span>Beauty</span>
            <img src={forword} alt="" />
            </div>

            <div className="menu_item">
            <span>Accessories</span>
            <img src={forword} alt="" />
            </div>
        </div>

        <div className="menu_contact">
            <div className="call">
                <img src={call} alt="" />
                <p>(786) 713-8616</p>
            </div>
            <div className="location">
                <img src={location} alt="" />
                <p>Store locator</p>
            </div>
            
        </div>

        <img src={bar} alt="" className='bar'/>

        <div className="menu_sns">
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
        </div>
      </div>
    </div>
  )
}

export default Menu

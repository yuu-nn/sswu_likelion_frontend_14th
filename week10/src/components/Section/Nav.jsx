import React from 'react'
import Menu from '../../assets/img/nav/Menu.svg'
import Logo from '../../assets/img/nav/Logo.svg'
import Search from '../../assets/img/nav/Search.svg'
import bag from '../../assets/img/nav/bag.svg'
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const location = useLocation();

  return (
    <div>
      <div className={`header ${location.pathname === "/" ? "home_nav" : ""}`}>
      
        <Link to="/Menu">
            <img src={Menu} alt="menu" className='nav_menu' />
        </Link>

        <Link to="/">
            <img src={Logo} alt="Logo" className='logo' />
        </Link>

        <Link to="/Search">
            <img src={Search} alt="Search" className='nav_search'/>
        </Link>

        <Link to="/Checkout">
            <img src={bag} alt="bag" className='nav_bag' />
        </Link>
      
      </div>
    </div>
  )
}

export default Nav
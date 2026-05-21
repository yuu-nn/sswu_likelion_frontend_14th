import React, { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'


import logo from '../../assets/img/logo_pink.png'
import map from '../../assets/img/map.png'
import search from '../../assets/img/search.png'
import mypage from '../../assets/img/mypage.png'
import shopping from '../../assets/img/shopping.png'


import nav1 from '../../assets/img/nav1.png'
import nav2 from '../../assets/img/nav2.png'
import nav3 from '../../assets/img/nav3.png'
import nav4 from '../../assets/img/nav4.png'
import nav5 from '../../assets/img/nav5.png'

const Nav = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bgImages = [nav1, nav2, nav3, nav4, nav5];


  useEffect(() => {
    const timer = setTimeout(() => {
      handleNext();
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 4 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === 4 ? 0 : prev + 1));
  };

  return (
    <div className="nav_wrap">
        
        
        <div className="slide_window">
          <div 
            className="slide_track" 
            style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
          >
            {bgImages.map((img, index) => (
              <div 
                key={index} 
                className="slide_item" 
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>

        
        <img src={logo} alt="" className='logo'/>
        <div className="list">
            <p>WOMEN</p>
            <p>MEN</p>
            <p>KIDS</p>
            <p>|</p>
            <p>TENNIS</p>
            <p>BRAND</p>
        </div>
        <div className="list_ing">
            <img src={map} alt="" />
            <img src={search} alt="" />
            <img src={mypage} alt="" />
            <img src={shopping} alt="" />
        </div>

        
        <div className="interrun">
            <h1>24 NEW 인터런</h1>
            <span>자세히 보기</span>
        </div>

        <div className="slider_controls">
          <div className="progress_bar_container">
            <div 
              className="active_bar"
              style={{ 
                width: '20%', 
                left: `${currentIndex * 20}%` 
              }}
            />
          </div>

          <div className="arrow_buttons">
            <button onClick={handlePrev} className="arrow_btn"><FaChevronLeft /></button>
            <button onClick={handleNext} className="arrow_btn"><FaChevronRight /></button>
          </div>
        </div>

    </div>
  )
}

export default Nav;
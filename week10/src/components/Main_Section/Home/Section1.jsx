import React from 'react'
import home_section1 from '../../../assets/img/home/image 10.png'

const Section1 = () => {
  return (
    <div>
        <div className="wrap">
            <div className="homesec1_wrap">
                <img src={home_section1} alt="home_section1" />
                <div className="homesec1_word">
                    <h1 className='Luxury'>LUXURY</h1>
                    <h1 className='Fashion'>FASHION</h1>
                    <h1 className='ACCESSOR'>& ACCESSOR</h1>
                    <h1 className='IES'>IES</h1>
                </div>
                <div className="homesec1_btn">
                    <h3>EXPLORE COLLECTION</h3>
                </div>
            </div>
            
            
        </div>
      

    </div>
  )
}

export default Section1

import React from 'react'
import bar from '../../../assets/img/home/bar.svg'
import sec5_img1 from '../../../assets/img/home/sec2_img2.png'
import sec5_img2 from '../../../assets/img/home/sec5_img2.png'

const Section5 = () => {
  return (
    <div className="wrap">
        <div className="homesec5_wrap">
            <h3>JUST FOR YOU</h3>
            <img src={bar} alt="" className='bar'/>
            <div className="homesec5_main">
                <div className="homesec5_img1">
                    <img src={sec5_img1} alt="" className='sec5_img1'/>
                    <p>Harris Tweed Three button</p>
                    <p>Jacket</p>
                    <p className='price'>$120</p>
                </div>
                <div className="homesec5_img2">
                    <img src={sec5_img2} alt="" className='sec5_img2' />
                    <p>Cashmere </p>
                    <p>Jacket</p>
                </div>
            </div>
            <div className="slider_dot">
                <span className="active">◆</span>
                <span>◇</span>
                <span>◇</span>
            </div>
            <div className="sec5_trending">
                <h2>@TRENDING</h2>
                <div className="trending_top">
                    <span>#2021</span>
                    <span>#spring</span>
                    <span>#collection</span>
                    <span>#fall</span>
                </div>
                <div className="trending_bot">
                    <span>#dress</span>
                    <span>#autumncollection</span>
                    <span>#openfashion</span>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Section5

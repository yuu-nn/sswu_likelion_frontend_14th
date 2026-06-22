import React from 'react'
import bar from '../../../assets/img/home/bar.svg'
import sec2_img1 from '../../../assets/img/home/sec2_img1.png'
import sec2_img2 from '../../../assets/img/home/sec2_img2.png'
import sec2_img3 from '../../../assets/img/home/sec2_img3.png'
import sec2_img4 from '../../../assets/img/home/sec2_img4.png'
import { Link } from "react-router-dom";

const Section2 = () => {
  return (
    <div>
      <div className="wrap">
        <div className="homesec2_wrap">
            <h3>NEW ARRIVAL</h3>
            <img src={bar} alt="bar" className='bar'/>
            <div className="homesec2_menu">
                <h4 className="active">All</h4>
                <h4>Apparel</h4>
                <h4>Dress</h4>
                <h4>Tshirt</h4>
                <h4>Bag</h4>
            </div>
            <div className="homesec2_top">
                <div className="img1">
                    <img src={sec2_img1} alt="sec2_img1"/>
                    <p>21WN reversible angora</p>
                    <p>cardigan</p>
                    <p className='price'>$120</p>
                </div>
                <div className="img2">
                    <img src={sec2_img2} alt="sec2_img2"/>
                    <p>21WN reversible angora</p>
                    <p>cardigan</p>
                    <p className='price'>$120</p>
                </div>
            </div>
        
            <div className="homesec2_bot">
                <div className="img3">
                    <img src={sec2_img3} alt="sec2_img3"/>
                    <p>21WN reversible angora</p>
                    <p>cardigan</p>
                    <p className='price'>$120</p>
                </div>
                <div className="img4">
                    <img src={sec2_img4} alt="sec2_img4"/>
                    <p>Oblong bag</p>
                    <p className='price'>$120</p>
                </div>
            </div>
            <Link to="/category" className="explore_more">Explore More →</Link>
        </div>
      </div>
    </div>
  )
}

export default Section2

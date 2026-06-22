import React from 'react'
import Logo from '../../../assets/img/nav/Logo.svg'
import bar from '../../../assets/img/home/bar.svg'
import sec6_img1 from '../../../assets/img/home/sec6_img1.svg'
import sec6_img2 from '../../../assets/img/home/sec6_img2.svg'
import sec6_img3 from '../../../assets/img/home/sec6_img3.svg'
import sec6_img4 from '../../../assets/img/home/sec6_img4.svg'
import sec6_img5 from '../../../assets/img/home/sec6_img5.svg'


const Section6 = () => {
  return (
    <div className="wrap">
      <div className="homesec6_wrap">
        <img src={Logo} alt="" className='homesec6_logo'/>
        <p>Making a luxurious lifestyle accessible<br/>for a generous group of women is our<br/>daily drive.</p>
        <img src={bar} alt="" className='bar'/>
        <div className="homesec6_top">
            <div className="homesec6_img1">
                <img src={sec6_img1} alt="" />
                <p>Fast shipping. Free on<br/>orders over $25.</p>
            </div>
            <div className="homesec6_img2">
                <img src={sec6_img2} alt="" />
                <p>Sustainable process<br/>from start to finish.</p>
            </div>
        </div>
        <div className="homesec6_bot">
            <div className="homesec6_img3">
                <img src={sec6_img3} alt="" />
                <p>Unique designs<br/>and high-quality materials.</p>
            </div>
            <div className="homesec6_img4">
                <img src={sec6_img4} alt="" />
                <p>Fast shipping.<br/>Free on orders over $25.</p>
            </div>
        </div>
        <img src={sec6_img5} alt="" className='sec6_img5'/>
      </div>
    </div>
  )
}

export default Section6

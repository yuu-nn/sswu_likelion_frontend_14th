import React from 'react'
import insta from '../../../assets/img/home/insta.png'
import sec7_img1 from '../../../assets/img/home/sec7_img1.png'
import sec7_img2 from '../../../assets/img/home/sec7_img2.png'
import sec7_img3 from '../../../assets/img/home/sec7_img3.png'
import sec7_img4 from '../../../assets/img/home/sec7_img4.png'

const Section7 = () => {
  return (
    <div className="wrap">
      <div className="homesec7_wrap">
        <h3>FOLLOW US</h3>
        <img src={insta} alt="" className='insta'/>
        <div className="homesec7_top">
            <img src={sec7_img1} alt="" />
            <img src={sec7_img2} alt="" />
        </div>
        <div className="homesec7_bot">
            <img src={sec7_img3} alt="" />
            <img src={sec7_img4} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section7

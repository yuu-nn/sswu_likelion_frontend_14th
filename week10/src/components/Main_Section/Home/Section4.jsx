import React from 'react'
import sec3_img1 from '../../../assets/img/home/sec3_img1.png'
import sec3_img2 from '../../../assets/img/home/sec3_img2.png'
import sec3_Video from '../../../assets/img/home/sec3_Video.png'


const Section4 = () => {
  return (
    <div>
      <div className="wrap">
        <div className="homesec4_wrap">
          <h3>COLLECTIONS</h3>
          <img src={sec3_img1} alt="" />
          <img src={sec3_img2} alt="" className='sec3_img2'/>
          <img src={sec3_Video} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section4

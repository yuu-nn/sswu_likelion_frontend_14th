import React from 'react'
import img1 from '../../../../src/assets/img/product/img1.png'
import list from '../../../../src/assets/img/product/list.png'
import Export from '../../../../src/assets/img/product/Export.png'
import Plus from '../../../../src/assets/img/product/Plus.png'
import Heart from '../../../../src/assets/img/product/Heart.png'

const Section1 = () => {
  return (
    <div className="wrap">
      <div className="productsec1_wrap">
        <img src={img1} alt="" />
        <img src={list} alt="" className='list'/>
        <div className="Description">
            <span className='mohan'>MOHAN</span>
            <img src={Export} alt="" />
            <p>Recycle Boucle Knit Cardigan Pink</p>
            <p className='price'>$120</p>
            <div className="btn">
              <span>Color</span>
              <div className='black'></div>
              <div className='orange'></div>
              <div className='gray'></div>
              <span className='size'>Size</span>
              <div className="size_wrap">
                <span className='s'>S</span>
                <span className='m'>M</span>
                <span className='l'>L</span>
              </div>
            </div>
            
        </div>
        <div className="addbar">
            <img src={Plus} alt="" />
            <p>ADD TO BASKET</p>
            <img src={Heart} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Section1

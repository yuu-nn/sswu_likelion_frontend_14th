import React from 'react'
import DoNotBleach from '../../../../src/assets/img/product/Do Not Bleach.png'
import DoNotTumbleDry from '../../../../src/assets/img/product/Do Not Tumble Dry.png'
import DoNotWash from '../../../../src/assets/img/product/Do Not Wash.png'
import Temperature from '../../../../src/assets/img/product/Iron Low Temperature.png'
import Shipping from '../../../../src/assets/img/product/Shipping.png'
import Tag from '../../../../src/assets/img/product/Tag.png'
import Refresh from '../../../../src/assets/img/product/Refresh.png'

const Section2 = () => {
  return (
    <div className="wrap">
        <div className="productsec2_wrap">
            <h5>MATERIALS</h5>
            <p>We work with monitoring programmes to ensure<br/>compliance with safety, health and quality<br/>standards for our products. </p>
            <h5>CARE</h5>
            <p>To keep your jackets and coats clean, you only<br/>need to freshen them up and go over them with a<br/>cloth or a clothes brush. If you need to dry clean<br/>a garment, look for a dry cleaner that uses<br/>technologies that are respectful of the<br/>environment.</p>
        
            <div className="detail">
                <img src={DoNotBleach} alt="" />
                <span>Do not use bleach</span>
            </div>
            <div className="detail">
                <img src={DoNotTumbleDry} alt="" />
                <span>Do not tumble dry</span>
            </div>
            <div className="detail">
                <img src={DoNotWash} alt="" />
                <span>Do not use bleach</span>
            </div>
            <div className="detail">
                <img src={Temperature} alt="" />
                <span>Iron at a maximum of 110ºC/230ºF</span>
            </div>
            <h5>CARE</h5>
            <div className="care">
                <img src={Shipping} alt="" />
                <div className="care_ex">
                    <p>Free Flat Rate Shipping</p>
                    <p>Estimated to be delivered on</p> 
                    <p>09/11/2021 - 12/11/2021.</p>
                    <hr />
                </div>
                
            </div>
            <div className="care">
                <img src={Tag} alt="" />
                <div className="care_ex">
                    <p>COD Policy</p>
                    <hr/>
                </div>
                
            </div>
            <div className="care">
                <img src={Refresh} alt="" />
                <div className="care_ex">
                    <p>Return Policy</p>
                </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Section2

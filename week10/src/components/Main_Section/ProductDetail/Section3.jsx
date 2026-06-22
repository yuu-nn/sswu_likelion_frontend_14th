import React from 'react'
import img2 from '../../../../src/assets/img/product/img2.png'
import img3 from '../../../../src/assets/img/product/img3.png'
import bar from '../../../../src/assets/img/home/bar.svg'

const Section3 = () => {
  return (
    <div className="wrap">
        <div className="productsec3_wrap">
            <h1>YOU MAY ALSO LIKE</h1>
            <img src={bar} alt="" />

            <div className="product_top">
                <div className="prdt1">
                    <img src={img2} alt="" />
                    <p>21WN</p>
                    <p>reversible angora cardigan</p>
                    <p>$120</p>
                </div>
                <div className="prdt2">
                    <img src={img3} alt="" />
                    <p>lamerei</p>
                    <p>reversible angora cardigan</p>
                    <p>$120</p>
                </div>
            </div>
            <div className="product_bot">
                <div className="prdt1">
                    <img src={img2} alt="" />
                    <p>21WN</p>
                    <p>reversible angora cardigan</p>
                    <p>$120</p>
                </div>
                <div className="prdt2">
                    <img src={img3} alt="" />
                    <p>lamerei</p>
                    <p>reversible angora cardigan</p>
                    <p>$120</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Section3

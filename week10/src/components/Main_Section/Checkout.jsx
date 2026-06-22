import React from 'react'
import img from '../../../src/assets/img/category/img2.png'
import Voucher from '../../../src/assets/img/checkout/Voucher.svg'
import Delivery from '../../../src/assets/img/checkout/Door to Door Delivery.svg'
import bag from '../../../src/assets/img/nav/bag.svg'
import bar from '../../../src/assets/img/home/bar.svg'

const Checkout = () => {
  return (
    <div>
      <div className="wrap">
        <h1>CHECKOUT</h1>
        <img src={bar} alt="" />
        <div className="checkout">
            <img src={img} alt="" />
            <p>LAMEREI</p>
            <p>Recycle Boucle Knit Cardigan Pink</p>
            <span>-</span>
            <span>1</span>
            <span>+</span>
            <p>$120</p>
        </div>
        <hr/>
        <div className="checkout_btn">
            <img src={Voucher} alt="" />
            <p>Add promo code</p>
        </div>
        <div className="checkout_btn">
            <img src={Delivery} alt="" />
            <span>Delivery</span>
            <span>Free</span>
        </div>
        <span>Est. Total</span>
        <span>$240</span>

        <div className="checkout_btn">
            <img src={bag} alt="" />
            <p>CHECKOUT</p>
        </div>        
      </div>
    </div>
  )
}

export default Checkout

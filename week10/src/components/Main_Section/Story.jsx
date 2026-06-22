import React from 'react'
import bar from '../../../src/assets/img/home/bar.svg'
import img from '../../../src/assets/img/story/img1.png'

const Contact = () => {
  return (
    <div className="wrap">
      <div className="story_wrap">
        <h1>OUR STORY</h1>
        <img src={bar} alt="" />
        <p>Open Fashion - Free Ecommerce UI Kit is a<br/>free download UI kit. You can open Open<br/>Fashion - Free Ecommerce UI Kit file by<br/>Figma. </p>
        <p>Create stunning shop with bulletproof<br/>guidelines and thoughtful components. Its<br/>library contains more than 50+ components<br/>supporting Light & Dark Mode and 60+<br/>ready to use mobile screens.</p>
      
        <img src={img} alt="" className='story_img'/>

        <h1>SIGN UP</h1>
        <img src={bar} alt="" />
        <p className='Receive'>Receive early access to new arrivals, sales,<br/>exclusive content, events and much more!</p>
        <p className='email'>Email adress</p>
        <hr/>

        <h3 className='story_bar'>SUBMIT → </h3>
      </div>
    </div>
  )
}

export default Contact

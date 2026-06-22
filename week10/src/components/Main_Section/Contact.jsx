import React from 'react'
import chat from '../../../src/assets/img/contact/Chat Message.png'
import add from '../../../src/assets/img/contact/Add Message.png'
import twitter from '../../../src/assets/img/contact/Twitter.png'
import bar from '../../../src/assets/img/home/bar.svg'

const Story = () => {
  return (
    <div className="wrap">
      <div className="contact_wrap">
        <h1>CONTACT US</h1>
        <img src={bar} alt="" />
        <div className="explain">
          <img src={chat} alt="" />
          <p>Need an ASAP answer? Contact us via chat,<br/>24/7! For existing furniture orders, please<br/>call us.</p>
          <h5 className='chat'>CHAT WITH US</h5>

          <img src={add} alt="" />
          <p>You can text us at 800-309-2622 – or click<br/>on the “text us” link below on your mobile<br/>device. Please allow the system to<br/>acknowledge a simple greeting (even “Hi”<br/>will do!) before providing your question/<br/>order details. Consent is not required for<br/>any purchase. Message and data rates may<br/>apply. Text messaging may not be available<br/>via all carriers.</p>
          <h5 className='text'>TEXT US</h5>

          <img src={twitter} alt="" />
          <p>To send us a private or direct message, like<br/>@Open Fashion on Facebook or follow us<br/>on Twitter. We’ll get back to you ASAP.<br/>Please include your name, order number,<br/>and email address for a faster response!</p>
        </div>
        </div>
    </div>
  )
}

export default Story

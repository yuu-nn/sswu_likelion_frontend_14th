import React from 'react'
import image1 from '../../assets/img/image1.png'
import image2 from '../../assets/img/image2.png'
import image3 from '../../assets/img/image3.png'


const Section03 = () => {
  return (
    <div className="section3">
      <div className="row">
        <div className="image1">
          <img src={image1} alt="" className='image1'/>
        </div>
        <div className="vision">
          <p>VISION</p>
          <h1>IT 교육 기회를 제공하여<br/>꿈꾸던 가능성을 열어준다.</h1>
          <h5>Open up the possibility of dreaming by providing<br/>IT education opportunities.</h5>
        </div>
      </div>
      <div className="row">
        <div className="vision1">
          <p>VISION</p>
          <h1>IT 기술로 IT 교육의 문제를<br/>해결한다.</h1>
          <h5>Solve IT education problems using IT<br/>technology.</h5>
        </div>
        <div className="image2">
          <img src={image2} alt="" className='image2'/>
        </div>
      </div>
      <div className="row">
        <div className="image3">
          <img src={image3} alt="" className='image3'/>
        </div>
        <div className="vision">
          <p>VISION</p>
          <h1>지속 성장이 가능한 IT<br/>커뮤니티를 구축한다.</h1>
          <h5>Establish an IT community that can sustain<br/>growth.</h5>
        </div>
      </div>
    </div>
  )
}

export default Section03

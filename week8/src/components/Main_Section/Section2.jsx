import React from 'react'
import import2_1 from '../../assets/img/section2_1.png'
import import2_2 from '../../assets/img/section2_2.png'

const Section2 = () => {
  return (
    <div className="section2">
        <h3 className="sec2_title">기획전</h3>
        <div className="boxs">
          <div className="box">
            <img src={import2_1} alt="" />
            <h3>FILA CUSTOM STUDIO</h3>
            <p>자세히 보기</p>
          </div>
          <div className="box">
            <img src={import2_2} alt="" />
            <h3>Pertex LIfe</h3>
            <p>자세히 보기</p>
          </div>
        </div>
         
    </div>
  )
}

export default Section2

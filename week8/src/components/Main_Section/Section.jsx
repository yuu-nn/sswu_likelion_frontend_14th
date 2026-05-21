import React, { useState } from 'react'
import section1_1 from '../../assets/img/section1_1.svg'
import section1_2 from '../../assets/img/section1_2.png'
import section1_3 from '../../assets/img/section1_3.png'
import section1_4 from '../../assets/img/section1_4.png'
import section1_5 from '../../assets/img/section1_5.png'
import section1_6 from '../../assets/img/section1_6.png'
import section1_7 from '../../assets/img/section1_7.png'

const Section1 = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <div className="section1">
        <h3>지금 많이 찾는 상품</h3>
        <div className="hashtag">
            <p 
              className={activeIndex === 0 ? 'active' : ''} 
              onClick={() => setActiveIndex(0)}
            ># 냉감티셔츠 </p>
            
            <p 
              className={activeIndex === 1 ? 'active' : ''} 
              onClick={() => setActiveIndex(1)}
            ># 에샤페</p>
            
            <p 
              className={activeIndex === 2 ? 'active' : ''} 
              onClick={() => setActiveIndex(2)}
            ># 반팔티셔츠 </p>
            
            <p 
              className={activeIndex === 3 ? 'active' : ''} 
              onClick={() => setActiveIndex(3)}
            ># 페이토&샌들</p>
            
            <p 
              className={activeIndex === 4 ? 'active' : ''} 
              onClick={() => setActiveIndex(4)}
            ># 인터런</p>
        </div>
        <div className="sec2_list">
            <div className="list1">
                <img src={section1_1} alt="" />
                <p className='gray'>공용   컴포트핏   라이프스타일</p>
                <p className='bold'> COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
                <p className='money'>49,000원</p> 
            </div>
            <div className="list2">
                <img src={section1_2} alt="" />
                <p className='gray'>공용   컴포트핏   라이프스타일</p>
                <p className='bold'> COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
                <p className='money'>49,000원</p> 
            </div>
            <div className="list3">
                <img src={section1_3} alt="" />
                <p className='gray'>공용   컴포트핏   라이프스타일</p>
                <p className='bold'> COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
                <p className='money'>49,000원</p> 
            </div>
            <div className="list4">
                <img src={section1_4} alt="" />
                <p className='gray'>공용   컴포트핏   라이프스타일</p>
                <p className='bold'> COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
                <p className='money'>49,000원</p> 
            </div>
            <div className="list5">
                <img src={section1_5} alt="" />
                <p className='gray'>공용   컴포트핏   라이프스타일</p>
                <p className='bold'> COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
                <p className='money'>49,000원</p> 
            </div>
            <div className="list6">
                <img src={section1_6} alt="" />
                <p className='gray'>공용   컴포트핏   라이프스타일</p>
                <p className='bold'> COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
                <p className='money'>49,000원</p> 
            </div>
            <div className="list7">
                <img src={section1_7} alt="" />
                <p className='gray'>공용   컴포트핏   라이프스타일</p>
                <p className='bold'> COLD WAVE 그래픽 프린트 냉감 티셔츠</p>
                <p className='money'>49,000원</p> 
            </div>
        </div>
    </div>
  )
}

export default Section1

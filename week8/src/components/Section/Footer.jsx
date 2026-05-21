import React from 'react'
import logo from '../../assets/img/logo.png' 

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="left">
        <img src={logo} alt="FILA Logo" />
        
        <div className="menu-links">
          <span>매장안내</span>
          <span>공지사항</span>
          <span>FILA MEMBERSHIP</span>
          <span>단체 판매</span>
          <span>대리점 개설문의</span>
          <span>FILA 입찰 참여 안내</span>
        </div>

        <div className="company-info">
          <p>서울특별시 성북구 보문로 35 휠라코리아(주)  대표이사 : 김지헌</p>
          <p>사업자등록번호 : 716-81-01573 <span className="underline">사업자정보확인</span>  통신판매업신고 : 제 2020-서울강동-0160 호</p>
          <p>개인정보 관리책임자 : 이학우</p>
        </div>

        <div className="copyright-info">
          <p>본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.</p>
          <p>콘텐츠산업진흥법에 의한 콘텐츠보호안내 <span className="underline">자세히 보기</span></p>
        </div>

        <div className="policy-links">
          <p>통합회원 이용약관</p>
          <p>개인정보 처리방침</p>
          <p>제보센터</p>
        </div>
      </div>

      <div className="right">
        <div className="cs-center">
          <p className="cs">CS CENTER</p>
          <h2>1577-3472</h2>
          <h3>filaonline@fila.com</h3>
          <p>평일 월 - 금 : 09시 - 18시 (공휴일 제외)</p>
        </div>

        <div className="utility">
          <div className="language">
            KOREA
          </div>
          <div className="family-site">
            FAMILY SITE 
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

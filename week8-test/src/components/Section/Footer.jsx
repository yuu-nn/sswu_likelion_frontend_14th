import React from 'react'
import { FaInstagram, FaYoutube, FaTwitter, FaDownload, FaRegPaperPlane, FaRegEnvelope } from 'react-icons/fa'
import logo_bot from '../../assets/img/likelion_logo.svg'

const Footer = () => {
  return (
    <footer className="Footer">
      
      <div className="left">
        <img src={logo_bot} alt="Logo" />
        <p>㈜멋쟁이사자처럼 | 대표이사 나성영</p>
        <p>서울특별시 종로구 종로3길 17 마제, 16-17층</p>
        <p>사업자 번호 : 264-88-01106</p>
        <p>통신판매업 신고번호 : 2022-서울종로-1534</p>
        <p><FaRegEnvelope /> 문의처 contact@likelion.net</p>
        <div>
          <div><FaInstagram /></div>
          <div><FaYoutube /></div>
          <div><FaTwitter /></div>
        </div>
      </div>

      
      <div className="right">
        <div>
          <h3>FAMILY BRAND</h3>
          <p>TECHIT</p>
          <p>SYLTARE</p>
          <p>MODERN LION</p>
          <p>QUADHASH</p>
        </div>

        <div>
          <h3>POLICY</h3>
          <p>이용약관</p>
          <p>개인정보처리방침</p>
          <p>Nonprofit Report <FaDownload /></p>
          <p>국민권익위원회 <FaRegPaperPlane /></p>
        </div>

        <div>
          <h3>RESOURCE</h3>
          <p>로그 가인드라인 <FaDownload /></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
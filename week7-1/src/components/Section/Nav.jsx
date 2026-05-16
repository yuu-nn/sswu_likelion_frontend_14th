import React from 'react'
import Logo from '../../assets/img/logo.png'
// import '../../assets/sass/nav.scss'

const Nav = () => {
  return (
    <div className='nav_wrap'>
        <img src={Logo} alt="" className='Logo'/>
        <div className ="list">
            <div className="brand">브랜드 스토리</div>
            <div className="Info">서비스 소개</div>
            <div className="media">미디어</div>
            <div className="job">채용</div>
        </div>    
    </div>
  )
}

export default Nav

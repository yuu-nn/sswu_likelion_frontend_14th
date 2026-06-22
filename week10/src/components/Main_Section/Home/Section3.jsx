import React from 'react'
import bar from '../../../assets/img/home/bar.svg'
import Prada from '../../../assets/img/home/Prada.svg'
import Burberry from '../../../assets/img/home/Burberry.png'
import Boss from '../../../assets/img/home/Boss.png'
import Catier from '../../../assets/img/home/Catier.svg'
import Gucci from '../../../assets/img/home/Gucci.svg'
import Tiffany from '../../../assets/img/home/Tiffany & Co.svg'


const Section3 = () => {
  return (
    <div>
      <div className="wrap">
        <div className="homesec3_top">
            <img src={bar} alt="bar" />
        </div>
        <div className="homesec3_logo1">
            <img src={Prada} alt="" className='prada'/>
            <img src={Burberry} alt="" className='burberry'/>
            <img src={Boss} alt="" className='boss'/>
        </div>
        <div className="homesec3_logo2">
            <img src={Catier} alt="" className='catier'/>
            <img src={Gucci} alt="" className='gucci'/>
            <img src={Tiffany} alt="" className='tiffany' />
        </div>
        <div className="homesec3_bot">
            <img src={bar} alt="bar" />
        </div>
      </div>
    </div>
  )
}

export default Section3

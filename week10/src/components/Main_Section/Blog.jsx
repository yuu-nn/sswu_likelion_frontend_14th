import React from 'react'
import bar from '../../assets/img/home/bar.svg'
import img1 from '../../assets/img/blog/img1.png'
import img2 from '../../assets/img/blog/img2.png'
import img3 from '../../assets/img/blog/img3.png'
import img4 from '../../assets/img/blog/img4.png'



const Blog = () => {
  return (
    <div className="wrap">
        <div className="blog_wrap">
            <h1>BLOG</h1>
            <img src={bar} alt="" />
            <div className="blog_top">
                <span>Fashion</span>
                <span>Prom</span>
                <span>Policy</span>
                <span>Lookbook</span>
                <span>Sale</span>
            </div>
            <div className="blog_img1">
                <img src={img1} alt="" />
                <span>#Fashion</span>
                <span>#Tips</span>
                <span className='ago'>4 days ago</span>
            </div>
            <div className="blog_img2">
                <img src={img2} alt="" />
                <span>#Fashion</span>
                <span>#Tips</span>
                <span className='ago'>4 days ago</span>
            </div>
            <div className="blog_img3">
                <img src={img3} alt="" />
                <span>#Fashion</span>
                <span>#Tips</span>
                <span className='ago'>4 days ago</span>
            </div>
            <div className="blog_img4">
                <img src={img4} alt="" />
                <span>#Fashion</span>
                <span>#Tips</span>
                <span className='ago'>4 days ago</span>
            </div>
            <div className="load">
                <h4>LOAD MORE +</h4>
            </div>

        </div>
      
    </div>
  )
}

export default Blog

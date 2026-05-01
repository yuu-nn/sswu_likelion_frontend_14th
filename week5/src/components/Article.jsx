import React, { useState } from 'react'
import full_heart from '../assets/img/heart.png'
import heart from '../assets/img/ht.png'
import comment from '../assets/img/Vector.png'

const Article = ({title , content}) => {

  const [commentText, setCommentText] = useState("")
  const [isLike, setIsLike] = useState(false)

  return (
    <div>
        <div id ="Article_Wrap">
            <div className="article">
                <h1>{title}</h1>
                <p>
                    {content}
                </p>
            </div>

            <div className="icon_group">
                <div className="comment">
                    <img src={comment} alt="" />
                    0
                </div>
                <div
                    className='heart'
                    onClick={() => {
                        setIsLike(!isLike)
                    }}
                >
                    <img
                        src={isLike ? full_heart : heart}
                        alt=""
                    />

                    {isLike ? 1 : 0}
                </div>
            </div>
            <footer>
                <input
                    type="text"
                    value={commentText}
                    className='comment_text'
                    onChange={(e) => {
                        setCommentText(e.target.value)
                    }}
                    placeholder='댓글을 입력해주세요!'
                />

                <button className='comment_btn'>
                    등록
                </button>
            </footer>
        </div>
      
    </div>
  )
}

export default Article

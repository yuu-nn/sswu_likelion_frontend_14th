import React from 'react'
import search from '../../../src/assets/img/nav/Search.svg'
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="wrap">
        <div className="search_wrap">
            <div className="search_top">
                <img src={search} alt="" />
                <span>Search items</span>
                <Link to="/">✕</Link>
            </div>
            <hr />
            <p className='popular'>Popular search terms</p>
            <p>Trend</p>
            <p>Dress</p>
            <p>Bag</p>
            <p>Tshirt</p>
            <p>Beauty</p>
            <p>Accessories</p>
        </div>
    </div>
  )
}

export default Search

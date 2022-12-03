import React from 'react'
import Search from './Search'

function HomePage(props) {
  return (
    <div>
        <Search/>
        <h1>Main Characters</h1>
        <div className='characters-container'>
          <div>
            <img src={props.imgUrl}/>
            <p>{props.name}</p>
          </div>
        </div>
    </div>
  )
}

export default HomePage
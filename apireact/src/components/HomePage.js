import React from 'react'
import Search from './Search'

function HomePage({character}) {
  return (
    <div>
        <Search/>
        <h1>Main Characters</h1>
        <div className='characters-container'>
          <div>
            {
             character.map((item)=>{
              return <p>{item.character}</p>
             })
            }
            
          </div>
        </div>
    </div>
  )
}

export default HomePage
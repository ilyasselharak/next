import React from 'react'
import Search from './Search'

function HomePage({character}) {
  return (
    <div>
        <Search/>
        <h1>Main Characters</h1>
        <div className='characters-container'>
          <div className='grid'>
            {
             character.map((item)=>{
              return <div className='grid-item'>
                <img src={item.image}/>
                <p>{item.name}</p>
                <button>see details</button>
                </div>
             })
            }
            
          </div>
        </div>
    </div>
  )
}

export default HomePage
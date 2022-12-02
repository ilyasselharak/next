import React from 'react'
import '../styles/header.css'
function header() {
  return (
    <div className='header-container'>
     <a href='/'>Home</a>
     <a href="/about">About</a>
    </div>
  )
}

export default header
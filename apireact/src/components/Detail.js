import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import "../styles/details.css"

function Detail() {
    const [char,setchar]=useState([])
    const {characterId} =useParams()
    useEffect(()=>{
     axios.get(`https://rickandmortyapi.com/api/character/${characterId}`)
     .then(res=>{
        setchar(res.data)
        })
     .catch(err=>{console.log(err)})
  },[])
    
  return (
    <div className='info'>
      <img src={char.image} alt="imag"/>
      <div >
        <p>Name:{char?.name}</p>
        <p>Gender:{char?.gender}</p>
        <p>Location:{char?.location?.name}</p>
        <p>species:{char?.species}</p>
        <p>status:{char?.status}</p>
      </div>
    </div>
  )
}

export default Detail
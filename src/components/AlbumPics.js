import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import './../App.css'

function AlbumPics(){

  const [pics, setPics] = useState([])

  const params = useParams()

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/DaDonMK/walmart_frontend/pictures?albumId=${params.id}`)
    .then(res => res.json())
    .then(json => {
      setPics(json)
    })

  }, [])

  console.log(pics)

  return (
    <div className='inside_album'>
    {pics ?
      pics.map((e, i) => {
        return <div key={i}> 
          <img src={e.profile_pic} alt='pictures' width="300" height="300"/>
        </div>
      })
    : null}
    </div>
  )
}

export default AlbumPics

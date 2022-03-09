import React from 'react'
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import AlbumPics from './AlbumPics'
import './../App.css'; 

function ExpandAlbum(props){

    const [albums, setAlbums] = useState([])

    const {param} = props

    useEffect(() => {

        fetch(`https://my-json-server.typicode.com/DaDonMK/walmart_frontend/albums?userId=${param}`)
        .then(res => res.json())
        .then(json => {
        setAlbums(json)
        })

    }, [])

    console.log(param)

  return (
    <div className='albumpics'>
    
        {albums.map((e, i) => {

            return <div key={i}> 
                {/* {e.title} <br /> */}
                <Link to={`/albums/${e.id}`}> 
                    <img src={e.profile_pic} alt='album pics' width="200" height="200"/>
                </Link>
            </div>
        })}
    
    </div>
  )
}

export default ExpandAlbum

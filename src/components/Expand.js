import React from 'react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import Posts from './Posts'

function Expand(props){

    console.log(props.data)

  return (

    <div>
        {/* <input placeholder='Search'/> */}
        
        <Posts param={props.param}/>

    </div>
  )
}

export default Expand
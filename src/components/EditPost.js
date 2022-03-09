import React from 'react'
import {useEffect, useState, useRef} from 'react'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"

function EditPost(props){

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const {editPost, i} = props

  console.log(i)

  return (
    <div>
      <TextField placeholder='Title' onChange={e => setTitle(e.target.value)}/>
      <TextField placeholder='Body'  onChange={e => setBody(e.target.value)}/>
      <Button onClick={() => editPost(title, body, i + 1)}>Save</Button>
    </div>
  )

  
}

export default EditPost

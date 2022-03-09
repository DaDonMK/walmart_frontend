import React from 'react'
import {useEffect, useState, useRef} from 'react'
import Comments from './Comments'
import NewComment from './NewComment'
import { Popup, Container } from 'semantic-ui-react'
import EditPost from './EditPost'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import Typography from '@material-ui/core/Typography';
import './../App.css'

function Posts(props){

  const {param} = props
  const [posts, setPosts] = useState([])
  const [input, setInput] = useState('')
  const [comments, setComments] = useState([])
  const [newcomment, setNewcomment] = useState([])
  const [submitbtn, setSubmitbtn] = useState(false)
  const [trigger, setTrigger] = useState(false)
  const [postid, setPostId] = useState(-1)
  const [search, setSearch] = useState('')
  const [editpost, setEditpost] = useState(false)
  // const [length, setLength] = useState(0)

  const mounted = useRef();

  useEffect(() => {

    if(!mounted.current){
      fetch(`https://my-json-server.typicode.com/DaDonMK/walmart_frontend/posts?userId=${param}`)
      .then(res => res.json())
      .then(json => {
        setPosts(json)
      })
    }else{
      setPosts(posts)
      console.log(posts)
    }

  }, [setPosts, setTrigger, setEditpost])

  function deletePost(i){

    fetch(`https://my-json-server.typicode.com/DaDonMK/walmart_frontend/posts/${i}`, {
      method: 'DELETE',
    });

    posts.splice(i - 1, 1)
    setPosts(posts)
    setTrigger(!trigger)
    console.log(posts)

  }

  function setBtnEdit(){

    setEditpost(!editpost)

  }

  async function editPost(title, body, i){

    console.log(body, title, i)
    const response = await fetch(`https://my-json-server.typicode.com/DaDonMK/walmart_frontend/posts/${i}`) 
    const js = await response.json()

    console.log(js)

    js.title = title
    js.body = body

    let tempPosts = posts


    fetch(`https://jsonplaceholder.typicode.com/posts/${i}`, {
    method: 'PUT',
    body: JSON.stringify({
      id: js.id,
      title: js.title,
      body: js.body,
      userId: js.userId,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => {
      console.log(json)
    });

    tempPosts[i - 1].id = js.id
    tempPosts[i - 1].title = js.title
    tempPosts[i - 1].body = js.body
    tempPosts[i - 1].userId = js.userId

    console.log(tempPosts)

    setPosts(tempPosts)

    // setEditpost(false)
    setTrigger(!trigger)
  }

  function btnHandle(){
    setSubmitbtn(false)
  }

  return (
    <div>
     
    <TextField type="text" placeholder='Search...' onChange={e => setSearch(e.target.value)}/><br />

    {
      search ?
        
        posts.map((e, i) => {
          console.log(e.title, search)

          if(e.title.toUpperCase().includes(search.toUpperCase())){
            console.log(e)
            return <div key={i}>

              <b>{e.title}</b> <Button onClick={() => deletePost(i + 1)}>Delete</Button> 
                
                <br />

                <i>{e.body} </i>
                <p className='comments'> 
                  <Comments btnHandle={btnHandle} param={e.id} input={input} postId={postid} btn={submitbtn} />
                </p>
                {editpost
                ? <EditPost i={i} editPost={editPost}/>
                : null}

            </div>
          }

        })

      :

    <div>

      <Button onClick={() => setBtnEdit()}>{editpost ? 'Close Edit' : 'Edit'}</Button>
        {posts.map((e, i) => {
            return <div key={i}> 
  
                <b>{e.title}</b> <Button onClick={() => deletePost(i + 1)}>Delete</Button> 
                
                <br />

                <i>{e.body} </i>
                <Comments btnHandle={btnHandle} param={e.id} input={input} postId={postid} btn={submitbtn} />
                {editpost
                ? <EditPost i={i} editPost={editPost}/>
                : null}

            </div>  
        })}

        <br />
        <Typography>Post Comment</Typography> <br />
          <Typography>Comment body: </Typography>
          <TextField type="text" onChange={e => setInput(e.target.value)}/>
        <br />
          <Typography> Post ID: </Typography>
          <TextField type="number" onChange={e => setPostId(e.target.value)}/>
        <Button onClick={() => setSubmitbtn(true)}>Submit</Button>
      </div>
    }

        
    </div>

  )

}

export default Posts

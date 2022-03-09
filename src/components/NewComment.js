import React from 'react'
import {useEffect, useState, useRef} from 'react'

export default function NewComment(props){

    console.log('newcomment')

    // // const [input, setInput] = useState('')

    const {input, len, postId, comments, newCommentInput} = props

   

        // let id = 3 + 1 + comments.length 
        // id -= 3
        useEffect(() => {

          // let id2 = id

          console.log(postId)

          fetch(`https://my-json-server.typicode.com/DaDonMK/walmart_frontend/comments?postId=${postId}`, {
          method: 'POST',
          body: JSON.stringify({
            postId: parseInt(postId),
            body: input
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
          })
          .then((response) => response.json())
          .then((json) => {
            
  
            console.log(comments, comments[0].postId, parseInt(postId))

            if(comments[0].postId === parseInt(postId)){
              comments.push(json)
              newCommentInput()
            }
            console.log(comments)

          
          });

        }, [])
  


  return (
    <div>

      {comments.map((e, i) => {
            return <div key={i}>
                {e.body}
            </div>
        })}
    {/* <button onClick={() => submitNewComment()}>CLICK</button> */}
    {/* {submitNewComment} */}
      {/* <input placeholder='Make a new comment...' onChange={e => setInput(e.target.value)}/> */}
      {/* <button onClick={console.log()}>Submit</button> */}
    
    </div>
  )
}

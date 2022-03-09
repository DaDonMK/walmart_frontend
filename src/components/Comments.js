import React from 'react'
import {useEffect, useState} from 'react'
import NewComment from './NewComment'
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField"
import './../App.css'

export default function Comments(props){

    const [comments, setComments] = useState([])
    const [trigger, setTrigger] = useState(false)
    // const [btn, setBtn] = useState(false)
    const {param, newcomment, postId, input, btn, btnHandle} = props


    // if(newcomment) comments.push(newcomment)
    useEffect(() => {

        if(comments.length === 0){
            fetch(`https://my-json-server.typicode.com/DaDonMK/walmart_frontend/comments?postId=${param}`)
            .then(res => res.json())
            .then(json => {
                console.log(json)
            setComments(json)
            })

        }else{

            setComments(comments)

        }
        



        // if(newcomment.length !== 0) comments.push(newcomment)

    }, [])

    // console.log(newcomment)

    // function submitComment(i){

    //     console.log(i)


    // }
    // console.log(param)
    // console.log(input)
    // console.log(postId)
    // console.log(btn)


    function newCommentInput(){

        // if(comments[0].id === )
        setTrigger(true)
        btnHandle()
        // console.log(comment)
        // console.log(comments)
        // // let x = comments.push(comment)
        // // comments.push(comment)
        // setComments(...comments, comment)
        // console.log(comments)

    }

    console.log(comments)

  return (
    <div className='comments'>

    {btn 
    
    ? 

        <NewComment newCommentInput={newCommentInput} postId={postId} input={input} comments={comments}/>
    
    :
    
        comments.map((e, i) => {
            return <div key={i}>
                {e.body}
            </div>
        })
     
    }

    
    </div>
  )
}

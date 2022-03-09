import React from 'react'
import {useParams} from 'react-router-dom'
import { Popup, Container } from 'semantic-ui-react'
import {useState, useEffect} from 'react'
import Expand from './Expand'
import ExpandAlbum from './ExpandAlbum'
import Button from "@material-ui/core/Button";
import './../App.css'


function About(props){

  const [user, setUser] = useState([])
  const [expand, setExpand] = useState(false)
  const [expandpics, setExpandpics] = useState(false)

  const params = useParams()

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/DaDonMK/walmart_frontend/users/${params.id}`)
    .then(res => res.json())
    .then(json => {
      setUser(json)
    })

  }, [])

  console.log(user)

  return (
    <div>
        {expand 
        ? 
            <Container style={{ paddingTop: "3%", paddingLeft: "2%", overflow: "auto" }}>
                Name: {user.name} ({user.username}) <br /> 
                Email: {user.email}
                <br />

                <Button variant= "outlined" onClick={() => setExpand(!expand)}>Unexpand Posts</Button>
                <br />

                <Expand data={user} param={params.id}/>
            </Container>

        :
            <Container style={{ paddingTop: "3%", paddingLeft: "2%", overflow: "auto" }}> 
                Name: {user.name} ({user.username}) <br /> 
                Email: {user.email}
                <br />
                <Button variant= "outlined" onClick={() => setExpand(!expand)}>Posts</Button> 
            </Container>  

        }

        {expandpics
        ?
            <Container style={{ paddingTop: "3%", paddingLeft: "2%", overflow: "auto" }}> 
                <Button variant= "outlined" onClick={() => setExpandpics(!expandpics)}>Unexpand Albums</Button>

                <ExpandAlbum param={params.id}/>
            </Container>  
        :
            <Container style={{ paddingTop: "3%", paddingLeft: "2%", overflow: "auto" }}> 
                <Button variant= "outlined" onClick={() => setExpandpics(!expandpics)}>Albums</Button>
            </Container>
        }

    </div>
  )
}

export default About
// {
  
//   "users" : [
  
//     {"id" : 1,
//     "name" : "Alex",
//     "username" : "alex8020",
//     "email": "alex8020@gmail.com"
//     },
    
//     {"id" : 2,
//     "name" : "Max",
//     "username" : "maxrules",
//     "email": "maxrules@yahoo.com"
//    },
    
//    {"id" : 3,
//     "name" : "Jessica",
//     "username" : "jessiqaz",
//     "email": "jessica.908@yahoo.com"
//    },
   
//     {"id" : 4,
//     "name" : "Clio",
//     "username" : "clionoel1700",
//     "email": "clionoel10@hotmail.com"
//    }
    
//   ],

//   "posts": [

//         {
//         "id": 1,
//         "userId": 1,
//         "title": "My first",
//         "body": "My first post!"
//         },
  
//         {
//         "id": 2,
//         "userId": 1,
//         "title": "My second post",
//         "body": "My second post!"
//         },
        
//     {
//         "id": 3,
//         "userId": 2,
//         "title": "International Women's day",
//         "body": "Hey everyone! Remember to be thankful for the women in your life."
//         },
//     {
//         "id": 4,
//         "userId": 2,
//         "title": "My dog gave birth",
//         "body": "My poodle just had twins!"
//         },
//     {
//         "id": 5,
//         "userId": 2,
//         "title": "My dog died",
//         "body": "unfortunately, my dog didn't make it after giving birth :("
//         },
//     {
//         "id": 6,
//         "userId": 3,
//         "title": "Where do i get my name?",
//         "body": "My mom's best friend in high school was named Jessica Day. I am named after her."
//         },
//     {
//         "id": 7,
//         "userId": 3,
//         "title": "spam post",
//         "body": "This is a test! - Jessica"
//         },
//     {
//         "id": 8,
//         "userId": 3,
//         "title": "Ukraine",
//         "body": "Does anyone know of any credible donation sites to help the ukrainians?"
//         },
//     {
//         "id": 9,
//         "userId": 3,
//         "title": "Blood drive for ukraine",
//         "body": "Hey ya'll, I'm starting a blood drive for ukraine. Details will be posted soon."
//         },
//     {
//         "id": 10,
//         "userId": 4,
//         "title": "New Job!",
//         "body": "I just got a new job at amazon as a principal engineer!"
//         },
//     {
//         "id": 11,
//         "userId": 4,
//         "title": "Lost Job!",
//         "body": "I just lost my job at Amazon when my boss found me sleeping"
//         }
//   ],
  
//   "comments": [
  
//     {
//       "id": 1,
//       "postId": 1,
//       "body": "Great post!"
//     },
//     {
//       "id": 2,
//       "postId": 2,
//       "body": "Awesome post!"
//     },
//     {
//       "id": 3,
//       "postId": 2,
//       "body": "Good post!"
//     },
//     {
//       "id": 4,
//       "postId": 1,
//       "body": "Bad post!"
//     },
//     {
//       "id": 5,
//       "postId": 8,
//       "body": "Yeah, ill DM you"
//     },
//     {
//       "id": 6,
//       "postId": 8,
//       "body": "LMK if you find something."
//     },
//     {
//       "id": 7,
//       "postId": 11,
//       "body": "Be careful next time lol"
//     },
//     {
//       "id": 8,
//       "postId": 6,
//       "body": "Cool fact."
//     }
    
//   ],

//   "albums": [
//     {
//       "id": 1,
//       "title": "DOGS",
//       "userId": 1,
//       "profile_pic": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=640:*"
//     },

//     {
//       "id": 2,
//       "title": "CATS",
//       "userId": 1,
//       "profile_pic": "https://images.theconversation.com/files/443350/original/file-20220131-15-1ndq1m6.jpg?ixlib=rb-1.1.0&rect=0%2C0%2C3354%2C2464&q=45&auto=format&w=926&fit=clip"
//     },

//     {
//       "id": 3,
//       "title": "EUROPE",
//       "userId": 1,
//       "profile_pic": "https://cdn.britannica.com/67/367-050-0F839196/Europe.jpg"
//     },

//     {
//       "id": 4,
//       "title": "TEXAS",
//       "userId": 2,
//       "profile_pic": "https://thumbnails.texastribune.org/HC4iZo8yPsbVf_ud-DGSm_ntcns=/850x570/smart/filters:quality(75)/https://static.texastribune.org/media/files/216c8fedb9f37b011cc98780a849aa0a/Welcome_to_Texas_Famartin_Wiki.jpgg"
//     },

//     {
//       "id": 5,
//       "title": "RESTAURANTS",
//       "userId": 2,
//       "profile_pic": "https://media.architecturaldigest.com/photos/590cc6c3b3064307ffee59a4/master/w_3000,h_2000,c_limit/Tallest%20Restaurants%20in%20the%20World%207.jpg"
//     },

//     {
//       "id": 6,
//       "title": "ATTRACTIONS",
//       "userId": 2,
//       "profile_pic": "https://www.planetware.com/photos-large/I/italy-colosseum-day.jpg"
//     },

//     {
//       "id": 7,
//       "title": "ATTRACTIONS",
//       "userId": 3,
//       "profile_pic": "https://www.planetware.com/photos-large/I/italy-colosseum-day.jpg"
//     },

//     {
//       "id": 8,
//       "title": "FORTUNE 500",
//       "userId": 3,
//       "profile_pic": "https://blog.equinix.com/wp-content/uploads/2021/06/F500_feature.jpg"
//     } 


//   ],


//   "pictures": [

//     {
//       "id": 1,
//       "albumId": 1,
//       "profile_pic": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=0.672xw:1.00xh;0.166xw,0&resize=640:*"
//     },

//     {
//       "id": 2,
//       "albumId": 1,
//       "profile_pic": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
//     }

//   ]
  
// }
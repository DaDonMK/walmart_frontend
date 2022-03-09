import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



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
//    }
   
//   ],

//   "posts": [

//         {
//         "id": 1,
//         "userId": 1,
//         "title": "hello",
//         "body": "My first post!"
//         },
  
//         {
//         "id": 2,
//         "userId": 1,
//         "title": "second post",
//         "body": "My second post!"
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
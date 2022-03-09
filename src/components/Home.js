import './../App.css';
import { isEditable } from '@testing-library/user-event/dist/utils';
import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import { Popup, Container } from 'semantic-ui-react'
import About from './About'


function Home() {
  const [data, setData] = useState([])
  const [hover, setHover] = useState(false);
  const [hoverid, setHoverid] = useState(undefined)
  const [test, setTest] = useState(false)

  function onHover(i){
    // let onOff = hover.on
    // console.log(hover.on)
    setHover(true);
    setHoverid(i)
  };

  const onLeave = () => {
    setHover(false);
    setHoverid(undefined)
  };

  
  useEffect(() => {

    fetch('https://my-json-server.typicode.com/DaDonMK/walmart_frontend/users')
    .then(res => res.json())
    .then(json => {
      setData(json)
    })


  }, [setData])

  console.log(data)

  return (
    <div>

      {data ? 
      
      data.map((e, i) => {

        return <div style={{ paddingTop: "3%", paddingLeft: "2%", overflow: "auto" }} key={i}>

            <span style={{ overflow: "auto" }}>
                <Popup 
                    className='popup'
                    position="right center"
                    trigger={<Link to={`/about/${e.id}`}>{e.name} </Link>}
                    hoverable
                >
                    <p>
                        {e.username} <br />
                        {e.email}
                    </p>
                </Popup>
            </span>
           {/* <Link to={`/about/${e.id}`}>{e.name} </Link> */}
        </div>

      }) 
      
      : null}
    </div>
  );
}


export default Home
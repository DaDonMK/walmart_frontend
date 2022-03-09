import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import AlbumPics from './components/AlbumPics'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='/albums/:id' element={<AlbumPics />} />
      </Routes>
    </div>
  );
}

export default App;

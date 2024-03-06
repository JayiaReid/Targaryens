import {BrowserRouter, Routes, Route} from 'react-router-dom';
import List from './pages/List';
import Home from './pages/Home';
import Reviews from './pages/Reviews';
import Submit from './pages/Submit';
// import SongPlayer from './components/SongPlayer';

export default function App(){
  return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/song-list' element={<List/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route index element={<Home/>}></Route>
        <Route path='/reviews' element={<Reviews/>} ></Route>
        <Route path='/submit' element={<Submit/>}></Route>
        {/* <Route path='/song' element={<SongPlayer/>}></Route> */}
      </Routes>
    </BrowserRouter>
  </div>);
}
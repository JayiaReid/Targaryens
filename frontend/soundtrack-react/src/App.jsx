import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Listen from './pages/Listen';
import Home from './pages/Home';
import Reviews from './pages/Reviews';

export default function App(){
  return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path='/song-listen' element={<Listen/>}></Route>
        <Route path='/Home' element={<Home/>}></Route>
        <Route index element={<Home/>}></Route>
        <Route path='/reviews' element={<Reviews/>} ></Route>
      </Routes>
    </BrowserRouter>
  </div>);
}
import React, { useState } from 'react';
import MovieCard from "../components/MovieCard";
import Thumbnail from "../components/Thumbnail";
import '../css/App.css'
import Header from '../components/Header';
import coj from '../assets/coj.webp';
import fbts from '../assets/fbts.webp';
import tgt from '../assets/tgt.jpg';
import daemyra from '../assets/daemyra.webp'
import dae from '../assets/dae.jpg'
import promise from '../assets/promise.jpg'
import '../css/thumbnails.css'


export default function Listen() {
  const [thumbnails, setThumbnails] = useState([
    { title: "Crown of Jaeherys", imgurl: coj, description: "Rhaenyra's crowning" },
    { title: "Targaryen Theme", imgurl: tgt, description: "Theme Song" },
    { title: "Funeral by the Sea", imgurl: fbts, description: "Laena's Funeral" },
    { title: "Daemyra", imgurl: daemyra, description: "Daemon and Rhaenyra Love Scene" },
    { title: "The Rogue Prince", imgurl: dae, description: "Daemon Targaryen Theme" },
    { title: "The Promise", imgurl: promise, description: "Prince that was promised" }
  ]);
  const [activeIndex, setActiveIndex] = useState(0);


  const handleLeftArrowClick = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + thumbnails.length) % thumbnails.length);

  };
  
  const handleRightArrowClick = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % thumbnails.length);
  
  };
  

  return (
    <div id='submitpage'>
      <img className="s_img" src={thumbnails[activeIndex].imgurl}/>
    <Header/>
    <div className="thumbnail">
      {thumbnails.map((thumbnail, index) => (
        <Thumbnail
          key={index}
          title={thumbnail.title}
          imgurl={thumbnail.imgurl}
          description={thumbnail.description}
          isActive={index === activeIndex}
          // onClick={handleThumbnailClick}
        />
      ))}
    </div>
    <div className="arrows">
      <button id="prev" onClick={handleLeftArrowClick}>&larr;</button>
      <button id="next" onClick={handleRightArrowClick}>&rarr;</button>
    </div>
  </div>
  )
}



//home page, revies page, leave review

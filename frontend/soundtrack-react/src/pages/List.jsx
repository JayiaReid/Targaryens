import React, { useState, useRef } from 'react';
import Thumbnail from "../components/Thumbnail";
import '../css/App.css'
import Header from '../components/Header';
//images
import coj from '../assets/coj.webp';
import fbts from '../assets/fbts.webp';
import tgt from '../assets/tgt.jpg';
import daemyra from '../assets/daemyra.webp'
import dae from '../assets/dae.jpg'
import promise from '../assets/promise.jpg'
import valaryons from '../assets/valaryons.jpg'
import loyalty from '../assets/daemon2.0.jpg'
import rhae from '../assets/rhae.jpg'
import '../css/thumbnails.css'

//audios
import fbts_audio from '../assets/fbts_audio.mp3'
import playIcon from '../assets/play.png'
import pauseIcon from '../assets/pause.png'
import restartIcon from '../assets/restart.png'
import coj_audio from '../assets/coj_audio.mp3'
import tgts_audio from '../assets/tgts_audio.mp3'
import daemyra_audio from '../assets/daemyra.mp3'
import dae_audio from '../assets/dae_audio.mp3'
import promise_audio from '../assets/promise_audio.mp3'
import loyalty_audio from '../assets/loyalty_audio.mp3'
import velaryon_audio from '../assets/velaryon_audio.mp3'
import rhae_audio from '../assets/rhae_audio.mp3'

export default function Listen() {
  const [thumbnails, setThumbnails] = useState([
    { title: "Crown of Jaeherys", imgurl: coj, description: "Rhaenyra's crowning", audio: coj_audio},
    { title: "Targaryen Theme", imgurl: tgt, description: "Theme Song", audio: tgts_audio },
    { title: "Funeral by the Sea", imgurl: fbts, description: "Laena's Funeral", audio: fbts_audio},
    { title: "The True Meaning of Loyalty", imgurl: loyalty, description: "The True Meaning of Loyalty", audio:loyalty_audio },
    { title: "Rhaenyra's Welcome", imgurl: rhae, description: "The Black Queen herself", audio: rhae_audio },
    { title: "Daemyra", imgurl: daemyra, description: "Daemon and Rhaenyra Love Scene", audio: daemyra_audio},
    { title: "The Promise", imgurl: promise, description: "Prince that was promised", audio:promise_audio },
    { title: "House Velaryon", imgurl: valaryons, description: "House Velaryon", audio:velaryon_audio },
    { title: "The Rogue Prince", imgurl: dae, description: "Daemon Targaryen Theme", audio: dae_audio  }
  ]);
  const [activeIndex, setActiveIndex] = useState(0);
  const audioRef = useRef(null);

  const handleLeftArrowClick = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + thumbnails.length) % thumbnails.length);

  };
  
  const handleRightArrowClick = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % thumbnails.length);
  };
  

  return (
    <div id='listpage'>
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
    <h1 id="t_tile">{thumbnails[activeIndex].title}<br/>
      </h1>
      <div className="audio-controls">
        <audio src={thumbnails[activeIndex].audio} type="audio/mpeg" ref={audioRef} autoPlay>
          Your browser does not support the audio element.
        </audio>
        {/* <div className="custom-controls">
          <button onClick={() => audioRef.current.play()}>Play</button>
          <button onClick={() => audioRef.current.pause()}>Pause</button>
          <button onClick={() => {audioRef.current.currentTime = 0; audioRef.current.play()}}>Restart</button>
        </div> */}
      </div>
    <div className="arrows">
      <button id="prev" onClick={handleLeftArrowClick}>&larr;</button>
      <button id="next" onClick={handleRightArrowClick}>&rarr;</button>
      <button onClick={() => audioRef.current.play()}><img src={playIcon} title='play song'/></button>
          <button onClick={() => audioRef.current.pause()}><img src={pauseIcon} title='pause song'/></button>
          <button onClick={() => {audioRef.current.currentTime = 0; audioRef.current.play()}}><img src={restartIcon} title='restart song'/></button>
    </div>
  </div>
  )
}



//home page, revies page, leave review

import Header from "../components/Header";
import '../css/App.css'
import introimg from '../assets/introimg.jpg'
import '../css/home.css'
import { Link } from "react-router-dom";
export default function Home(){
    return(
        <>
        <Header/>
        <div id="h_intro">
            <img src={introimg}/>
            <div className="h_intro_content">
            <p className="i_name">TEAM BLACK</p><br/>
            <span className="btns"><button><Link className='h_link' title="list" to='/song-list'>See soundtrack</Link></button><button><Link className='h_link' to='/submit'>Submit Review</Link></button></span>
            </div>
            
        </div>
        
        </>
    );
}
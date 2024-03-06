import sigil from '../assets/sigil.png';
import '../css/App.css'
import {  Link } from "react-router-dom";
import '../css/header.css'

export default function Header(props){
    return(
        <nav id='header'>
           
            <ul id="navbar">
                <Link className='h_link' to='/home'>Home</Link>
                <Link className='h_link' to='/submit'>Submit Review</Link>
                <Link className='h_link' title="list" to='/song-list'>Listen</Link>
                <Link className='h_link' to='/reviews' title='see reviews by others'>Other's reviews</Link>
                
            </ul> 
            <Link to='/home'><img src={sigil} title='home' id="sigil"/></Link>
        </nav>
    );
}
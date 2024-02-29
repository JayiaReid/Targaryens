import { useState } from "react";
import S_reviews from "../components/S_reviews";
import Header from '../components/Header';
import coj from '../assets/coj.webp';
import fbts from '../assets/fbts.webp';
import tgt from '../assets/tgt.jpg';
import daemyra from '../assets/daemyra.webp'
import dae from '../assets/dae.jpg'
import promise from '../assets/promise.jpg'
import '../css/reviews.css'

export default function Reviews(){
    return(
        <div id="review_Page">
            <Header/>
            <div className="All_Reviews">
                <S_reviews title="Crown of Jaeherys" imgurl={coj} description="Rhaenyra's crowning" />
                <S_reviews title= "Targaryen Theme" imgurl= {tgt} description= "Theme Song" />
                <S_reviews title= "Funeral by the Sea" imgurl= {fbts} description= "Laena's Funeral" />
                <S_reviews title= "Daemyra" imgurl= {daemyra} description= "Daemon and Rhaenyra Love Scene" />
                <S_reviews title= "The Rogue Prince" imgurl= {dae} description= "Daemon Targaryen Theme" />
                <S_reviews title= "The Promise" imgurl= {promise }description= "Prince that was promised" />
            </div>
        </div>
    );
}
import { useState } from "react";
import S_reviews from "../components/S_reviews";
import Header from '../components/Header';
// import coj from '../assets/coj.webp';
// import fbts from '../assets/fbts.webp';
// import tgt from '../assets/tgt.jpg';
// import daemyra from '../assets/daemyra.webp'
// import dae from '../assets/dae.jpg'
// import promise from '../assets/promise.jpg'
import '../css/reviews.css'
import r_img from '../assets/r_img.jpg'

export default function Reviews(){
    return(
        <div id="review_Page">
            <img src={r_img} className="r_img" />
            <Header/>
            <div className="All_Reviews">
                <h1>Fan Reviews on the Soundtrack</h1>
                <S_reviews title="Crown of Jaeherys"/>
                <S_reviews title="Targaryen Theme"/>
                <S_reviews title="Funeral by the Sea"/>
                <S_reviews title="The True Meaning of Loyalty"/>
                <S_reviews title="Rhaenyra's Welcome"/>
                <S_reviews title="Daemyra"/>
                <S_reviews title="The Promise"/>
                <S_reviews title="House Velaryon"/>
                <S_reviews title="The Rogue Prince"/>
            </div>
        </div>
    );
}
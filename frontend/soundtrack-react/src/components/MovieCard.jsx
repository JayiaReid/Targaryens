import {memo, useEffect, useState} from 'react';
import Axios from 'axios';

const MovieCard = memo((props) => {
    const [Vote, setState] = useState(props.initialRating);
    const [review, setReview]=useState('');

    function increase(){
        if(Vote<10){
            setState(Vote + 1);
        }
        else{
            setState(Vote);
        }
        
    }
    function decrease(){
        
        if(Vote>0){
            setState(Vote - 1);
        }
        else{
            setState(Vote);
        }
    }

    //sends to backend
    const submitReview =()=>{
        Axios.post('http://localhost:5178/api/insert', {
            songName: props.title, 
            songReview: review, 
            songRating: Vote, 
    }).then(()=>{
        alert('success insertion');
        setReview('');
    });
 }
 
    return(
        <div className='mCard'>
            <img src={props.imgurl} />
            <div className='content'>
                <p className='showtitle'>House of the Dragon</p>
                <h1 id='s_title'>{props.title}</h1>
            
                <div className="mrating">
                    <p className='rating'>Your Rating: <span id="rnum"> {Vote} </span>
                    <button className="drate" onClick={decrease}>&#x2193;</button>
                    <button className="irate" onClick={increase}>&#x2191;</button></p>
                </div>
                <form onSubmit={submitReview}>
                    <input className='mtitle' type="text" value={props.title} readOnly/>
                    <br/>
                    <input className='mreview' 
                    type="textarea" 
                    placeholder='Enter review here'
                    onChange={(e)=>{
                        setReview(e.target.value);
                    }}/>
                    <button className='sbtn' type='submit' >&#x2713;</button>
                </form>
                
            </div>
        </div>
    );
});

export default MovieCard
//onClick={submitReview}
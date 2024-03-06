import { useState } from 'react';
import Header from '../components/Header';
import '../css/submit.css'
import axios from 'axios';

function Submit() {
    const [songName, setSongName] = useState('');
    const [songReview, setSongReview] = useState('');
    // const [songRating, setSongRating] = useState(0);

    const submitReview = () => {
        console.log("Sending POST request with data:", { songName, songReview }); // Add this line to log the data being sent
        axios.post('http://localhost:5178/api/insert', {
            songName: songName, 
            songReview: songReview,  
        }).then(() => {
            
            setSongName('');
            setSongReview('');
        }).catch(error => {
            console.error("Error submitting review:", error); // Add this line to log any errors
        });
    };
    

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted review:', { songName, songReview });
    
         //sends to backend
        submitReview();
        alert('successful submission');
    };

    return (
        <div id='submitpage'>
            <Header/>
            <div>
            <h2 className='s_h'>Submit a Review</h2>
            <form>
                <div>
                <select id="songSelect" value={songName} onChange={(e) => setSongName(e.target.value)}>
                    <option value="">Select a song...</option>
                    <option value="Crown of Jaeherys">Crown of Jaeherys</option>
                    <option value="Targaryen Theme">Targaryen Theme</option>
                    <option value="Funeral by the Sea">Funeral by the Sea</option>
                    <option value="The True Meaning of Loyalty">The True Meaning of Loyalty</option>
                    <option value="Rhaenyra's Welcome">Rhaenyra's Welcome</option>
                    <option value="Daemyra">Daemyra</option>
                    <option value="The Promise">The Promise</option>
                    <option value="House Velaryon">House Velaryon</option>
                    <option value="The Rogue Prince">The Rogue Prince</option>
                </select>

                </div>
                <div style={{ display: 'flex' }}>

                    <textarea
                        id="songReview"
                        value={songReview}
                        onChange={(e) => setSongReview(e.target.value)}
                        required
                        placeholder='Enter review here'
                    ></textarea><button className='s_s_btn' type='submit' onClick={handleSubmit} >&#x2713;</button>
                </div>
                    
                {/* <button type="submit" className='s_s_btn' onClick={handleSubmit}>Submit Review</button> */}
                
            </form>
        </div></div>
    );
}

export default Submit;

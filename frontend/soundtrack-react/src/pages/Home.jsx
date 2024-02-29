import Header from "../components/Header";
import '../css/App.css'
import introimg from '../assets/introimg.jpg'
import '../css/home.css'

export default function Home(){
    return(
        <>
        <Header/>
        <div id="h_intro">
            <img src={introimg}/>
            <div className="h_intro_content">
            <p className="i_name">TEAM BLACK</p><br/>
                {/* <p className="i_content">The Home for Like-minded Tagaryens</p> */}
            </div>
        </div>
        
        </>
    );
}
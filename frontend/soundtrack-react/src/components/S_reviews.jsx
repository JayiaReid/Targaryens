import axios from "axios";
import { useState, useEffect } from "react";

export default function S_reviews(props) {
  const [reviewList, setList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5178/api/get').then((response) => {
      setList(response.data);
    });
  }, []);

  return (
    <div className="userReviews">
      <h3>{props.title}</h3>
      {reviewList.map((val, index) => (
        val.songName === props.title ? (
          <p key={index} className='u_Reviews'>
           {val.songReview}
          </p>
        ) : null
      ))}
    </div>
  );
}

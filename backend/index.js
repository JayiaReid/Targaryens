const express = require("express");
const app = express();
const mysql = require("mysql2");
const bodyParser = require('body-parser');
const cors = require('cors');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'mochalatte',
  database: 'soundtrack-database'
});

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors());
 

app.get("/api/get", (req, res) => {
    const sqlSelect = "SELECT * from soundtrackreviews;"
    db.query(sqlSelect, (err, result)=>{
      res.send(result);
    })
});

app.post('/api/insert', (req, res)=>{

  const songName=req.body.songName;
  const songReview=req.body.songReview;
  const songRating=req.body.songRating;

  const sqlInsert = "INSERT INTO soundtrackreviews (songName, songReview, songRating) VALUES (?,?,?);"
  db.query(sqlInsert,[songName, songReview, songRating], (err, result) => {
    if (err) {
      console.log('Error:', err);
      res.send('An error occurred.');
    } else {
      console.log('Insertion successful');
      res.send('soundtrack');
      console.log(result);
    }
  });
})


app.listen(5178, () => {
  console.log('Server is running on port 5178');
});  
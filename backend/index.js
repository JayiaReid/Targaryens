const express = require("express");
const app = express();
const fs = require('fs')
const bodyParser = require('body-parser');
const cors = require('cors');

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(cors());
 

app.get("/api/get", (req, res) => {

  fs.readFile("reviews.json", "utf8", (err, data)=>{
    if (err) throw err;
    res.send(data);
  })
});

app.post('/api/insert', (req, res)=>{

  fs.readFile("reviews.json", "utf8", (err, data)=>{
    if (err) throw err;

    const json = JSON.parse(data)

    const songName=req.body.songName;
    const songReview=req.body.songReview;

    const review = {
      songName: songName,
      songReview: songReview
    }

    json.push(review)

    const update = JSON.stringify(json)

    fs.writeFile("reviews.json", update, (err)=>{
        if (err) throw err
        console.log(json)
    })

  })
})


app.listen(5178, () => {
  console.log('Server is running on port 5178');
});  
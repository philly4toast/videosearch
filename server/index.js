//express is http handler

const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
// const axios = require('axios')
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//do i need these two? 
const cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));
app.listen(port, () => console.log(`Going on port: ${port}`));


var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jezebel',
  database: 'MusicBank'
});

connection.connect();

//handles request for getting all favorited artist music videos
app.get('/favo5', (req, res) => {
  connection.query('select artVideos from artmusvidvault;', function (error, results, fields) {
    // console.log(results)
    res.send(results)
    if (error) throw error;
 })
});

app.post('/favo5', function(req,res){
  var addingArtistName = req.body.artistName;
  var addingArtistVideos = req.body.artistVideos
  console.log(addingArtistVideos)
// add artist to artist table



  addingArtistVideos.forEach(video => {
    console.log(`
    INSERT INTO artMusVidVault (artName,artVideos)
    VALUES ('${addingArtistName}' , '${video.videoID}');
  `)
  });
  //add info to database: artist name attached to video information
//   connection.query(`
//   INSERT INTO artMusVidVault (artName,artVideos)
//   VALUES ('${addingArtistName}' , '${addingArtistVideos}');
// `)


  res.send('Got a post request at /favorites')
})
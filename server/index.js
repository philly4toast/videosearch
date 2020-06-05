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
  connection.query('SELECT artistName FROM artists;', function (error, results, fields) {
    console.log('be', results)
    res.send(results)
    if (error) throw error;
 })
});

app.post('/favo5', function(req,res){
  var addingArtistName = req.body.artistName;
  var addingArtistVideos = req.body.artistVideos

  // add artist to artist table
  connection.query(`
  INSERT INTO artists (artistName)
  VALUES ('${addingArtistName}');
`)

connection.query(`
    SELECT id FROM artists WHERE artistName='${addingArtistName}'
`, function(error, results, fields){
  console.log(results[0].id)

  //add musicvideoinfo to 2nd table
  addingArtistVideos.forEach(video => {
    connection.query(`
    INSERT INTO artistMVs (description, vidID, vidTHMN, artistID)
    VALUES ('${video.title}' , '${video.videoID}', '${video.thumbnail}', '${results[0].id}');
  `)
  });
})



  res.send('Got a post request at /favorites')
})
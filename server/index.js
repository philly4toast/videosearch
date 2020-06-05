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



app.post('/favo5', function(req,res){
  var addingArtistName = req.body.artistName;
  var addingArtistVideos = req.body.artistVideos;

  console.log(addingArtistName, addingArtistVideos)

  //add info to database: artist name attached to video information
  connection.query(`
  
  INSERT INTO artMusVidVault (id,artName,artVideos)
  VALUES ('${addingArtistName}' , '${addingArtistVideos}');

`)


  res.send('Got a post request at /favorites')
})
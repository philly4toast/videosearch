//express is http handler

const express = require('express');
const app = express();
const port = 3001;
const path = require('path');


//do i need these two? 
const cors = require("cors");
app.use(cors());

app.use(express.static(path.join(__dirname, '../public')));

app.listen(port, () => console.log(`Going on port: ${port}`));


app.post('/favo5', function(req,res){
  console.log(req.body)


  res.send('Got a post request at /favorites')
})
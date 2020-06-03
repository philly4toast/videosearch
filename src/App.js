import React from 'react';
import MainPlayer from './MainPlayer'
import './App.css';
import VideoList from './VideoList'
import FivoFave from './FivoFave'
const axios = require('axios')


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      artistName: '',
      artistMVs: '',
      mainPlVid: ''
    }
    this.typingArtistName = this.typingArtistName.bind(this)
    this.searchArtist = this.searchArtist.bind(this)
    this.loadVidtoMainPlayer = this.loadVidtoMainPlayer.bind(this)
    this.favArtistSelect = this.favArtistSelect.bind(this)
    this.addFav = this.addFav.bind(this)
  }

searchArtist(event) { 
  let searchArtist = this.state.artistName;
  let baseURL = 'https://www.googleapis.com/youtube/v3/'
  let requestURL = baseURL+'search?part=snippet'+
                       '&type=video'+
                       '&q=' + searchArtist + 'music+videos' +
                       '&key=AIzaSyD2UPk5IRDVUAEOT8Em5pUgNY5u7kvvXEQ';
  //disabled api call until clearance
  console.log(requestURL)
  axios.get(requestURL)
  .then((response) => {
    console.log(response.data.items)
    this.setState({
      artistMVs: response.data.items,
      mainPlVid: response.data.items[0].id.videoId
    })
  }, (error) => {
    console.log(error);
  });


  event.preventDefault()
}  

typingArtistName(event){
  this.setState({artistName: event.target.value})
}

loadVidtoMainPlayer(youtubeid){
  this.setState({mainPlVid: youtubeid})
}

addFav(){
  console.log('adding favorites')

  axios.post('http://localhost:3001/favo5', {
    name: 'JAYX'
  })
  .then(function (response) {
    console.log(response);
  })
  // axios({
  //   method: "POST",
  //   url: "http://localhost:3001/",
  //   data: {
  //     "name": "JAYW"
  //   }
  // }).then(res => {
  //   console.log(res.data.message);
  // });

}
//selects a video from
favArtistSelect(){
  console.log('load artist to page (awaiting api quota clearnace)')
}

render(){

  return (
    <div className="App">
      <header className="App-header">
      <form className='searchBr' onSubmit={this.searchArtist}>
        <input type="text" placeholder="Search.." onChange={this.typingArtistName}></input>
        <button>Find music videos!!!!!</button>
      </form>

      <div style={{'backgroundImage': `url(${'./old-television-12.png'})`}} className='mainPlayerTV'>
          <MainPlayer vidInfo={this.state.mainPlVid}/>
      </div>

<div>

        <FivoFave favArtistSelect={this.favArtistSelect} addFav={this.addFav}/>
</div>

      </header>
      <VideoList onClick={this.loadVidtoMainPlayer} musicVideos={this.state.artistMVs}/>
    </div>
  );
}
}

export default App;

import React from 'react';
import MainPlayer from './MainPlayer'
import './App.css';
import VideoList from './VideoList'
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
    this.handleClick = this.handleClick.bind(this)
  }

searchArtist(event) { 
  let searchArtist = this.state.artistName;
  let baseURL = 'https://www.googleapis.com/youtube/v3/'
  let requestURL = baseURL+'search?part=snippet'+
                       '&type=video'+
                       '&q=' + searchArtist + 'music videos' +
                       '&key=AIzaSyDKUYdvAkLYCBxOfE5tpfNJNBxAxSu2qSw'
  axios.get(requestURL)
  .then((response) => {
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
  console.log(event.target.value)
}

handleClick(youtubeid){
  console.log('hello', youtubeid)
}

render(){

  return (
    <div className="App">
      <header className="App-header">


      <form className='searchBr' onSubmit={this.searchArtist}>
        <input type="text" placeholder="Search.." onChange={this.typingArtistName}></input>
        <button>Find music videos</button>
      </form>

      <div style={{'backgroundImage': `url(${'./old-television-12.png'})`}} className='mainPlayerTV'>
        {/* <img src="old-television-12.png"/> */}
          <MainPlayer vidInfo={this.state.mainPlVid}/>

      </div>
      </header>
      <VideoList onClick={this.handleClick} musicVideos={this.state.artistMVs}/>
    </div>
  );
}
}

export default App;

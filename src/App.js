import React from 'react';
import MainPlayer from './MainPlayer'
import './App.css';
import VideoList from './VideoList'
const axios = require('axios')


class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      artistName: ''
    }
    this.typingArtistName = this.typingArtistName.bind(this)
    this.searchArtist = this.searchArtist.bind(this)
  }

searchArtist(event) { 

  let searchArtist = this.state.artistName;

  let baseURL = 'https://www.googleapis.com/youtube/v3/'

  let requestURL = baseURL+'search?part=snippet'+
                       '&type=video'+
                       '&q=' + searchArtist + 'music videos' +
                       '&key=AIzaSyDKUYdvAkLYCBxOfE5tpfNJNBxAxSu2qSw'
  
  axios.get(requestURL)
  
  // key=AIzaSyDKUYdvAkLYCBxOfE5tpfNJNBxAxSu2qSw
  .then((response) => {
    console.log(response.data.items);
  }, (error) => {
    console.log(error);
  });
  event.preventDefault()
}  

typingArtistName(event){
  this.setState({artistName: event.target.value})
  console.log(event.target.value)
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
          <MainPlayer/>

      </div>
      </header>
      <VideoList/>
    </div>
  );
}
}

export default App;

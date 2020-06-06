import React from 'react';
import MainPlayer from './MainPlayer'
import './App.css';
import VideoList from './VideoList'
import FivoFave from './FivoFave'
import TLCsearch from './TLCsearch'
import DRAKEsearch from './DRAKEsearch'
const axios = require('axios')



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      artistName: '',
      artistMVs: '',
      favoriteArtists: '', //?? maybe different route
      mainPlVid: ''
    }
    this.typingArtistName = this.typingArtistName.bind(this)
    this.searchArtist = this.searchArtist.bind(this)
    this.loadVidtoMainPlayer = this.loadVidtoMainPlayer.bind(this)
    this.favArtistSelect = this.favArtistSelect.bind(this)
    this.addFav = this.addFav.bind(this)
    this.getFavList = this.getFavList.bind(this)
  }

  componentDidMount(){
    this.getFavList();
    console.log('currentmvs', this.state.artistMVs)
  }

  getFavList(){
    axios.get('http://localhost:3001/favo5')
    .then(response => {
      console.log('returned to fe:', response.data);

      var responseArr = response.data;
      var resultsArr = [];
      for (var i = 0; i < responseArr.length; i++){
        resultsArr.push(responseArr[i].artistName)
      }
        //is this necessary or is it just to restart the page? 
      this.setState({favoriteArtists: resultsArr}) 

    });
  } 

  searchArtist(event) {
    // let searchArtist = this.state.artistName;
    // let baseURL = 'https://www.googleapis.com/youtube/v3/'
    // let requestURL = baseURL+'search?part=snippet'+
    //                      '&type=video'+
    //                      '&q=' + searchArtist + 'music+videos' +
    //                      '&key=AIzaSyC8JlqzKhJjsirGk71XH94ziySBeLb-iUQ';
    // //disabled api call until clearance
    // console.log(requestURL)
    // axios.get(requestURL)
    // .then((response) => {
    //   console.log(response.data.items)
    //   this.setState({
    //     currentArtist: this.state.artistName,
    //     artistMVs: response.data.items,
    //     mainPlVid: response.data.items[0].id.videoId
    //   })
    // }, (error) => {
    //   console.log(error);
    // });

    // temporary standin for api quota limits ---> 
  //*ARTIST*search can be replaced with the api response from get request. 
    var vidIdArr = TLCsearch.items.map(video => { 
      return {
        videoID: video.id.videoId,
        title: video.snippet.title,
        thumbnail: video.snippet.thumbnails.default.url
      }
    })

    console.log('try this one', vidIdArr[0].videoID)


    this.setState({

      currentArtist: this.state.artistName, //placeholder of what you typed
      artistMVs: vidIdArr,
      mainPlVid: vidIdArr[0].videoID
    })


    event.preventDefault()
  }

  typingArtistName(event) {
    this.setState({ artistName: event.target.value })
  }

  loadVidtoMainPlayer(youtubeid) {
    this.setState({ mainPlVid: youtubeid })
  }

  addFav() {

    var artName = this.state.currentArtist;
    var artVids = this.state.artistMVs

    axios.post('http://localhost:3001/favo5', {
      artistName: artName,
      artistVideos: artVids
    })
      .then(function (response) {
        console.log(response);
        //may want to change so it just reloads component
        
        
      })
      this.getFavList();

  }





  //selects a video from
  favArtistSelect() {
    console.log('load artist to page (awaiting api quota clearnace)')
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <form className='searchBr' onSubmit={this.searchArtist}>
            <input type="text" placeholder="Search.." onChange={this.typingArtistName}></input>
            <button>Find music videos!!!!!</button>
          </form>

          <div style={{ 'backgroundImage': `url(${'./old-television-12.png'})` }} className='mainPlayerTV'>
            <MainPlayer vidInfo={this.state.mainPlVid} />
          </div>

          <div>

            <FivoFave thumbs={'hello'} favArtistSelect={this.favArtistSelect} addFav={this.addFav} listInfo={this.state.favoriteArtists}/>
            this is where some favs go
          </div>

        </header>
        <VideoList onClick={this.loadVidtoMainPlayer} musicVideos={this.state.artistMVs} />
      </div>
    );
  }
}

export default App;

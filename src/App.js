import React from 'react';
import MainPlayer from './MainPlayer'
import './App.css';
import VideoList from './VideoList'
import FivoFave from './FivoFave'
import TLCsearch from './TLCsearch'
import DRAKEsearch from './DRAKEsearch'
import MEGANSTALsearch from './MEGANSTALsearch'
import CHILDISHsearch from './CHILDISHsearch'

const axios = require('axios')



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentArtist:'',
      artistName: '',
      artistMVs: '',
      favoriteArtists: '', //?? maybe different route
      mainPlVid: ''
    }
    this.typingArtistName = this.typingArtistName.bind(this)
    this.searchArtist = this.searchArtist.bind(this)
    this.loadVidtoMainPlayer = this.loadVidtoMainPlayer.bind(this)
    this.addFav = this.addFav.bind(this)
    this.getFavList = this.getFavList.bind(this)
    this.reloadArtist = this.reloadArtist.bind(this)
    this.deleteArtist = this.deleteArtist.bind(this)
  }

  componentDidMount() {
    this.getFavList();
  }

  getFavList() {
    axios.get('http://localhost:3001/favo5')
      .then(response => {
        var responseArr = response.data;
        var resultsArr = [];
        for (var i = 0; i < responseArr.length; i++) {
          resultsArr.push(responseArr[i].artistName)
        }
        //is this necessary or is it just to restart the page? 
        this.setState({ favoriteArtists: resultsArr })
      });
  }

  searchArtist(event) {
    let searchArtist = this.state.artistName;
    if (searchArtist.length < 1) {
      alert('Search for an artist name')
      event.preventDefault()
      return;
    }else{

      let baseURL = 'https://www.googleapis.com/youtube/v3/'
      let requestURL = baseURL + 'search?part=snippet' +
        '&type=video' +
        '&q=' + searchArtist + 'music+videos' +
        '&key=AIzaSyC8JlqzKhJjsirGk71XH94ziySBeLb-iUQ';
  
      //disabled api call until clearance
  
      axios.get(requestURL)
      .then((response) => {
  
      // swap ARTISTsearch with response.data
      var vidIdArr = response.data.items.map(video => {
        return {
          videoID: video.id.videoId,
          key: video.id.videoId,
          title: video.snippet.title,
          thumbnail: video.snippet.thumbnails.default.url
        }
      })
  
      this.setState({
        currentArtist: this.state.artistName,
        artistMVs: vidIdArr,
        mainPlVid: vidIdArr[0].videoID
      })
  
  
      }, (error) => {
        console.log(error);
      });
  
      event.preventDefault()
    }

    
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
    var favArtArr = this.state.favoriteArtists;

    if (favArtArr.indexOf(artName) !== -1) {

      alert('you already have that artist in!')
      return
    } else if (artName.length < 1 || artName === undefined){
      alert('Search for music videos')
    } 
    else {

      axios.post('http://localhost:3001/favo5', {
        artistName: artName,
        artistVideos: artVids
      })
        .then(function (response) {
          console.log(response);
        })
    }

    this.getFavList();

  }

  reloadArtist(artist) {

    var reqURL = 'SELECT artistMVs.id, description, vidID, vidTHMN FROM artistMVs inner JOIN artists on artists.ID = artistMVS.artistID where artistName=' + '"' + artist + '"';
    axios.put('http://localhost:3001/obtainFromDB', {
      requestURL: reqURL
    })
      .then((response) => {
        const renamedResponse = response.data.map(videos => {
          return {
            thumbnail: videos.vidTHMN,
            title: videos.description,
            videoID: videos.vidID
          }
        })

        this.setState({
          currentArtist: artist,
          artistMVs: renamedResponse,
          mainPlVid: renamedResponse[0].videoID
        })
      })
  }

  deleteArtist(artist){

var answer = window.confirm("Are you sure you want to delete artist?")
if (answer) {
  let deleteCALL = 'DELETE FROM artistMVs, artists USING artistMVS inner JOIN artists on artists.ID = artistMVS.artistID where artistName='+ '"' + artist + '"';
  axios.delete('http://localhost:3001/favo5', {
    data: {deleterURL: deleteCALL}
})
.then(response => {
  this.getFavList();
})
}
else {
  alert(artist + ' NOT deleted')
}

  }

  render() {


    return (
      <div className="App">
        <header className="App-header">

        <div className='favorites'>
            <h1>music... BANK!</h1>
            <FivoFave
              favArtistSelect={this.favArtistSelect}
              addFav={this.addFav}
              listInfo={this.state.favoriteArtists}
              reloadArtist={this.reloadArtist}
              deleteArtist={this.deleteArtist}
            />
          </div>

          <form className='searchBr' onSubmit={this.searchArtist}>
            <input type="text" placeholder="Search.." onChange={this.typingArtistName}></input>
            <button>Find music videos!</button>
          </form>

          <div style={{ 'backgroundImage': `url(${'./old-television-12.png'})` }} className='mainPlayerTV'>
            <MainPlayer vidInfo={this.state.mainPlVid} />
          </div>

      <div className='vidList'>
            <VideoList onClick={this.loadVidtoMainPlayer} musicVideos={this.state.artistMVs} />

      </div>


        </header>
      </div>
    );
  }
}

export default App;

import React from 'react';
import VideoItem from './VideoItem'


class VideoList extends React.Component {
  
  render () {
    const donkey = this.props.musicVideos;
    var currentArtistVideos = donkey;
    if (this.props.musicVideos){
          currentArtistVideos = donkey.map(musicVideo =>{
        return (<div>

          <VideoItem
          key={musicVideo.id}
          videoId={musicVideo.id.videoId}
          info={musicVideo}
          onClick={this.props.onClick}
          />
        </div>
        )
    })

    }
    console.log(typeof([donkey]), donkey)
    // var sampleArr = [1,2,3,4];
    // var answer = sampleArr.map(number => number*10)
    // console.log('the answer is', answer)
  




    return (
        <div>
          
          <h2 className='videoList'>
              {currentArtistVideos || <VideoItem/>}
          </h2>
          
        </div>
    )
  }


}


export default VideoList;
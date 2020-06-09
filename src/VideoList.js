import React from 'react';
import VideoItem from './VideoItem'


class VideoList extends React.Component {

  render() {
    const donkey = this.props.musicVideos;
    var currentArtistVideos = donkey;
    if (this.props.musicVideos) {
      currentArtistVideos = donkey.map(musicVideo => {
        return (

          <VideoItem
            key={musicVideo.videoID}
            videoId={musicVideo.videoID}
            thumbnail={musicVideo.thumbnail}
            info={musicVideo.title}
            onClick={this.props.onClick}
          />

        )
      })
    }

    return (
      <div>

        <h2 className='videoList'>
          {currentArtistVideos || <VideoItem />}
        </h2>

      </div>
    )
  }


}


export default VideoList;
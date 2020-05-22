import React from 'react';
import VideoItem from './VideoItem'

class VideoList extends React.Component {

  render () {
    return (
        <div>
          
          <h2 class='videoList'>
            <VideoItem/>
            <VideoItem/>
            <VideoItem/>
            <VideoItem/>
            <VideoItem/>
          </h2>
          
        </div>
    )
  }


}


export default VideoList;
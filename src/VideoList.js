import React from 'react';
import VideoItem from './VideoItem'


class VideoList extends React.Component {
  
  render () {
    console.log('video list', this.props)

    


    return (
        <div>
          
          <h2 className='videoList'>
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
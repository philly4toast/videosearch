import React from 'react';
import VideoItem from './VideoItem'
const axios = require('axios')

class VideoList extends React.Component {

  componentDidMount(){
    axios.get()

  }


  render () {
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
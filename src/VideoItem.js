import React from 'react'


function VideoItem(props) {
  if (props.videoId){
    return (
      <div onClick={()=>props.onClick(props.videoId)} className='video'>
        <img src={props.info.snippet.thumbnails.default.url} alt=''/>
        {props.info.snippet.title}
      </div>
    )
  }else{

    return (
      <div>Search for an artist to find music videos</div>
    )
  }
}

export default VideoItem
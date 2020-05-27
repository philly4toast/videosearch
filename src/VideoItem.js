import React from 'react'


function VideoItem(props) {
  var thisvideoID = 'https://www.youtube.com/embed/' + props.videoId
  if (props.videoId){
    console.log('initial', props)
    return (
      <div onClick={()=>props.onClick(props.videoId)} className='video'>
        <img src={props.info.snippet.thumbnails.default.url}/>
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
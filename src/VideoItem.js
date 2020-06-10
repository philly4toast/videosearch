import React from 'react'


function VideoItem(props) {
  if (props.videoId){
    return (
      <div style={{'display': 'block', 'textAlign' : 'left'}} onClick={()=>props.onClick(props.videoId)} className='video'>
        <img src={props.thumbnail} alt=''/>
        {props.info}
      </div>
    )
  }else{

    return (
      <div>Search for an artist to find music videos</div>
    )
  }
}

export default VideoItem
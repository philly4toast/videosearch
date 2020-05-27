import React from 'react'


function VideoItem(props) {
  console.log('initial', props)
  var thisvideoID = 'https://www.youtube.com/embed/' + props.videoId
  if (props.videoId){
    return (
      <div className='video'>
        <iframe width="112" height="63" src={thisvideoID} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    )
  }else{

    return (
      <div>Look it up yo!</div>
    )
  }
}

export default VideoItem
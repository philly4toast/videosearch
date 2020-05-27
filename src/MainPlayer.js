import React from 'react';


class MainPlayer extends React.Component {

  render () {
    var videoId = 'kIRab-Rn_Ik';
    if (this.props.vidInfo){

      // console.log('mainplayer properties', this.props.vidInfo.id)
      videoId = this.props.vidInfo.id.videoId
    }

    return (<div className='mainplayer'>

<iframe width="560" height="315" src={"https://www.youtube.com/embed/" + videoId} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    )
  }


}


export default MainPlayer
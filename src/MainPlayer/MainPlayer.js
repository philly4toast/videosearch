import React from 'react';


// class MainPlayer extends React.Component {

//   render() {
//     var videoId = 'kIRab-Rn_Ik';
//     if (this.props.vidInfo) {
//       videoId = this.props.vidInfo
//     }

//     return (<div className='mainplayer'>
//       <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + videoId} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
//     </div>
//     )
//   }


// }

const MainPlayer = (props) => {
  var videoId = 'kIRab-Rn_Ik';
    if (props.vidInfo) {
      videoId = props.vidInfo
    }

    return (<div data-testid='mpPlayer' className='mainplayer'>
      <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + videoId} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
    )
}

export default MainPlayer
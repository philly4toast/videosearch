import React from 'react';

const MainPlayer = ({
  vidInfo
}) => {
  const videoId = vidInfo === undefined ? 'kIRab-Rn_Ik' : vidInfo;

  return (
    <div className='mainplayer'>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/" + videoId}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default MainPlayer

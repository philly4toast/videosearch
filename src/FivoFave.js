import React from 'react';
import FaveOne from './FaveOne'




export default class FivoFave extends React.Component {



render(){
  var artistList = this.props.listInfo;

  var favList = [];
  for (var i = 0; i < artistList.length; i++){
    favList.push((
      <FaveOne 
        name={artistList[i]}
        onClick={this.props.reloadArtist}
      />
  ))
  }

  return(
    <div>
      <button onClick={this.props.addFav}>Add to Favo5 </button>
      {favList}
    </div>
  )
}



}
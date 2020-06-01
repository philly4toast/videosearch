import React from 'react';
import FaveOne from './FaveOne'




export default class FivoFave extends React.Component {
render(){
  return(
    <div>
      <button onClick={this.props.addFav}>Add to Favo5 </button>
      <FaveOne onClick={this.props.favArtistSelect}/>


    </div>
  )
}



}
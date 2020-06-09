import React from 'react';
import FaveOne from './FaveOne'




export default class FivoFave extends React.Component {

render(){
  var artistList = this.props.listInfo;
  // console.log( artistList)
  var favList = [];
  for (var i = 0; i < artistList.length; i++){
    favList.push((
      <FaveOne 
        name={artistList[i]}
        onClick={this.props.favArtistSelect}
      />
  ))
  }
    // const favoritesList = artistList.map(artist =>{
    //   //split artists into faveone components
    //   return (
        
    //       <FaveOne 
    //         name={artist}
    //       />

    //   )
    // })
  
  // console.log('fivoFAVE', this.props)
  return(
    <div>
      <button onClick={this.props.addFav}>Add to Favo5 </button>
      {favList}
    </div>
  )
}



}
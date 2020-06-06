import React from 'react';
import FaveOne from './FaveOne'




export default class FivoFave extends React.Component {

//component did mount
// axiosGET the database and map the database and create a <div> list with all artist info added to <faveOne> components


render(){
  var artistList = this.props.listInfo;
  console.log( artistList)
  var favList = [];
  for (var i = 0; i < artistList.length; i++){
    favList.push((
      <FaveOne 
        name={artistList[i]}
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
      <FaveOne onClick={this.props.favArtistSelect}/>
      {favList}
    </div>
  )
}



}
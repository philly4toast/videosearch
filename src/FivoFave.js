import React from 'react';
import FaveOne from './FaveOne'




export default class FivoFave extends React.Component {

//component did mount
// axiosGET the database and map the database and create a <div> list with all artist info added to <faveOne> components


render(){
  console.log('fivoFAVE', this.props)
  const favoritesList = this.props.listInfo.map(artist =>{
    //split artists into faveone components


  })

  return(
    <div>
      <button onClick={this.props.addFav}>Add to Favo5 </button>
      <FaveOne onClick={this.props.favArtistSelect}/>


    </div>
  )
}



}
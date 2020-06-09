import React from 'react';
import FaveOne from './FaveOne'




export default class FivoFave extends React.Component {

  constructor(props){
    super()
    this.state = {
      data: ''
    }
    this.sender = this.sender.bind(this)
  }

  sender(childData){
    this.setState({data:childData})
  }



render(){
  var artistList = this.props.listInfo;
  console.log('data das goot', this.state.data)
  var favList = [];
  for (var i = 0; i < artistList.length; i++){
    favList.push((
      <FaveOne 
        name={artistList[i]}
        onClick={this.props.favArtistSelect}
        sender={this.sender}
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
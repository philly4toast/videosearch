import React from 'react';
import FaveOne from './FaveOne'




// export default class FivoFave extends React.Component {



// render(){
//   var artistList = this.props.listInfo;

//   var favList = [];
//   for (var i = 0; i < artistList.length; i++){
//     favList.push((
//       <FaveOne 
//         pushButton={this.props.deleteArtist}
//         name={artistList[i]}
//         key={artistList[i]}
//         onClick={this.props.reloadArtist}
//       />
//   ))
//   }

//   return(
//     <div>
//     <div>
//       {favList}
//     </div > 
//       <button className='addingBtn' onClick={this.props.addFav}>add ARTIST to MUSIC BANK</button>
//     </div>
//   )
// }



// }

const FivoFave = (props) => {
  var artistList = props.listInfo;

  var favList = [];
  for (var i = 0; i < artistList.length; i++){
    favList.push((
      <FaveOne 
        pushButton={props.deleteArtist}
        name={artistList[i]}
        key={artistList[i]}
        onClick={props.reloadArtist}
      />
  ))
  }
  return (
    <div>
    <div>
      {favList}
    </div > 
      <button className='addingBtn' onClick={props.addFav}>add ARTIST to MUSIC BANK</button>
    </div>

  )
}

export default FivoFave;
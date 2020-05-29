import React from 'react';
import FaveOne from './FaveOne'




export default class FivoFave extends React.Component {
render(){
  return(
    <div>
      <button onClick={()=>console.log('bigity boom! add that tune')}>Add to Favo5 </button>
      <FaveOne onClick={this.props.onClick}/>


    </div>
  )
}



}
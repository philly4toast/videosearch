import React from 'react';



export default class FaveOne extends React.Component {
render(){
  return(
    <div style={{'backgroundImage': 'url("https://i.ytimg.com/vi/DRS_PpOrUZ4/default.jpg")'}}>
      <h3 onClick ={this.props.onClick}>{this.props.name}</h3>
    </div>
  )
}



}
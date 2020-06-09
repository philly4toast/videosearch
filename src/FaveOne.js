import React from 'react';



export default class FaveOne extends React.Component {

constructor(props){
  super()
  this.state = {
    name: ''
  }
}

sendData(data){
  this.props.sender(data)
}

render(){
  return(
    <div style={{'backgroundColor' : 'black'}}>
      <h3 onClick ={()=>this.sendData(this.props.name)}>{this.props.name}</h3>
    </div>
  )
}



}
import React from 'react';



export default class FaveOne extends React.Component {

render(){
  return(
    <div style={{'backgroundColor' : 'black'}}>
      <h3 onClick ={()=>this.props.onClick(this.props.name)}>{this.props.name}</h3>
      <button onClick={()=>this.props.pushButton(this.props.name)}>no more!</button>
    </div>
  )
}

}
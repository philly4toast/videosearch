import React from 'react';
import './FaveOne.css';



export default class FaveOne extends React.Component {

render(){
  return(
    <div className='roundbottom' style={
      {
        'backgroundColor' : 'black',
        'background-size': '185px 100px',
        'background-image': "url('video.jpg')",
        

        
         'float' : 'left',
         'height': '100px',
         'width' : '185px',
         'margin' : '10px',
          'top': '100px',
         'fontSize': 20
        //  'overflow' : 'hidden'
      }
    }>
      <h3 className='yoshi' onClick ={()=>this.props.onClick(this.props.name)}>{this.props.name}</h3>
      <button style={{'background-color' : '#FACB61', 'color':'#282c34'}}onClick={()=>this.props.pushButton(this.props.name)}>DELETE</button>
    </div>
  )
}

}
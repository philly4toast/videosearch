import React from 'react';
import logo from './logo.svg';
import MainPlayer from './MainPlayer'
import './App.css';
import VideoList from './VideoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">


      <div className='searchBr'>
        <input type="text" placeholder="Search.."></input>
        <button onClick={()=>console.log('clickity')}>Find music videos</button>
      </div>

      <div style={{'backgroundImage': `url(${'./old-television-12.png'})`}} className='mainPlayerTV'>
        {/* <img src="old-television-12.png"/> */}
          <MainPlayer/>

      </div>
      </header>
      <VideoList/>
    </div>
  );
}

export default App;

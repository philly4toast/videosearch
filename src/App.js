import React from 'react';
import logo from './logo.svg';
import MainPlayer from './MainPlayer'
import './App.css';
import VideoList from './VideoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <input type="text" placeholder="Search.."></input>

        <p>
          <MainPlayer/>
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          checkout youtube
        </a>
      </header>
      <VideoList/>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import VideoList from './VideoList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <input type="text" placeholder="Search.."></input>

      <iframe width="560" height="315" src="https://www.youtube.com/embed/RVD-ZErweBk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p>
          Main Video player goes here
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

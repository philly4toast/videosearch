import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import MainPlayer from './MainPlayer'
// import { isTSAnyKeyword } from '@babel/types';


//Main player loads 
it('renders Mainplayer without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainPlayer/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('renders Mainplayer correctly', ()=>{
//   const { getByTestId } = render(<MainPlayer vidInfo='M7FIvfx5J10'/>)
//   expect(videoId).toBe('M7FIvfx5J10')
// })
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import MainPlayer from './MainPlayer'
// import { isTSAnyKeyword } from '@babel/types';

test('renders App component to page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('music... BANK!');
  expect(linkElement).toBeInTheDocument();
});

// HTML page loads


//Main player has a video loaded (at all times)
test('Main Player component has a video to load', () => {
  const { getByProps } = render(<MainPlayer />);
  const prop = getByProps(vidInfo);
  expect(prop).toBeInTheDocument(); //may need to find one that checks for this specifically for props
});

//favorite's list renders to page
  //in form of a cassette button

//searching for an artist renders results in a video list (5)

//clicking on a favorite will also render video list (5)

//clicking on a video item will load it to the main player


import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import App from './App';
// import { isTSAnyKeyword } from '@babel/types';

it('renders App component to page', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('music... BANK!');
  expect(linkElement).toBeInTheDocument();
});

// HTML page loads



//favorite's list renders to page
  //in form of a cassette button

//searching for an artist renders results in a video list (5)

//clicking on a favorite will also render video list (5)

//clicking on a video item will load it to the main player


import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import VideoList from './VideoList';
// import { isTSAnyKeyword } from '@babel/types';

it('renders VideoList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<VideoList/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
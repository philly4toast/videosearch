import React from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import FivoFave from './FivoFave';
// import { isTSAnyKeyword } from '@babel/types';

it('renders FivoFave without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FivoFave/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
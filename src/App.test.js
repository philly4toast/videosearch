import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { isTSAnyKeyword } from '@babel/types';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('music... BANK!');
  expect(linkElement).toBeInTheDocument();
});

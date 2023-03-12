import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders the Header component with the correct image alt text', () => {
    render(<Header />);
    const imgElement = screen.getByAltText('Logo_pagina');
    expect(imgElement).toBeInTheDocument();
  });

});

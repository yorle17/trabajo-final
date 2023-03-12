import React from 'react';
import { render, screen } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel', () => {
  test('renders carousel with all images', () => {
    render(<Carousel />);
    const carouselImages = screen.getAllByAltText(/Producto \d/);
    expect(carouselImages).toHaveLength(5);
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders the Footer component with Facebook and WhatsApp icons, and the text "2023"', () => {
    render(<Footer />);
    const facebookImgElement = screen.getByAltText('Facebook');
    const whatsappImgElement = screen.getByAltText('WhatsApp');
    expect(facebookImgElement).toBeInTheDocument();
    expect(whatsappImgElement).toBeInTheDocument();
  });
});

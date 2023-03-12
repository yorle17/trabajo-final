import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';

describe('Navbar', () => {
  test('renders the Navbar component', () => {
    render(<Navbar />);
    const inicioLink = screen.getByText('Inicio');
    expect(inicioLink).toBeInTheDocument();
    const productosLink = screen.getByText('Productos');
    expect(productosLink).toBeInTheDocument();
    const nosotrosLink = screen.getByText('Nosotros');
    expect(nosotrosLink).toBeInTheDocument();
    const ingresarLink = screen.getByText('Ingresar');
    expect(ingresarLink).toBeInTheDocument();
    const themeToggle = screen.getByRole('button', { name: 'Modo oscuro' });
    expect(themeToggle).toBeInTheDocument();

    fireEvent.click(themeToggle);
    expect(themeToggle.innerHTML).toEqual('Modo claro');

    fireEvent.click(themeToggle);
    expect(themeToggle.innerHTML).toEqual('Modo oscuro');
  });
});

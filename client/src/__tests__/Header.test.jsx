import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from '../components/Header';
import BrowserRouter, { BrowserRouter } from 'react-router-dom'

describe('Header component', () => {
  test('renders without crashing', () => {
    render(<Header />);
  });

  test('dropdown opens when input is clicked', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const input = screen.getByPlaceholderText('Type a name');
    fireEvent.click(input);
    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown closes when clicked outside', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const input = screen.getByPlaceholderText('Type a name');
    fireEvent.click(input);
    const dropdown = screen.getByTestId('dropdown');
    expect(dropdown).toBeInTheDocument();

    fireEvent.click(document.body);
    expect(dropdown).not.toBeInTheDocument();
  });

});

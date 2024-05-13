import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom'

describe('Header component', () => {
  test('renders without crashing', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
  });

  test('dropdown opens when input is clicked', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    const input = screen.getByPlaceholderText('Type a name');
    fireEvent.click(input);
    const dropdown = screen.getByLabelText('drop-down');
    expect(dropdown).toBeInTheDocument();
  });

  test('dropdown closes when clicked outside', () => {
    render(<BrowserRouter><Header /></BrowserRouter>);
    //const input = screen.getByPlaceholderText('Type a name');
    fireEvent.mouseDown(document);
    const dropdown = screen.getByLabelText('drop-down');
    expect(dropdown).toBeInTheDocument();

    fireEvent.click(document.body);
    expect(dropdown).not.toBeInTheDocument();
  });

});

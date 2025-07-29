import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Bopz SuperApp header', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toHaveTextContent('Bopz SuperApp');
});

test('renders welcome message', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Welcome to Bopz SuperApp/i);
  expect(welcomeElement).toBeInTheDocument();
});

test('renders Get Started button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Get Started/i);
  expect(buttonElement).toBeInTheDocument();
});

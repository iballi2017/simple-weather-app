import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

test('renders the correct title passed as prop', () => {
    render(<Header title="Weather App" />);
    const textElement = screen.getByText(/weather app/i);
    expect(textElement).toBeInTheDocument();
});
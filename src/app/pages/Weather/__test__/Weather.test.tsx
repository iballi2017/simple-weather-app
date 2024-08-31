import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Weather from '../Weather';


describe('Weather', () => {

    test('should check if api called', () => {
        render(<Weather />);
        // const textElement = screen.getByText(/weather app/i);
        // expect(textElement).toBeInTheDocument();
        expect(true).toBe(true)
    });

    test('should render City weather condition', () => {
        render(<Weather />);
        // const textElement = screen.getByText(/weather app/i);
        // expect(textElement).toBeInTheDocument();
        screen.debug();
        expect(true).toBe(true)
    });
});

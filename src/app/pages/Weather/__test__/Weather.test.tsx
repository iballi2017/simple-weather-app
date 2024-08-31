import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Weather from '../Weather';


describe('Weather', () => {

    test('should render input element', () => {
        render(<Weather />);
        const inputElement = screen.getByPlaceholderText(/Enter city/i);
        expect(inputElement).toBeInTheDocument();
    });

    test('should render search button element', () => {
        render(<Weather />);
        const searchButtonlement = screen.getByRole('button', {
            name: /Search/i
        });
        expect(searchButtonlement).toBeInTheDocument();
    });


    test('should check if data is recieved after api call', async () => {
        render(<Weather />);
        const inputElement = screen.getByPlaceholderText(/Enter city/i);
        const searchButtonlement = screen.getByRole('button', {
            name: /Search/i
        });

        fireEvent.change(inputElement, {
            target: {
                value: "ghana"
            }
        });

        fireEvent.click(searchButtonlement)

        const detailsCArdElement = await screen.findByTestId('details-card');
        // screen.debug();
        expect(detailsCArdElement).toBeInTheDocument();
    });
});

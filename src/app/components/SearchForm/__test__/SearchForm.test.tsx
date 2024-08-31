import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchForm from '../SearchForm';

const mockSetCity = jest.fn();

describe('SearchForm', () => {
    test('should render input element', () => {
        render(<SearchForm
            handleInputChange={() => mockSetCity}
        />);
        const inputElement = screen.getByPlaceholderText(/Enter city/i);
        expect(inputElement).toBeInTheDocument();
    });

    test('should be able to type in the input', () => {
        render(<SearchForm
            handleInputChange={() => mockSetCity}
        />);
        const inputElement: any = screen.getByPlaceholderText(/Enter city/i);

        fireEvent.change(inputElement, {
            target: {
                value: "Lagos"
            }
        })
        expect(inputElement.value).toBe("Lagos");
    });
});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Sidebar from '../../components/primarySidebar/components/SideBar/index'; // Adjust the import path as needed

// Mock Zustand hooks
jest.mock('../../../../store/filteredstore', () => ({
    useFilterStore: () => ({
        filterCriteria: {
            minPrice: '',
            maxPrice: '',
            symbolMin: '',
            symbolMax: '',
            symbolCountMin: 0,
            symbolCountMax: 26,
            charPrefix: '',
            selectedCategories: [],
            category: '',
            selectedDomzones: [],
        },
        updateFilter: jest.fn(), // Mock the updateFilter function
    }),
}));

jest.mock('../../../../store/search.store', () => ({
    useSearchStore: () => ({
        searchQuery: '',
        setSearchQuery: jest.fn(),
    }),
}));
describe('Sidebar Component', () => {
    it('should handle category change', () => {
        const { getByRole } = render(<Sidebar />);
        const updateFilterMock = jest.fn();

        fireEvent.change(getByRole('select', { name: /category/i }), {
            target: { value: 'technology' },
        });

        expect(updateFilterMock).toHaveBeenCalledWith({
            selectedCategories: ['technology'],
        });
    });

    it('should handle price change', () => {
        const { getByRole } = render(<Sidebar />);
        const updateFilterMock = jest.fn();

        fireEvent.change(getByRole('slider', { name: /price/i }), {
            target: { value: '500' },
        });

        expect(updateFilterMock).toHaveBeenCalledWith({
            minPrice: '500',
            maxPrice: '',
        });
    });

    it('should handle symbol count change', () => {
        const { getByRole } = render(<Sidebar />);
        const updateFilterMock = jest.fn();

        fireEvent.change(getByRole('slider', { name: /symbolCountMin/i }), {
            target: { value: '5' },
        });

        fireEvent.change(getByRole('slider', { name: /symbolCountMax/i }), {
            target: { value: '15' },
        });

        expect(updateFilterMock).toHaveBeenCalledWith({
            symbolCountMin: 5,
            symbolCountMax: 15,
        });
    });

    it('should handle input change', () => {
        const { getByLabelText } = render(<Sidebar />);
        const updateFilterMock = jest.fn();

        const inputElement = getByLabelText(/Search/i);

        fireEvent.change(inputElement, { target: { value: 'test' } });

        expect(updateFilterMock).toHaveBeenCalledWith({
            searchQuery: 'test',
        });
    });

    it('should handle domzone change', () => {
        const { getByLabelText } = render(<Sidebar />);
        const updateFilterMock = jest.fn();

        const checkboxElement = getByLabelText(/Domzone1/i);

        fireEvent.click(checkboxElement);

        expect(updateFilterMock).toHaveBeenCalledWith({
            selectedDomzones: ['Domzone1'],
        });
    });

});

import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SortComponent from '../../components/Sort/index';

describe('SortComponent', () => {
  it('should render without errors', () => {
    render(<SortComponent />);
  });

  it('should handle paragraph click and update state', () => {
    const { getByText } = render(<SortComponent />);
    const paragraph = getByText('სორტირება: ');

    fireEvent.click(paragraph);
    expect(paragraph).toHaveClass('clickedTitleOne');
  });

  it('should handle button click and show MobileSideBar', () => {
    const { getByText, getByTestId } = render(<SortComponent />);
    const button = getByText('გაფილტრე');
    fireEvent.click(button);

    const mobileSideBar = getByTestId('mobile-sidebar');
    expect(mobileSideBar).toBeInTheDocument();
  });

  it('should handle filter change and update state', () => {
    const { getByText, getByRole } = render(<SortComponent />);
    const button = getByText('ფილტრი');
    fireEvent.click(button);

    const inputElement = getByRole('textbox', { name: 'minPrice' });
    fireEvent.change(inputElement, { target: { value: '100' } });

    expect(inputElement).toBe('100');
  });
});

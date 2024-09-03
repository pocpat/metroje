import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SearchPanel from '../common/searchpanel-listings/SearchPanel'; // Assuming correct path

describe('SearchPanel', () => {
  test('handleChange updates the form data correctly', () => {
    const { getByLabelText } = render(<SearchPanel />);

    const locationInput = getByLabelText('Location');
    fireEvent.change(locationInput, { target: { value: 'New Location' } });

    expect(locationInput.value).toBe('New Location');
  });
});
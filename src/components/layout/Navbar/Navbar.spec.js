import React from 'react';
import { render } from 'test-utils';
import Navbar from './Navbar'

describe('Navbar Component', () => {
  test('Navbar renders correctly', () => {
    const { queryByTestId } = render(<Navbar />)
    expect(queryByTestId('navbar')).not.toEqual(null)
  })
});

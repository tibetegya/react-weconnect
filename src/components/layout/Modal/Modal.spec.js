import React from 'react';
import { render } from 'test-utils';
import Modal from './Modal';

describe('Modal Component', () => {
  it('should render corectly', () => {
    const { getByTestId } = render(<Modal />);
    expect(getByTestId('modal')).toMatchSnapshot();
  });
});

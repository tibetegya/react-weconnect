import React from 'react';
import { render } from 'test-utils'; // eslint-disable-line import/no-unresolved
import AppShell from './AppShell';

describe('AppShell Component tests', () => {
  it('should render corectly', () => {
    const { getByTestId } = render(<AppShell />);
    expect(getByTestId('app-shell')).toMatchSnapshot();
  });
});

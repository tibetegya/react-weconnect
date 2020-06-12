import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import AppShell from './AppShell'

export default {
  title: 'AppShell',
  component: AppShell,
  decorators: [ withA11y ]
}

export const AppShellStorys = () => (<AppShell />)
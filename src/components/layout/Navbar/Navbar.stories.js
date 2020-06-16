import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Navbar from './Navbar';

// const bodyDecorator = storyfn => (
//   <div
//     style={{
//       minHeight: '200vh',
//       position: 'relative',
//       display: 'flex',
//       overflow: 'scroll',
//       flexDirection: 'column',
//     }}
//   >
//     {storyfn()}
//   </div>
// );

export default {
  title: 'Navbar',
  component: Navbar,
  decorators: [
    // bodyDecorator,
    withA11y,
  ],
};

export const NavbarMobile = () => <Navbar />;

NavbarMobile.story = {
  parameters: {
    viewport: {
      defaultViewport: 'iphone6',
    },
  },
};

export const NavbarTablet = () => <Navbar />;

NavbarTablet.story = {
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};

export const NavbarDesktop = () => <Navbar />;

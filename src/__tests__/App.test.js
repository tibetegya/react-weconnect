import React from 'react';
import App from '../App';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'



it('renders without crashing', () => {
let wrapper = mount(<App />);
expect(wrapper.find('.container-fluid').exists()).toBe(true)
});

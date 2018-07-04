import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/layout/navbar'

describe('Navbar Component', () => {

    let wrapper = mount(<MemoryRouter><Navbar /></MemoryRouter>)

    it('should render without throwing an error', () => {
      // console.log(wrapper.instance())
        expect(wrapper.find('nav.navbar').exists()).toBe(true)
      })

      it('should render without throwing an error', () => {
        expect(wrapper.find('#weconnect').text()).toContain('WeConnect');
      })
});
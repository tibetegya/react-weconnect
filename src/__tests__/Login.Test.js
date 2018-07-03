import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Login from '../components/login'

describe('Login Component', () => {

    let wrapper = mount(<MemoryRouter><Login /></MemoryRouter>)

    it('should render without throwing an error', () => {
        expect(wrapper.find('form.login').exists()).toBe(true)
      })

})
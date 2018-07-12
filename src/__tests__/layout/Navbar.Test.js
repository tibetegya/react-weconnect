import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'

describe('Navbar Component', () => {

    

    it('should render without throwing an error', () => {
      let wrapper = mount(<MemoryRouter><Navbar /></MemoryRouter>)
        expect(wrapper.find('nav.navbar').exists()).toBe(true)
      })

      it('should render without throwing an error', () => {
        let wrapper = mount(<MemoryRouter><Navbar /></MemoryRouter>)
        expect(wrapper.find('#weconnect').text()).toContain('WeConnect');
      })

      it('should render settings button', () => {
        localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYnJ5bzEyIiwiZXhwIjoxNTMxMjMzMTc0fQ.dfe-LI7c19B4yKopOLts_UBIBKnE25hP_wavPQeLWi4')
        let wrapper = shallow(<Navbar />)
        expect(wrapper.instance().state.isLoggedIn).toBe(true);
      })

});
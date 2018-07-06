import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Profile from '../../components/layout/profile'

describe('Profile Component', () => {

    it('should render without throwing an error', () => {
      let wrapper = mount(<MemoryRouter><Profile /></MemoryRouter>)
        expect(wrapper.find('.block-profile').exists()).toBe(true)
      })

      it('should render business profile', () => {
        let actionButton = jest.fn()
        let wrapper = shallow(<Profile type='business' actionButton={actionButton}/>)
          expect(wrapper.find('.business-profile').exists()).toBe(true)
        })

        it('should render user profile', () => {
          let actionButton = jest.fn()
          let wrapper = shallow(<Profile type='user' actionButton={actionButton}/>)
            expect(wrapper.find('.user-profile').exists()).toBe(true)
          })
});
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import SettingsButton from '../../components/auth/settings'
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios'
import {notify} from 'react-notify-toast'

describe('SettingsButton Component', () => {

    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYnJ5bzEyIiwiZXhwIjoxNTMxMjYxNDcwfQ.hFiNbShE9kQxSfZjzd3zM0P0A5kLocrU8yNjOb2O17g'
    localStorage.setItem('token', token)
    const wrapper = mount(<MemoryRouter initialEntries={['/']}><SettingsButton user={"george"} logout={{isLoggedIn: true, token: "sfsdf"}} /></MemoryRouter>)

    beforeEach(function () {
      })
    afterEach(()=>{
        notify.show.mockClear()

    })

    it('should render', ()=>{
    expect(wrapper.find(SettingsButton).exists()).toBe(true)

    })
    it('renders',()=>{
          let component = wrapper.find(SettingsButton)
    } )

})

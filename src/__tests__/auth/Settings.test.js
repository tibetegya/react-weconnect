import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import SettingsButton from '../../components/auth/Settings'
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios'
import {notify} from 'react-notify-toast'
import {ROOT_URL} from '../../App'

describe('SettingsButton Component', () => {

    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYnJ5bzEyIiwiZXhwIjoxNTMxMjYxNDcwfQ.hFiNbShE9kQxSfZjzd3zM0P0A5kLocrU8yNjOb2O17g'
    localStorage.setItem('token', token)
    let mock = new MockAdapter(axios)
    mock.onPost(`${ROOT_URL}/auth/logout`).reply(200, {message: 'You are logged out'})
    const wrapper = shallow(<SettingsButton user={"george"} logout={{isLoggedIn: true, token: "sfsdf"}} />)

    beforeEach(function () {
      })
    afterEach(()=>{
        notify.show.mockClear()

    })

    it('should render', ()=>{
    // expect(wrapper.find('#settings').exists()).toBe(true)

    })

})

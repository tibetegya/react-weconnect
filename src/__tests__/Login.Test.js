import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Login from '../components/auth/login'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'


describe('Login Component', () => {
    const mock = new MockAdapter(axios)

    let wrapper = shallow(<MemoryRouter><Login /></MemoryRouter>)

    // it('should render without throwing an error', () => {
    //     expect(wrapper.find('form.login').exists()).toBe(true)
    // })

    it('logins in user', async ()=>{
        mock.onPost(`/auth/login`).reply(200, {})
        wrapper.setState({
            username: 'rwot',
			password: 'romo'
        })
        const login = wrapper.find(Login);//.dive();
        // console.log(login)
        const form = login.find('form');
        console.log(form)
        // form.simulate('submit',{

        // })
    })
    

})
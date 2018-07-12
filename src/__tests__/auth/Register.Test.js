import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Register from '../../components/auth/Register';
import axios from 'axios'
import {notify} from 'react-notify-toast'

describe('Login Component', () => {

    const wrapper = shallow(<Register />)
    beforeEach(function () {
      })
    afterEach(()=>{
        notify.show.mockClear()

        wrapper.instance().setState({
            username: '',
            email: '',
            password: '',
            comfirmPassword: ''
		})
    })


    it('should render the register form', () => {
        expect(wrapper.find('form.register').exists()).toBe(true)
    })


    it('should tell user to enter username', ()=>{

        let spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
        wrapper.find('input[name="email"]').simulate('change', {target:{name:'email',value: 'flavia@andela.com'}})
        wrapper.find('form.register').simulate('submit',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();
        expect(notify.show).toHaveBeenCalledWith('Username is missing', 'error')
    })

    it('should tell user to enter email', ()=>{

        let spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
        wrapper.find('input[name="username"]').simulate('change', {target:{name:'username',value: 'flavia'}})
        wrapper.find('form.register').simulate('submit',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();
        expect(notify.show).toHaveBeenCalledWith("Email is missing", "error")
    })


    it('should tell user to enter password', ()=>{

        let spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
        wrapper.find('input[name="username"]').simulate('change', {target:{name:'username',value: 'flavia'}})
        wrapper.find('input[name="email"]').simulate('change', {target:{name:'email',value: 'flavia@andela.com'}})
        wrapper.find('form.register').simulate('submit',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();
        expect(notify.show).toHaveBeenCalledWith('Password is missing', 'error')
    })

    it('should confirm password', ()=>{

        let spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
        wrapper.find('input[name="username"]').simulate('change', {target:{name:'username',value: 'flavia'}})
        wrapper.find('input[name="email"]').simulate('change', {target:{name:'email',value: 'flavia@andela.com'}})
        wrapper.find('input[name="password"]').simulate('change', {target:{name:'password',value: '123456789'}})
        wrapper.find('input[name="comfirmPassword"]').simulate('change', {target:{name:'comfirmPassword',value: '123456789'}})
        wrapper.find('form.register').simulate('submit',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();
        expect(notify.show).toHaveBeenCalledWith("Password Cofirmed", "success")
    })

    it('should notify user of un-confirmed password', ()=>{

        let spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
        wrapper.find('input[name="username"]').simulate('change', {target:{name:'username',value: 'flavia'}})
        wrapper.find('input[name="email"]').simulate('change', {target:{name:'email',value: 'flavia@andela.com'}})
        wrapper.find('input[name="password"]').simulate('change', {target:{name:'password',value: '123456789'}})
        wrapper.find('input[name="comfirmPassword"]').simulate('change', {target:{name:'comfirmPassword',value: '1234567890'}})
        wrapper.find('form.register').simulate('submit',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();
        expect(notify.show).toHaveBeenCalledWith("Password does not match", "error")
    })

    it('should ask user to input password', ()=>{

        let spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
        wrapper.find('input[name="username"]').simulate('change', {target:{name:'username',value: 'flavia'}})
        wrapper.find('input[name="email"]').simulate('change', {target:{name:'email',value: 'flavia@andela.com'}})
        wrapper.find('input[name="comfirmPassword"]').simulate('change', {target:{name:'comfirmPassword',value: '1234567890'}})
        wrapper.find('form.register').simulate('submit',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();
        expect(notify.show).toHaveBeenCalledWith("Password is missing", "error")
        expect(notify.show).toHaveBeenCalledWith("Input the password first", "error")
    })

    it('should call handleInput', ()=>{

        const spy = jest.spyOn(wrapper.instance(), 'handleInput')
    })

})
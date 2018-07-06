import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Login from '../../components/auth/login'
import axios from 'axios'
import moxios from 'moxios'
import {notify} from 'react-notify-toast'


describe('Login Component', () => {

    const wrapper = shallow(<Login />)
    beforeEach(function () {
        // import and pass your custom axios instance to this method
        moxios.install()
      })
    afterEach(()=>{
        moxios.uninstall()
        notify.show.mockClear()

        wrapper.instance().setState({
			username: '',
			password: '',
			token: '',
			emailForReset:'',
			newPassword :'',
			confirmNewPassword: ''
		})
    })


    it('should render the login form', () => {

        let loginForm = wrapper.find('form.login')

        expect(wrapper.find('form.login').exists()).toBe(true)
    })

    it('should render the reset modal', () => {
        expect(wrapper.find('#resetModal').exists()).toBe(true)
    })

    it('simulates input event', ()=>{
        wrapper.find('input[name="username"]').simulate('change', {target:{name:'username',value: 'flavia'}})
        wrapper.find('input[name="password"]').simulate('change', {target:{name:'password',value: 'flavia@andela.com'}})
        expect(wrapper.instance().state.username).toEqual('flavia')
        expect(wrapper.instance().state.password).toEqual('flavia@andela.com')
    })

    it('should call handleInput', ()=>{

        const spy = jest.spyOn(wrapper.instance(), 'handleInput')
    })

    it('should notify user', ()=>{
        let spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
        wrapper.find('input[name="username"]').simulate('change', {target:{name:'username',value: 'flavia'}})
        wrapper.find('input[name="password"]').simulate('change', {target:{name:'password',value: 'flavia@andela.com'}})
        wrapper.find('form.login').simulate('submit',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();

    })

    it('should notify user when they do not enter password', ()=>{
        let spy = jest.spyOn(wrapper.instance(), 'handleSubmit');
        wrapper.find('input[name="username"]').simulate('change', {target:{name:'username',value: 'flavia'}})
        wrapper.find('form.login').simulate('submit',{preventDefault: ()=>{}})
        expect(notify.show).toHaveBeenCalledWith('Password is missing', 'error')

    })
    it('should validate email on reset', ()=>{
        let spy = jest.spyOn(wrapper.instance(), 'handlePasswordReset');
        wrapper.find('input[name="newPassword"]').simulate('change', {target:{name:'newPassword',value: '123456789'}})
        wrapper.find('#buttonForReset').simulate('click',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();
        expect(notify.show).toHaveBeenCalledWith('Email is missing', 'error')

    })
    it('should validate password on reset', ()=>{
        let spy = jest.spyOn(wrapper.instance(), 'handlePasswordReset');
        wrapper.find('input[name="emailForReset"]').simulate('change', {target:{name:'emailForReset',value: 'flavia@andela.com'}})
        wrapper.find('#buttonForReset').simulate('click',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();
        expect(notify.show).toHaveBeenCalledWith('Password is missing', 'error')

    })

    it('should validate confirm password on reset', ()=>{
        let spy = jest.spyOn(wrapper.instance(), 'handleInput');
        wrapper.find('input[name="emailForReset"]').simulate('change', {target:{name:'emailForReset',value: 'flavia@andela.com'}})
        wrapper.find('input[name="newPassword"]').simulate('change', {target:{name:'newPassword',value: 'newpasword1234'}})
        wrapper.find('input[name="confirmNewPassword"]').simulate('change', {target:{name:'confirmNewPassword',value: 'newpasword1234'}})
        wrapper.find('#buttonForReset').simulate('click',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();
        expect(notify.show).toHaveBeenCalledWith('Password Cofirmed', 'success', 800)

    })

    it('should notify user on un matched password on reset', ()=>{
        let spy = jest.spyOn(wrapper.instance(), 'handleInput');
        wrapper.find('input[name="emailForReset"]').simulate('change', {target:{name:'emailForReset',value: 'flavia@andela.com'}})
        wrapper.find('input[name="newPassword"]').simulate('change', {target:{name:'newPassword',value: 'newpasword1234'}})
        wrapper.find('input[name="confirmNewPassword"]').simulate('change', {target:{name:'confirmNewPassword',value: 'newpasword1234567'}})
        wrapper.find('#buttonForReset').simulate('click',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();
        expect(notify.show).toHaveBeenCalledWith('Password does not match', 'error')

    })

    it('should notify user to input password first before reset', ()=>{
        let spy = jest.spyOn(wrapper.instance(), 'handleInput');
        wrapper.find('input[name="emailForReset"]').simulate('change', {target:{name:'emailForReset',value: 'flavia@andela.com'}})
        wrapper.find('input[name="confirmNewPassword"]').simulate('change', {target:{name:'confirmNewPassword',value: 'newpasword1234567'}})
        wrapper.find('#buttonForReset').simulate('click',{preventDefault: ()=>{}})
        expect(spy).toHaveBeenCalled();
        expect(notify.show).toHaveBeenCalledWith('Input new password first', 'error')

    })

})
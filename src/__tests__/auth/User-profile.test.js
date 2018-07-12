import React from 'react';
import { shallow, mount, render } from 'enzyme';
import UserProfile from '../../components/auth/userProfile'
import {MemoryRouter} from 'react-router-dom'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import {notify} from 'react-notify-toast'
import {ROOT_URL} from '../../App'
import BusinessCard from '../../components/business/Business'

describe('UserProfile Component', () => {

    let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYnJ5bzEyIiwiZXhwIjoxNTMxMjYxNDcwfQ.hFiNbShE9kQxSfZjzd3zM0P0A5kLocrU8yNjOb2O17g'
    const match ={
        params:{
            name: 'bryo12'
        }
    }

    const wrapper = shallow(<UserProfile match={match}/>)
    let mock = new MockAdapter(axios)
    mock.onGet(`${ROOT_URL}/businesses`).reply(200, {businesses: [
        {
            business_name :'business',
            category : 'software',
            location : 'bukoto',
            profile: 'we are number one',
            id: 1
        }
    ]})
    mock.onPost(`${ROOT_URL}/businesses`).reply(200, {message: 'added successfully'})
    localStorage.setItem('token', token)
    beforeEach(function () {
      })
    afterEach(()=>{
        notify.show.mockClear()
        wrapper.setState({
            businessName: '',
            category: '',
            businessAddress: '',
            businessCity: '',
            businessCountry: '',
            description: '',
            businessData: [],
        })

    })


    it('should render', ()=>{

    const wrapper = shallow(<UserProfile match={match}/>)
    expect(wrapper.find('.user-profile').exists()).toBe(true)
    })

    it('should notify user to input business name', ()=>{
        wrapper.instance().handleSubmit({preventDefault: ()=>{}})
        expect(notify.show).toHaveBeenCalledWith("Business Name is missing", "error")
        })

    it('should notify user to input category', ()=>{
        wrapper.setState({
            businessName: 'myBusiness'
        })
        wrapper.instance().handleSubmit({preventDefault: ()=>{}})
        expect(notify.show).toHaveBeenCalledWith("You must select a Category", "error")
        })

    it('should notify user to input Country', ()=>{

        wrapper.setState({
            businessName: 'myBusiness',
            category: 'myCategory'})
        wrapper.instance().handleSubmit({preventDefault: ()=>{}})
        expect(notify.show).toHaveBeenCalledWith("You must select a Country", "error")
        })

    it('should notify user to input business City', ()=>{

        wrapper.setState({
            businessName: 'myBusiness',
            category: 'myCategory',
            businessCountry: 'myCountry'
        })
        wrapper.instance().handleSubmit({preventDefault: ()=>{}})
        expect(notify.show).toHaveBeenCalledWith("City is missing", "error")
    })

    it('should notify user to input business Address', ()=>{

        wrapper.setState({
            businessName: 'myBusiness',
            category: 'myCategory',
            businessCountry: 'myCountry',
            businessCity: 'myCity'
        })
        wrapper.instance().handleSubmit({preventDefault: ()=>{}})
        expect(notify.show).toHaveBeenCalledWith("business Address is missing", "error")
    })

    it('should notify user to input business Description', ()=>{

        wrapper.setState({
            businessName: 'myBusiness',
            category: 'myCategory',
            businessCountry: 'myCountry',
            businessCity: 'myCity',
            businessAddress: 'myStreet'
        })
        wrapper.instance().handleSubmit({preventDefault: ()=>{}})
        expect(notify.show).toHaveBeenCalledWith("Description is missing", "error")
    })

    it('should notify user to input business Description', ()=>{
        mock.onGet(`${ROOT_URL}/businesses`).reply(200, {businesses: [
            {
                business_name :'business',
                category : 'software',
                location : 'bukoto',
                profile: 'we are number one',
                id: 1
            }
        ]})

        wrapper.setState({
            businessName: 'myBusiness',
            category: 'myCategory',
            businessCountry: 'myCountry',
            businessCity: 'myCity',
            businessAddress: 'myStreet',
            description: 'myDescription'
        })
        wrapper.instance().handleSubmit({preventDefault: ()=>{}})
    })

    it('should get businesses', ()=>{
        expect(wrapper.instance().mapBusinesses()[0].props.name).toEqual('business')
    })
    it('should display no businesses', ()=>{
        mock.onGet(`${ROOT_URL}/businesses`).reply(200, {businesses: []})

        expect(wrapper.instance().mapBusinesses().props.children).toEqual('You currently have no businesses')
    })

    it('should update state from handle input', ()=>{
        wrapper.instance().handleInput({target:{name: 'businessName', value: 'andela'}})
        expect(wrapper.state().businessName).toEqual('andela')
    })


})

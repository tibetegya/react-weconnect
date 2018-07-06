import React from 'react';
import { shallow, mount, render } from 'enzyme';
import BusinessProfile from '../../components/business/business-profile'
import {MemoryRouter} from 'react-router-dom'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter';
import {notify} from 'react-notify-toast'
import {ROOT_URL} from '../../App'

describe('BusinessProfile Component', () => {

    let match = {
        params:{
            id: 1
        }
    }

    localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYnJ5bzEyIiwiZXhwI\
    joxNTMxMjMzMTc0fQ.dfe-LI7c19B4yKopOLts_UBIBKnE25hP_wavPQeLWi4')

    let mock = new MockAdapter(axios)
    mock.onGet(`${ROOT_URL}/businesses/${1}`).reply(200, {businesses: []})
    mock.onDelete(`${ROOT_URL}/businesses/${1}`).reply(200, {businesses: []})
    mock.onGet(`${ROOT_URL}/businesses/${1}/reviews`).reply(200, {})
    mock.onPost(`${ROOT_URL}/businesses/${1}/reviews`).reply(201, {message: "Review added"})
    mock.onPut(`${ROOT_URL}/businesses/${1}`).reply(200, {businesses: []})

    const wrapper = shallow(<BusinessProfile match={match}/>)
    beforeEach(function () {


      })
    afterEach(()=>{
        notify.show.mockClear()
        wrapper.setState({
            title: '',
            body:''
        })

    })

    it('should render', ()=>{
        expect(wrapper.find('.business-profile').exists()).toBeTruthy()
    })

    it('should notify user of long reviews', ()=>{
        let bodyText = 'Another simple example using Promise and XMLHttpRequest \
                        to load an image is available at the MDN GitHub js-examples \
                        repository. You can also see it in action. Each step is \
                        commented and allows you to follow the Promise and XHR \
                        architecture closely.'

        wrapper.instance().handleInput({target:{name: 'body', value: bodyText}})
        expect(notify.show).toBeCalledWith("review body is too long", "warning")
    })
    it('should notify user of long title', ()=>{
        let bodyText = 'Another simple example using Promise and XMLHttpRequest \
                        to load an image is available at the MDN GitHub js-examples'

        wrapper.instance().handleInput({target:{name: 'title', value: bodyText}})
        expect(notify.show).toBeCalledWith("review title is too long", "warning")
    })

    it('should notify user empty review', ()=>{
        let bodyText = 'Another simple example using Promise and XMLHttpRequest \
                        to load an image is available at the MDN GitHub js-examples'

        wrapper.instance().handleSubmitReview({preventDefault: ()=>{}})
        expect(notify.show).toBeCalledWith("Add a review before submission", "error")
        wrapper.setState({
            title: 'Another simple example',
            body:'Promise and XMLHttpRequest \
            to load an image is available at the MDN GitHu'
        })
        expect(notify.show).toBeCalledWith("Add a review before submission", "error")
    })
    it('should notify user on suceessful post', ()=>{
       wrapper.setState({
            title: 'Another simple example',
            body:'my place and your business to load an image is available at the zone'
        })
        wrapper.instance().handleSubmitReview({preventDefault: ()=>{}})
    })

    it('should notify user on suceessful post', ()=>{
        wrapper.setState({
             title: 'Another simple example',
             body:'my place and your business to load an image is available at the zone'
         })
         wrapper.instance().handleSubmitReview({preventDefault: ()=>{}})
     })

})

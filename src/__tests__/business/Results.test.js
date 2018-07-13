import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {MemoryRouter} from 'react-router-dom'
import axios from 'axios'
import Results from '../../components/business/Results'
import Paginator from '../../components/layout/Paginator'
import MockAdapter from 'axios-mock-adapter';
import {ROOT_URL} from '../../App'

describe('Results Component', () => {

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

    it('should render', ()=>{
    const wrapper = shallow(<Results history={[]}/>)
    expect(wrapper.find('.results').exists()).toBe(true)

    })

    it('redirects user',()=>{
        mock.onGet(`${ROOT_URL}/businesses`).reply(401, {businesses: []})
        const wrapper = mount(<Results history={[]}/>)
    })
    it('should change state on paginate', ()=>{
        const wrapper = mount(<Results history={[]}/>)
        wrapper.instance().paginate({preventDefault: ()=>{}, target: {name: "nextPage"}})
        expect(wrapper.state().page).toBe(null)
    })
    it('should set state on next page paginate', ()=>{
        const wrapper = mount(<Results history={[]}/>)
        wrapper.instance().paginate({preventDefault: ()=>{}, target: {name: "prevPage"}})
        expect(wrapper.state().page).toBe(null)
    })

    it('should change state on handleInput', ()=>{
        const wrapper = shallow(<Results history={[]}/>)
        wrapper.instance().handleInput({target:{name:'searchLocation', value:'uganda'}})
        expect(wrapper.instance().state.searchLocation).toEqual('uganda')
    })

    it('should submit data on handleSubmit', ()=>{
        const wrapper = shallow(<Results history={[]}/>)
        let spy = jest.spyOn(wrapper.instance(), 'submitData')
        wrapper.instance().handleSubmit({preventDefault:()=>{}})
        expect(spy).toBeCalled()
    })

    it('should get Businesses', ()=>{
        const wrapper = shallow(<Results history={[]}/>)
        let spy = jest.spyOn(wrapper.instance(), 'getBusinesses')
        wrapper.setState({
            searchCategory: 'technology',
            searchBusiness: 'andela',
            searchLocation: 'uganda'
        })
        wrapper.instance().handleSubmit({preventDefault:()=>{}})
        expect(spy).toHaveBeenCalledTimes(1)
    })

})

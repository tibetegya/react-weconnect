import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {MemoryRouter} from 'react-router-dom'
import axios from 'axios'
import Results from '../../components/business/results'
import Paginator from '../../components/layout/paginator'
import MockAdapter from 'axios-mock-adapter';
import {ROOT_URL} from '../../App'

describe('Results Component', () => {

    let mock = new MockAdapter(axios)
    mock.onGet(`${ROOT_URL}/businesses`).reply(200, {businesses: []})
    it('should render', ()=>{
    const wrapper = mount(<Results />)
    // console.log(wrapper)
    // expect(wrapper.find('.results').exists()).toBe(true)

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

})

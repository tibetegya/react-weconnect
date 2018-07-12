import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AddReview from '../../components/business/AddReview'

describe('AddReview Component', () => {

    it('should render', ()=>{
    const wrapper = shallow(<AddReview />)
    expect(wrapper.find('form.addsReview').exists()).toBe(true)
    })

})

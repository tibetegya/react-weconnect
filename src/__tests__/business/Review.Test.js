import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import ReviewCard from '../../components/business/review'

describe('BusinessCard function', () => {
    let wrapper = mount(<MemoryRouter><ReviewCard /></MemoryRouter>)
    it('should render', () => {
        expect(wrapper.find('.ReviewCard').exists()).toBe(true)
      })
    })
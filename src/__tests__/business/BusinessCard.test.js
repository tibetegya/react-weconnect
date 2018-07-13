import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import BusinessCard from '../../components/business/BusinessCard'

describe('BusinessCard function', () => {
    it('should render', () => {
      let wrapper = mount(<MemoryRouter><BusinessCard /></MemoryRouter>)
        expect(wrapper.find('.businessCard').exists()).toBe(true)
      })

      it('should return true from hasData ', () => {
        let wrapper = shallow(<BusinessCard name='my business'/>)
          expect(wrapper.instance().state.hasData()).toBe(true)
        })

        it('should return false from hasData ', () => {
          let wrapper = shallow(<BusinessCard name=''/>)
            expect(wrapper.instance().state.hasData()).toBe(false)
          })
    })

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Paginator from '../../components/layout/Paginator'

describe('Paginator Component', () => {


    it('should render without throwing an error', () => {

        let wrapper = mount(<Paginator />)
        expect(wrapper.find('ul.pagination').exists()).toBe(true)
      })

    it('should render a disabled button', () => {
      const paginator = shallow(<Paginator prevPage={null} nextPage={2}/>)
        expect(paginator.find('[disabled]').exists()).toBe(true)
      })
});
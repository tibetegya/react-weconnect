import React from 'react';
import { shallow, mount, render } from 'enzyme';
import AddBusiness from '../../components/business/AddBusiness'
import * as categoryData from '../../assets/categories.json';
import * as countryData from '../../assets/countries.json';

describe('AddBusiness Component', () => {

    it('should render', ()=>{

    const wrapper = shallow(<AddBusiness />)
    })

    it('should render edit form', ()=>{
        const wrapper = shallow(<AddBusiness location={undefined} />)
        })

})

import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Home from '../../components/layout/Home'

describe('home Component', () => {

    

    it('should run notifications', () => {
      let match = {
          params:{
              msg: 'delete-success'
          }
      }
      let wrapper = shallow(<Home match={match}/>)
      })

      it('should run notifications', () => {
        let match = {
            params:{
                msg: 'login-success'
            }
        }
        let wrapper = shallow(<Home match={match}/>)
        })
});
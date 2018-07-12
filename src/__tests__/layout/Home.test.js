import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import Home from '../../components/layout/Home'
import {notify} from 'react-notify-toast'

describe('home Component', () => {

    it('should run notifications', () => {
      let match = {
          params:{
              msg: 'delete-success'
          }
      }
      let wrapper = shallow(<Home match={match}/>)
      expect(notify.show).toBeCalledWith("Business Deleted sucessfully", "success")
      })

      it('should run notifications', () => {
        let match = {
            params:{
                msg: 'login-success'
            }
        }
        let wrapper = shallow(<Home match={match}/>)
        expect(notify.show).toBeCalledWith("Sucessfully logged in", "success", 1000)
        })
});
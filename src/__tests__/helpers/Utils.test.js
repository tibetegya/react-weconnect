import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import login, {isLoggedIn} from '../../components/helpers/utils'

describe('islogggedin function', () => {

      it('should return false', () => {

        expect(isLoggedIn()).toBe(false)
      })

      it('should return undefined', () => {
        let error={
            response:{
                status: 401
            }
        }
        let myObj = {
            props: {
                history:[]
            }
        }
        login(myObj,error)

        expect(myObj.props.history[0]).toBe('/login')
      })

      it('should return false', () => {
        localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYnJ5bzEyIiwiZXhwIjoxNTMxMjMzMTc0fQ.dfe-LI7c19B4yKopOLts_UBIBKnE25hP_wavPQeLWi4')
        expect(isLoggedIn()).toBe(true)
      })
});
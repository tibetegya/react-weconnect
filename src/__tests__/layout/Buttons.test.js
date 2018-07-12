import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { MemoryRouter } from 'react-router-dom'
import {BusinessesButton} from '../../components/layout/Buttons'

describe('BusinessesButton Component', () => {


      it('should render BusinessesButton ', () => {
        // localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYnJ5bzEyIiwiZXhwIjoxNTMxMjMzMTc0fQ.dfe-LI7c19B4yKopOLts_UBIBKnE25hP_wavPQeLWi4')
        
        expect(BusinessesButton()).toBe(null);
      })

      it('should render BusinessesButton ', () => {
        localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYnJ5bzEyIiwiZXhwIjoxNTMxMjMzMTc0fQ.dfe-LI7c19B4yKopOLts_UBIBKnE25hP_wavPQeLWi4')
        
        expect(BusinessesButton()).not.toBe(null);
      })
});
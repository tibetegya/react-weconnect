import {isLoggedIn} from '../../components/helpers/Utils'

describe('islogggedin function', () => {

      it('should return false', () => {

        expect(isLoggedIn()).toBe(false)
      })

      it('should return true', () => {
        localStorage.setItem('token', 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYnJ5bzEyIiwiZXhwIjoxNTMxMjMzMTc0fQ.dfe-LI7c19B4yKopOLts_UBIBKnE25hP_wavPQeLWi4')
        expect(isLoggedIn()).toBe(true)
      })
});
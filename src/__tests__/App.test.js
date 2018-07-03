import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

let store = {}
global.localStorage = {
    getItem: key => {
        return `{"token":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJleHBpcnkiOiIyMDE3LTA5LTI3IDIwOjAyOjUyLjYxNjk0MSJ9.3Qgmdip-oluZKFlFsCTrqq16H8gwnVpQQyY2z4YzJSU","user":{"email":"jdoe@example.com","first_name":"john","last_name":"doe","user_name":"jdoe"}}`
    },
    setItem: (key, value) => {
        store[key] = value
    },
    removeItem: key => Reflect.deleteProperty(store, key)
}


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

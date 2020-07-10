// * react redux here
import React from 'react';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {authReducer} from './reducers/authReducer';

const reducers = combineReducers({
  authReducer,
});

const store = () => createStore(reducers, applyMiddleware(thunkMiddleware));

export default function index() {
  return (
    <Provider store={store()}>
      <App />
    </Provider>
  );
}

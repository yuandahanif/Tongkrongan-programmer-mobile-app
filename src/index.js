// * react redux here
import React from 'react';
import {StatusBar} from 'react-native';
import App from './App';
import thunkMiddleware from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {authReducer} from './reducers/authReducer';
import {articleReducer} from './reducers/articleReducer';
import {YellowBox} from 'react-native';
YellowBox.ignoreWarnings(['Setting a timer']);

const reducers = combineReducers({
  authReducer,
  articleReducer,
});

const store = () => createStore(reducers, applyMiddleware(thunkMiddleware));

export default function index() {
  return (
    <Provider store={store()}>
      <StatusBar barStyle="light-content" />
      <App />
    </Provider>
  );
}

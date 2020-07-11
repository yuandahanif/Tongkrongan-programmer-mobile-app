import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  LOGIN_FAILED,
  LOGIN_WITH_GOOGLE,
} from './Types';
import AsyncStorage from '@react-native-community/async-storage';

export const login = payload => {
  const {username, password, googleAuth} = payload;
  return async dispatch => {
    AsyncStorage.getItem('@auth')
      .then(value => {
        if (value !== null) {
          value = JSON.parse(value);
          if (username === value.username && password === value.password) {
            dispatch(loginSuccess(value));
          } else {
            // ! if login failed
            dispatch(loginFailed());
          }
        }
      })
      .catch(e => dispatch(loginFailed()));
  };
};

const loginSuccess = value => ({
  type: LOGIN,
  payload: {
    username: value.username,
    password: value.password,
    googleAuth: value.googleAuth,
  },
});
const loginFailed = () => ({
  type: LOGIN_FAILED,
});

export const register = payload => {
  return dispatch => {
    const jsonValue = JSON.stringify(payload);
    AsyncStorage.setItem('@auth', jsonValue)
      .then(() => {
        dispatch(registerSuccess(payload));
      })
      .catch(() => dispatch(loginFailed()));
  };
};
const registerSuccess = value => ({
  type: REGISTER,
  payload: {
    username: value.username,
    email: value.email,
    password: value.password,
    googleAuth: value.googleAuth,
  },
});

export const loginWithGoogle = () => ({
  type: LOGIN_WITH_GOOGLE,
});

export const logout = () => ({type: LOGOUT});

export const checkAuth = () => {
  return async dispatch => {
    try {
      const value = await AsyncStorage.getItem('@isAuth');
      if (value !== null) {
        dispatch(() => ({
          type: CHECK_AUTH,
        }));
      }
      return;
    } catch (e) {
      console.warn(e);
    }
  };
};

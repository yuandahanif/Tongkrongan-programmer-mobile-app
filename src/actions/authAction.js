import {LOGIN, LOGOUT, REGISTER, CHECK_AUTH} from './Types';
import AsyncStorage from '@react-native-community/async-storage';

export const login = payload => {
  const {username, password, googleAuth} = payload;
  return async dispatch => {
    try {
      let value = await AsyncStorage.getItem('@auth');
      if (value !== null) {
        value = JSON.parse(value);
        if (googleAuth || (username !== '' && password !== '')) {
          try {
            await AsyncStorage.setItem('@isAuth', value.username);
            return dispatch(value => ({
              type: LOGIN,
              username: value.username,
              password: value.password,
              googleAuth: value.googleAuth,
            }));
          } catch (e) {
            console.warn(e);
          }
        }
      }
    } catch (e) {
      console.warn(e);
    }
  };
};

export const register = payload => {
  return async function(dispatch) {
    try {
      const jsonValue = JSON.stringify(payload);
      await AsyncStorage.setItem('@auth', jsonValue);
      return dispatch(payload => ({
        type: REGISTER,
        username: payload.username,
        email: payload.email,
        password: payload.password,
        googleAuth: payload.googleAuth,
      }));
    } catch (e) {
      console.warn(e);
    }
  };
};

export const logout = () => ({
  type: LOGOUT,
});

export const checkAuth = () => {
  return async (dispatch) => {
    try {
      const value = await AsyncStorage.getItem('@isAuth');
      console.log('check auth ', value);
      if (value !== null) {
        return dispatch(() => ({
          type: CHECK_AUTH,
        }));
      }
      return;
    } catch (e) {
      console.warn(e);
    }
  };
};

import {LOGIN, LOGOUT, REGISTER, CHECK_AUTH, LOGIN_FAILED} from '../actions/Types';

const authState = {
  username: '',
  password: '',
  email: '',
  loginWithGoogle: false,
  isAuth: false,
  loginFailed: false,
};

export const authReducer = (state = authState, action) => {
  console.log(action);
  const data = action.payload;
  switch (action.type) {
    case LOGIN:
      return {...state, username: data.username, password: data.password, isAuth: true};
    case REGISTER:
      return {...state};
    case CHECK_AUTH:
      return{...state, isAuth: true}
    case LOGIN_FAILED:
      return{...state, loginFailed: true}
    default: 
    return state;
  }
};

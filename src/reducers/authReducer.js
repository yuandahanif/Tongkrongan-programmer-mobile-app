import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  LOGIN_FAILED,
  LOGIN_WITH_GOOGLE,
} from '../actions/Types';

const authState = {
  username: '',
  password: '',
  email: '',
  loginWithGoogle: false,
  isAuth: false,
  loginFailed: false,
};

export const authReducer = (state = authState, action) => {
  switch (action.type) {
    case LOGIN:
      const {username, password} = action.payload;
      return {
        ...state,
        username,
        password,
        isAuth: true,
      };
    case REGISTER:
      return {...state};
    case CHECK_AUTH:
      return {...state, isAuth: true};
    case LOGIN_WITH_GOOGLE:
      return {
        ...state,
        isAuth: true,
        username: 'Google username',
        email: 'your google email',
        password: 'auth using google',
      };
    case LOGIN_FAILED:
      return {...state, loginFailed: true};
    case LOGOUT:
      return {...state, isAuth: false};
    default:
      return state;
  }
};

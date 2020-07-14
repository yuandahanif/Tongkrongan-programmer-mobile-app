import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  LOGIN_FAILED,
  LOGIN_WITH_GOOGLE,
} from '../actions/Types';

// const authState = {
//   username: '',
//   password: '',
//   email: '',
// loginWithGoogle: false,
// isAuth: false,
// loginFailed: false,
// };

const initialState = {
  id: null,
  username: '',
  avatar_url: '',
  email: '',
  Experience: {Job: [], internship: []},
  createdAt: null,
  externalLink: [],
  skills: {Language: [], Library: [], Technology: []},
  // loginWithGoogle: false,
  loginFailed: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      const data = action.payload;
      return {
        ...data,
      };
    case REGISTER:
      return {...state};
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
      return {
        id: null,
        username: '',
        avatar_url: '',
        email: '',
        createdAt: null,
        externalLink: [],
        skills: {Language: [], Library: [], Technology: []},
        loginFailed: false,
      };
    default:
      return state;
  }
};

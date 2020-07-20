import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  LOGIN_FAILED,
  LOGIN_WITH_GOOGLE,
} from './Types';
import AsyncStorage from '@react-native-community/async-storage';
import {firebase} from '../firebase/config';
firebase.firestore().settings({experimentalForceLongPolling: true});

export const login = payload => {
  return dispatch => {
    const {email, password, googleAuth} = payload;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(response => {
        const uid = response.user.uid;
        const userRef = firebase.firestore().collection('users');
        userRef
          .doc(uid)
          .get()
          .then(firebaseDocument => {
            if (!firebaseDocument.exists) {
              alert('user doesnt exis anymore');
              dispatch(loginFailed());
            }
            dispatch(loginSuccess(firebaseDocument.data()));
          })
          .catch(e => {
            alert(e);
            console.log('error in loginAction', e);
          });
      });
  };
};

export const loginSuccess = value => {
  return {
    type: LOGIN,
    payload: {
      ...value,
    },
  };
};
const loginFailed = () => ({
  type: LOGIN_FAILED,
});

export const register = payload => {
  return dispatch => {
    const {username, email, password} = payload;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        const uid = response.user.uid;
        const data = {
          id: uid,
          username,
          email,
          Experience: {
            Job: [],
            internship: [],
          },
          createdAt: timestamp,
          avatar_url: `https://ui-avatars.com/api/?name=${username}`,
          externalLink: [],
          skills: {
            Language: [],
            Library: [],
            Technology: [],
          },
        };

        const userRef = firebase.firestore().collection('users');
        userRef
          .doc(uid)
          .set(data)
          .then(() => dispatch(registerSuccess()))
          .catch(e => {
            dispatch(loginFailed());
          });
      })
      .catch(e => {
        alert(e);
        console.log('error in regisAction', e);
      });
  };
};
const registerSuccess = value => ({
  type: REGISTER,
  payload: {
    ...value,
  },
});

export const loginWithGoogle = () => ({
  type: LOGIN_WITH_GOOGLE,
});

export const logout = () => ({type: LOGOUT});

export const checkAuth = payload => {
  return dispatch => {
    dispatch(loginSuccess(payload));
  };
};

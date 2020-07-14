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
firebase.firestore().settings({ experimentalForceLongPolling: true });

export const login = payload => {
  return dispatch => {
    // AsyncStorage.getItem('@auth')
    //   .then(value => {
    //     if (value !== null) {
    //       value = JSON.parse(value);
    //       if (username === value.username && password === value.password) {
    //         dispatch(loginSuccess(value));
    //       } else {
    //         // ! if login failed
    //         dispatch(loginFailed());
    //       }
    //     }
    //   })
    //   .catch(e => dispatch(loginFailed()));

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
          });
      });
  };
};

const loginSuccess = value => ({
  type: LOGIN,
  payload: {
    ...value,
  },
});
const loginFailed = () => ({
  type: LOGIN_FAILED,
});

export const register = payload => {
  return dispatch => {
    // const jsonValue = JSON.stringify(payload);
    // AsyncStorage.setItem('@auth', jsonValue)
    //   .then(() => {
    //     dispatch(registerSuccess(payload));
    //   })
    //   .catch(() => dispatch(loginFailed()));
    const {username, email, password} = payload;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();
        alert(timestamp);
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

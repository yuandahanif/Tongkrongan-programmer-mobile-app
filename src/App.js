import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {connect} from 'react-redux';
import {firebase} from './firebase/config';

import {loginSuccess} from './actions/authAction';
import TabBar from './components/TabBar';
import {
  AbouteMeScreen,
  AddProjectScreen,
  LoginScreen,
  ProjectScreen,
  SearchScreen,
  SkillScreen,
  RegisterScreen,
  DetailScreen,
  updateProfile,
  SplashScreen,
} from './screen/index';

// * SCREEN
const skillStack = createStackNavigator();
const skillStackScreen = () => (
  <skillStack.Navigator initialRouteName="home">
    <skillStack.Screen
      name="home"
      options={{headerShown: false}}
      component={SkillScreen}
    />
    <skillStack.Screen
      name="detail"
      options={{headerShown: true}}
      component={DetailScreen}
    />
    <skillStack.Screen
      name="userInfo"
      options={{headerShown: false}}
      component={AbouteMeScreen}
    />
  </skillStack.Navigator>
);
const userStack = createStackNavigator();
const userStackScreen = () => (
  <userStack.Navigator headerMode="none">
    <userStack.Screen name="abouteMe" component={AbouteMeScreen} />
  </userStack.Navigator>
);

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none" initialRouteName="Login">
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Register" component={RegisterScreen} />
  </AuthStack.Navigator>
);

// * BOTTOM TAB
const Tab = createBottomTabNavigator();
const TabScreen = () => (
  <Tab.Navigator
    // headerMode="none"
    tabBar={props => <TabBar {...props} />}
    initialRouteName="Home">
    <Tab.Screen
      name="Home"
      component={skillStackScreen}
      options={{icon: 'home'}}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{icon: 'search'}}
    />
    <Tab.Screen
      name="Add"
      component={AddProjectScreen}
      options={{icon: 'plus'}}
    />
    <Tab.Screen
      name="Projects"
      component={ProjectScreen}
      options={{icon: 'layers'}}
    />
    <Tab.Screen
      name="AboutMe"
      component={userStackScreen}
      options={{icon: 'user'}}
    />
  </Tab.Navigator>
);

function App(props) {
  const {isAuth, loginFunc} = props;
  const [splash, setSplash] = useState(true);

  // * check auth
  useEffect(() => {
    const userRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        userRef
          .doc(user.uid)
          .get()
          .then(document => {
            const data = document.data();
            loginFunc(data);
          })
          .catch(e => {
            console.warn('from app.js login', e);
          });
      }
    });
  }, []);

  useEffect(() => {
    if (isAuth !== null) {
      setSplash(false);
    }
  }, [isAuth]);

  const NoTabStack = createStackNavigator();
  const ScreenContainer = () => (
    <NoTabStack.Navigator>
      <NoTabStack.Screen
        name="Tab"
        options={{headerShown: false}}
        component={TabScreen}
      />
      <NoTabStack.Screen name="updateProfile" component={updateProfile} />
    </NoTabStack.Navigator>
  );

  return (
    <NavigationContainer>
      {splash ? (
        <SplashScreen />
      ) : isAuth ? (
        <ScreenContainer />
      ) : (
        <AuthStackScreen />
      )}
    </NavigationContainer>
  );
}
const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.id,
  };
};
const mapsDispatchToProps = dispatch => ({
  loginFunc: data => dispatch(loginSuccess(data)),
});
export default connect(
  mapStateToProps,
  mapsDispatchToProps,
)(App);

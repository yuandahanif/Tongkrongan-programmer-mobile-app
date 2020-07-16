import React, {useEffect} from 'react';
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
} from './screen/index';

// * SCREEN
const skillStack = createStackNavigator();
const skillStackScreen = () => (
  <skillStack.Navigator initialRouteName="home" headerMode="none">
    <skillStack.Screen name="home" component={SkillScreen} />
    <skillStack.Screen name="detail" component={DetailScreen} />
    <skillStack.Screen name="userInfo" component={AbouteMeScreen} />
  </skillStack.Navigator>
);
const userStack = createStackNavigator();
const userStackScreen = () => (
  <userStack.Navigator headerMode="none">
    <userStack.Screen name="abouteMe" component={AbouteMeScreen} />
    <userStack.Screen name="updateProfile" component={updateProfile} />
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
    headerMode="none"
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

  return (
    <NavigationContainer>
      {isAuth ? <TabScreen /> : <AuthStackScreen />}
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

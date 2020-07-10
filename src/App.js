import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import TabBar from './components/TabBar';
import {
  AbouteMeScreen,
  AddProjectScreen,
  LoginScreen,
  ProjectScreen,
  SearchScreen,
  SkillScreen,
  RegisterScreen,
} from './screen/index';
import {connect} from 'react-redux';
import {checkAuth} from './actions/authAction';

// * SCREEN
const skillStack = createStackNavigator();
const skillStackScreen = () => (
  <skillStack.Navigator>
    <skillStack.Screen name="landing" component={SkillScreen} />
  </skillStack.Navigator>
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
    <Tab.Screen name="Home" component={SkillScreen} options={{icon: 'home'}} />
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
      component={AbouteMeScreen}
      options={{icon: 'user'}}
    />
  </Tab.Navigator>
);

function App(props) {
  const {isAuth, isAuthFunc} = props;
  isAuthFunc();
  return (
    <NavigationContainer>
      {isAuth ? <TabScreen /> : <AuthStackScreen />}
    </NavigationContainer>
  );
}
const mapStateToProps = state => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};
const mapDispatchToProps = () => ({
  isAuthFunc: checkAuth,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

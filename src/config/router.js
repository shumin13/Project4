import React, { Component } from 'react';
import {
  StyleSheet,
  AppRegistry,
} from 'react-native';
import { DrawerNavigator, TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'
import Profile from '../components/Profile/Profile'
// import SideNav from '../components/SideNav'
import Session from '../components/Session/Session'
// import ShowProfile from '../components/Profile/ShowProfile'
import Impact from '../components/Session/Message'
import Map from '../components/Map/Map'
// import Sensor from '../components/Sensor/Sensor'

export const Tabs = TabNavigator({
  Register: {
    screen: Register,
    navigationOptions: {
      tabBarLabel: 'Register',
      tabBarIcon: ({ tintColor }) => <Icon name="assignment-ind" size={35} color={tintColor} />,
    },
  },
  Login: {
    screen: Login,
    navigationOptions: {
      tabBarLabel: 'Login',
      tabBarIcon: ({ tintColor }) => <Icon name="fingerprint" size={35} color={tintColor} />,
    },
  },
  Impact: {
    screen: Impact,
    navigationOptions: {
      tabBarLabel: 'Impact',
      tabBarIcon: ({ tintColor }) => <Icon name="record-voice-over" size={35} color={tintColor} />,
    },
  },
  Map: {
    screen: Map,
    navigationOptions: {
      tabBarLabel: 'Map',
      tabBarIcon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />,
    },
  },
  Session: {
    screen: Session,
    navigationOptions: {
      tabBarLabel: 'Session',
      tabBarIcon: ({ tintColor }) => <Icon name="motorcycle" size={35} color={tintColor} />,
    },
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="face" size={35} color={tintColor} />,
    },
  }
});
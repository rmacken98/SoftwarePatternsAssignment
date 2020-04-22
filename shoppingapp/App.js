import React from 'react'
import Login from './Login'
import SignUp from './SignUp'
import ItemList from './ItemList'
import Firebase from "./FirebaseConfig";

// import {createSwitchNavigator} from 'react-navigation-switch'



import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {
  View,
  Text,
  StyleSheet
} from "react-native";

const AppStack = createStackNavigator({
  
  Login: Login,
  SignUp: SignUp,
  ItemList: ItemList,


  
});

export default createAppContainer(AppStack);

import React,{useState} from "react";
import { StatusBar} from "react-native";
import{ThemeProvider} from 'styled-components'

import lightTheme from './theme/light'
import darkTheme from './theme/dark'
import Home from './Home'
import SignIN from './LogIn'
import Reference from './reference'
import Branchement from './branchement'
import compteur from './compteur'
import SignUp from './SignUp'
import {
  View, Text, TouchableOpacity, Animated, ImageBackground,
  ScrollView, Dimensions, StyleSheet
} from 'react-native';
const App = () => {
  const [dark , setDark]=useState(true);
  
  return (

    <ThemeProvider theme={dark ? darkTheme : lightTheme}>
      <StatusBar barStyle={dark ? "light-content" : "dark-content"}
      backgroundColor={dark ? darkTheme.background :lightTheme.background} />
      <Home onDarkModeChange={() =>setDark(!dark)} darkModeValue={dark} />
  </ThemeProvider>


  );
};

export default App;


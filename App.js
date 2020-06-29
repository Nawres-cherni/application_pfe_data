
import 'react-native-gesture-handler';
import {NavigationContainer,DefaultTheme, DarkTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React,{useState} from "react";
import { StatusBar} from "react-native";
import{ThemeProvider} from 'styled-components'
import home from './Home'
import map from './Map'
import SignIN from './LogIn'
import reference from './reference'
import branchement from './branchement'
import compteur from './compteur'
import SignUp from './SignUp'
import reclamation from './Reclamation'
import noterservice from './source/pages/noterservice'
import help from './source/pages/help'

//import reclam from './server/Reclamation'

const App = () => {
  //const [dark , setDark]=useState(true);
  const Stack = createStackNavigator();
  
  return (

           
<NavigationContainer >
    <Stack.Navigator headerMode="none" >
<Stack.Screen name="noterservice" component={noterservice} /> 

<Stack.Screen name="help" component={help} /> 


<Stack.Screen name="home" component={home} /> 

{/*<Stack.Screen name="map" component={map} /> */}


      <Stack.Screen name="reclamation" component={reclamation}
    options={{ title: "reclamation" }}
    /> 

    <Stack.Screen name="compteur" component={compteur} />


<Stack.Screen name="branchement" component={branchement} />


    

<Stack.Screen name="SignIN" component={SignIN} 
options={{ title: "Signin" }}
options={{ headerShown:false}}/>

<Stack.Screen name="SignUp" component={SignUp} 
options={{ title: "Creation compte" }}/>

<Stack.Screen name="reference" component={reference} />
  </Stack.Navigator>
  </NavigationContainer>

 
  );
};

export default App;


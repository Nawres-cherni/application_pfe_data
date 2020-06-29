import React, { Component } from "react";
import FontAwesome5 from 
'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View ,ImageBackground,Image,
    TextInput,KeyboardAvoidingView,
   TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';
import bgImage from './background.jpg'
import Logo from './logo.png'

class SignIn extends Component {
constructor(props){
    super(props);
    this.state={
        email:'',
        password:'',
        errorMessage:null,
        showPass: true,
        press: false
    };
}


showPass = () => {
    if(this.state.press == false){
  
      this.setState({showPass: false, press:true})
    }else{
      this.setState({showPass: true, press:false})
    }
  }


render(){
  return (
    <ImageBackground  source={bgImage}  style={styles.background}>
         <KeyboardAvoidingView behavior="position">
    <View style={{marginTop:-100}}>
  <View style={styles.logocontainer}> 
    <Image source={Logo} style={styles.logo}/>
  </View>
  <View style={styles.bot}>
  <View>
{this.state.errorMessage && <Text style={{color:'red',fontSize:20}}>{this.state.errorMessage}</Text>}
</View>

  <View style={styles.inputContainer}>
  <FontAwesome5 name="mail-bulk" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
     />
        <TextInput
         style={styles.input}
            placeholder={'Email'}
            autoCapitalize="none"
            onChangeText={email =>this.setState({email})}
            value={this.state.email}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
        ></TextInput>
    </View>



  
    <View style={styles.inputContainer}>
    <FontAwesome5 name="lock" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
       />
        <TextInput
         style={styles.input}
            placeholder={'Password'}
            autoCapitalize="none"
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            secureTextEntry={this.state.showPass}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
        ></TextInput>

        
<TouchableOpacity  style={styles.eyes}
onPress ={this.showPass.bind(this)}>
 <FontAwesome5 name={this.state.press == false ?'eye' : 'eye-slash'} 
 size={25} 
 color={'rgba(255,255,255,0.6)' } 
 />
</TouchableOpacity>
    </View>

    <TouchableOpacity
    style={styles.login} 
     onPress={()=>this.props.navigation.navigate("home")}>
        <Text style={styles.textlog}>SignIn</Text>
    </TouchableOpacity>

    <View style={styles.signUp}>
    <Text style={{color:'black',fontSize:15}}>New User ? </Text>
     <Text  style={{color:'#136FAF',fontWeight:'bold',fontSize:15}} 
                onPress={()=>this.props.navigation.navigate("SignUp")}
                >SignUp</Text>
        </View>

        </View>
</View>
</KeyboardAvoidingView>
   </ImageBackground>
);
}
}


export default  SignIn;




const styles = StyleSheet.create({
    signUp:{
      flexDirection: 'row',
     marginStart:-90,
     //justifyContent:'center',
      marginTop:20
    },
   background: {
     flex: 1,
     backgroundColor: '#fff', 
     alignItems: 'center',
     width: null,
     height: null,
   },
  
   logocontainer: {
  alignItems:'center',
  
   },
   
  
   input: {
     width: 330,
     height:45,
     borderRadius: 45,
     fontSize:16,
     paddingLeft:45,
     backgroundColor: 'rgba(0,0,0,0.35)',
     color:'rgba(255,255,255,0.7)',
     marginHorizontal:25,
     
     
   },
   Icon: {
     position:'absolute',
     top: 8,
     left:37
   },
   inputContainer: {
     marginTop:30,
    
   },
  
   eyes: {
     position:'absolute',
     top: 8,
     right:37
   },
   login: {
     width: 330,
     height:45,
     borderRadius: 45,
    backgroundColor: '#136FAF',
    justifyContent: 'center',
    marginTop:20
   },
  
   textlog: {
  color: 'rgba(255,255,255,0.7)',
  textAlign: 'center',
  fontSize: 20
   },
   bot: {
     alignItems:'center',
     marginTop: 40
     
   }
  });
  
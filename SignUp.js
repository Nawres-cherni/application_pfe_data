import React, { Component, isValidElement } 
from "react";
import { StyleSheet, Text, View ,ImageBackground,Image,
    TextInput,KeyboardAvoidingView,
   TouchableOpacity } from "react-native";
import firebase from 'react-native-firebase';
import FontAwesome5 from 
'react-native-vector-icons/FontAwesome5';
import bgImage from './background.jpg'
import Logo from './logo.png'

//import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'

 class SignUp extends Component{
constructor(props){
    super(props);
    this.state={
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        EmailError:'',
        nameError:'',
        nameValidate:true,
        lastError:'',
        lastValidate:true,
        passError:''
    };
}

handleSignUpButt = () =>{

    const {
        email,
        password,
        firstName,
        lastName,
    }
     =this.state;
  
try{firebase.auth().createUserAndRetrieveDataWithEmailAndPassword(email,password)
.then((user) => {
    const fbRootRefsFs =  firebase.firestore();
    const userID =user.user.uid;
    console.log('user Id is:' ,userID);
    const userRef = fbRootRefsFs.collection('users').doc(userID);
    
    userRef.set({
        email,
        firstName,
        lastName,
    });
})}
catch(error) {
    console.log('erreur',error)
}
alert('SignUp success',this.props.navigation.navigate("home"))

}


handleFirstName= (firstName) =>{
    
    this.setState({
        firstName,
    });
}


handleLastName= (lastName) =>{
   
    this.setState({
        lastName,
    });
}


handleEmail= (email) =>{
 
    this.setState({
        email,
    });
}


handlePassword= (password) => {
    this.setState({
        password,
    });
}
firstValidation(text,type){
    
    if(this.state.firstName==""){
        this.setState({nameError:"Ce Champ est Obligatoire*"})
    }else if(type=='username'){
        let rjx=/^[a-zA-Z]+$/;
        let isVAlid=rjx.test(this.state.firstName)
        if(isVAlid){
           this.setState({nameValidate:true,})
        }else{
            this.setState({nameValidate:false,})
        }

    }else{
        this.setState({nameError:""})
    }
}
lastValidation(text,type){
    if(this.state.lastName==""){
        this.setState({lastError:"Ce Champ est Obligatoire*"})
    }else if(type=='lastname'){
        let rjx=/^[a-zA-Z]+$/;
        let isVAlid=rjx.test(this.state.lastName)
        if(isVAlid){
           this.setState({lastValidate:true,})
        }else{
            this.setState({lastValidate:false,})
        }

    }else{
        this.setState({lastError:""})
    }
}
EmailValidation(){
    if(this.state.email==""){
        this.setState({EmailError:"Ce Champ est Obligatoire*"})
    }else{
        this.setState({EmailError:"Remplir ce Champs SVP!!"})
    }
}
passValidation(){
    if(this.state.password=="" ){
        this.setState({passError:"Ce Champ est Obligatoire*"})
    }else{
        this.setState({passError:"Remplir ce Champs SVP!!"})
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
  <View style={styles.inputContainer}>
  <FontAwesome5 name="user" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
     />
        <TextInput
        style={[styles.input,
        !this.state.nameValidate? styles.error1:null]}
            placeholder={'Nom'}
            autoCapitalize="none"
            onBlur={(text)=>this.firstValidation(text,'username')}
            onChangeText={this.handleFirstName}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
        ></TextInput>
         <Text style={{color:'red',marginStart:30}}>{this.state.nameError}</Text>
    </View>

    <View style={styles.inputContainer}>
    <FontAwesome5 name="user" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
     />
        <TextInput
       style={[styles.input,
        !this.state.lastValidate? styles.error1:null]}
            placeholder={'Prenom'}
            autoCapitalize="none"
            onBlur={(text)=>this.lastValidation(text,'lastname')}
            onChangeText={this.handleLastName}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
        ></TextInput>
         <Text style={{color:'red',marginStart:30}}>{this.state.lastError}</Text>
    </View>
   
    <View style={styles.inputContainer}>
    <FontAwesome5 name="mail-bulk" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
     />
        <TextInput
        style={styles.input}
            placeholder={'Email'}
            autoCapitalize="none"
            onBlur={()=>this.EmailValidation()}
            onChangeText={this.handleEmail}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            keyboardType="email-address"
            underlineColorAndroid='transparent'
        ></TextInput>
        <Text style={{color:'red',marginStart:30}}>{this.state.EmailError}</Text>
    </View>

    <View style={styles.inputContainer}>
    <FontAwesome5 name="lock" size={25} color={'rgba(255,255,255,0.7)' } style={styles.Icon}
     />
        <TextInput
        style={styles.input}
            placeholder={'Password'}
            autoCapitalize="none"
            onBlur={()=>this.passValidation()}
            onChangeText={this.handlePassword}
            placeholderTextColor={'rgba(255,255,255,0.7)'}
            underlineColorAndroid='transparent'
        ></TextInput>
         <Text style={{color:'red',marginStart:30}}>{this.state.passError}</Text>
    </View>



    <TouchableOpacity
    style={styles.login} 
    onPress={this.handleSignUpButt}>
        <Text style={styles.textlog}>SignUp</Text>
    </TouchableOpacity>

           
    <View style={styles.signIn}>
    <Text style={{color:'black',fontSize:15,marginStart:50}}>Déjà Inscrit ? </Text>
                <Text  style={{color:'#136FAF',fontWeight:'bold',fontSize:15}} 
                onPress={()=>this.props.navigation.navigate("SignIN")}
                >SignIn</Text>
           </View>
            </View>
            
</View>
</KeyboardAvoidingView>
   </ImageBackground>
);

}}
export default SignUp;


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
     marginTop:10,
    
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
     
   },
   error1:{
       borderWidth:3,
       borderColor:'red'
   },
   signIn:{
    flexDirection: 'row',
   marginStart:-90,
   //justifyContent:'center',
    marginTop:20
  },
  });
  
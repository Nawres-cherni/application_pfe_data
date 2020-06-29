import React, { Component } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Image, ImageBackground,
  Dimensions, StyleSheet, Alert
} from 'react-native';
import bgImage from './steg9.jpeg'
import Logo from './logo.png'
import { timing } from 'react-native-reanimated';
const { width } = Dimensions.get('window');
export default class App extends Component {

  constructor() {
    super();
    this.state = {
      reff: '',
      reffError: '',
      textInputHolder: 0,
      captchaHolder: 0,
      randomNumberOne: 0,


    }
  }

  componentDidMount() {
    this.generateCaptcha();
  }

  generateCaptcha = () => {
    var numberOne = Math.floor(Math.random() * 10000) + 1;
    var captchaCode = numberOne;
    this.setState({ randomNumberOne: numberOne });
    this.setState({ captchaHolder: captchaCode });
  }

  validateCaptchaCode = () => {
    console.warn(this.state)
    var temp = this.state.randomNumberOne;
    if (this.state.textInputHolder == temp) {
      Alert.alert("Correcte");
    }
    else {

      Alert.alert("c'est incorrect, veuillez réessayer");
    }
    this.generateCaptcha();
  }



  reffValidator() {
    if (this.state.reff == "") {
      this.setState({ reffError: "Remplir le champs SVP" })
    }

    else {
      this.setState({ reffError: "" })
    }
  }

  render() {
    return (
      <ImageBackground source={bgImage} style={styles.container}>

        <View style={styles.backContainer}>
          <View style={styles.top} >
            <Image source={Logo} style={styles.logo} />
          </View>
          <KeyboardAvoidingView behavior="position">
          <View style={styles.partie2}>
            <TextInput
              style={styles.input}
              onBlur={() => this.reffValidator()}
              placeholder={'Tapez ici Référence'}
              placeholderTextColor={'rgba(47,163,218,0.5)'}
              underlineColorAndroid='transparent'
              keyboardType="numeric"
              maxLength={10}
              onChangeText={(text) => { this.setState({ reff: text }) }
              }
            />
          </View>
          <Text style={{ color: 'red', marginStart: 50 }} >{this.state.reffError}</Text>
          <View style={styles.partie4}>
            <Image
              style={{ width: 180, height: 60, resizeMode: 'contain' }}
              source={{ uri: 'https://dummyimage.com/150x40/0091ea/fafafa.png&text=' + this.state.randomNumberOne }}
            />


          </View>

          <View style={styles.partie3}>

            <TextInput
              style={styles.input1}
              placeholder={'Tapez ici Le code dessus'}
              placeholderTextColor={'rgba(47,163,218,0.7)'}
              underlineColorAndroid='transparent'
              onChangeText={data => this.setState({ textInputHolder: data })}
              keyboardType="numeric"
            />
          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 20 }}>
            <TouchableOpacity style={styles.login} onPress={this.validateCaptchaCode}>
              <Text style={styles.textlog}>Envoyer</Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView> 
        </View>
       
      </ImageBackground >
    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    width: null,
    height: null
  },
  backContainer: {
    flex: 1,
    backgroundColor: 'rgba(47,163,218,0.25)',

  },
  top: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  partie2: {
    flexDirection: 'row',
    marginTop: 50
  },
  input: {
    width: 350,
    borderRadius: 45,
    height: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: '#136FAF',
    marginHorizontal: 25,

  },
  text: {
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 15,
    color: '#136FAF',

  },
  partie3: {
    flexDirection: 'row',
    //marginTop:15
  },
  partie4: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginStart: 20
  },
  input1: {
    width: 350,
    borderRadius: 45,
    height: 45,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(255,255,255,0.5)',
    color: '#136FAF',
    marginHorizontal: 25,

  },
  text1: {
    fontWeight: 'bold',
    fontSize: 16,
    marginStart: 3,
    color: '#136FAF',
  },
  login: {
    width: 330,
    height: 45,
    borderRadius: 45,
    backgroundColor: '#136FAF',
    justifyContent: 'center',
    //marginTop:20
  },
  textlog: {
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    fontSize: 20
  },

  error: {
    borderWidth: 3,
    borderColor: 'red'
  }


})
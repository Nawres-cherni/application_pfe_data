import React, { Component } from 'react';
import { Text, StyleSheet, View, Linking, Platform, TouchableOpacity,ImageBackground } from 'react-native';
import bgImage from '../../steg9.jpeg'


export default class App extends Component {

  makeCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${71239222}';
    } else {
      phoneNumber = 'telprompt:${71239222}';
    }

    Linking.openURL(phoneNumber);
  };

  
  GreenCall = () => {

    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:${80100444}';
    } else {
      phoneNumber = 'telprompt:${80100444}';
    }

    Linking.openURL(phoneNumber);
  };

  render() {
    return (
<ImageBackground source={bgImage} style={styles.container1}>
      <View style={styles.container} >
        <TouchableOpacity onPress={this.makeCall} activeOpacity={0.7} style={styles.touchableButton} >
          <Text style={styles.TextStyle}> Numero de Service</Text>
        </TouchableOpacity>
        <Text>{`\n`}</Text>

        <TouchableOpacity onPress={this.GreenCall} activeOpacity={0.7} style={styles.touchableButton1} >
          <Text style={styles.TextStyle}> Numero Vert</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create(
  {
    container1: {
        flex: 1,
        width: null,
        height: null
        },
        backContainer: {
        flex: 1,
        backgroundColor: 'rgba(47,163,218,0.25)',
        
        },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 20,
    },
    touchableButton: {
      width: '80%',
      padding: 10,
      backgroundColor: '#0040FF',
      borderRadius:25,
      marginTop:-120


    },
    TextStyle: {
      color: '#fff',
      fontSize: 18,
      textAlign: 'center',
    },
    touchableButton1: {
        width: '80%',
        padding: 10,
        backgroundColor: '#0B610B',
        borderRadius:25
      },


  });
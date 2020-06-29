import React,{useState} from 'react';
import StarRating from 'react-native-star-rating';
import { View,TouchableOpacity,Text ,StyleSheet,Alert,ImageBackground} from 'react-native';
import { number } from 'prop-types';
import bgImage from '../../steg9.jpeg'
 
const CustomStarExample =(props)=> {
 

const [starCount,setStarCount] = useState(3)

 

const savenote=()=> {
    fetch("http://10.0.2.2:3000/envoyer-noterService",{
    method:"POST",
    headers:{
        'Content-Type':'application/json'
    },
    body:JSON.stringify({
        starCount
    })
    })
    .then(res=>res.json())
    .then(data=>{
    console.log(data)
    Alert.alert(`Votre Note est envoyer avec succes`)
    })
    .catch(err=>{
      Alert.alert("someting went wrong",err)
     })
    }
    
 
  const onStarRatingPress =(rating)=> {
    setStarCount(
      rating
    );
  }
 
    return (
        <ImageBackground source={bgImage} style={styles.container}>
        <View style={{marginTop:200}}>
      <StarRating
        disabled={false}
        maxStars={5}
        rating={starCount}
        value={starCount}
        onChangeText={number=>setStarCount(number)}
        selectedStar={(rating) =>onStarRatingPress(rating)}
        fullStarColor={'#D7DF01'}
      />

<TouchableOpacity

activeOpacity={0.5}
style={styles.login}
onPress={()=>savenote()}
>
<Text style={styles.textlog}>Envoyer</Text>
</TouchableOpacity>
      </View>
      </ImageBackground>
    );
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null
        },
  login: {
  width: 300,
  height: 45,
  borderRadius: 45,
  backgroundColor: '#136FAF',
  justifyContent: 'center',
  marginTop:60,
  marginStart:40,
  },
  textlog: {
    color: 'rgba(255,255,255,0.7)',
    textAlign: 'center',
    fontSize: 25
    },
})


export default CustomStarExample;
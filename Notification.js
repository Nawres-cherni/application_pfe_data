import React,{Component} from 'react';
import {PropTypes} from 'prop-types';
import FontAwesome5 from  'react-native-vector-icons/FontAwesome5';
import { StyleSheet, Text, View ,ImageBackground,Image,
    TextInput,KeyboardAvoidingView,
   TouchableOpacity,Easing,Animated} from 'react-native';

   export default class Notification extends Component{
       constructor(props){
    super(props);
    this.state={
positionValue:new Animated.Value(60),
    };
    this.closeNotif=this.closeNotif.bind(this);
    this.animatedNotification=this.animatedNotification.bind(this);
       }

animatedNotification(value){
    const {positionValue}=this.state;
    Animated.timing(
        positionValue,
        {
           toValue:value,
           duration:3,
           velocity:3,
           tension:2,
           friction:8,
           easing:Easing.easeOutBack,
        }
    ).start();
}
closeNotif(){
    this.props.handleCloseNotification();
}


       render(){
           const {type,firstLine,SecondeLine,showNotification}=this.props;
showNotification ? this.animatedNotification(0):this.animatedNotification(300);
           const {positionValue}=this.state;
           return(
               <Animated.View style={[{transform:
               [{translateY:positionValue}]} ,styles.wrapper]}>
               <View style={styles.notificationContent}>
               <Text style={styles.errorText}>{type}</Text> 
               <Text style={styles.errorMessage}>{firstLine}</Text>
               <Text>{SecondeLine}</Text>
               </View>
               <TouchableOpacity style={styles.Icon}
               onPress={this.closeNotif}>
  <FontAwesome5 name="times" size={20} color={'#d8d8d8'} />
             </TouchableOpacity>
              </Animated.View>
           );
       }
   }
Notification.PropTypes={
    showNotification:PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    firstLine:PropTypes.string,
    SecondeLine:PropTypes.string,
    handleCloseNotification:PropTypes.func,
};

const styles=StyleSheet.create({
notificationContent:{
flexDirection:'row',
flexWrap:'wrap',
alignItems:'flex-start' 
},
wrapper:{
backgroundColor:'#fff',
height:50,
width:430,
padding:10
},
errorText:{
color:'#b30000',
marginRight:5,
fontSize:14,
marginBottom:2,
},
errorMessage:{
marginBottom:2,
fontSize:14,
},
Icon:{
    position:'absolute',
    right:35,
    top:10
}
});
import React, { Component } from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {strings} from './localization'
import {
  View, Text, TouchableOpacity, Animated, ImageBackground,
  ScrollView, Dimensions, StyleSheet
} from 'react-native';
import bgImage from './steg9.jpeg'
import Flag from 'react-native-flags';
import {Badge} from 'react-native-elements'
import IconBadge from 'react-native-icon-badge';
const { width } = Dimensions.get('window');
export default class App extends Component {

 
arabe(){
    strings.setLanguage('ar');
    this.setState({});
  }


  francais(){
    strings.setLanguage('fr');
    this.setState({});
  }

  anglais(){
    strings.setLanguage('en');
    this.setState({});
  }
    
 
  render() {
    return (

    
<ImageBackground source={bgImage} style={styles.container}>

<View style={styles.backContainer}>
<ScrollView style={styles.scrollView}>


<View >
   <TouchableOpacity onPress={()=>this.anglais()}>
    <Flag
    code="US"/>
    </TouchableOpacity> 


      <TouchableOpacity onPress={()=>this.francais()}>
    <Flag
    code="FR"/>
    </TouchableOpacity>   


     
    <TouchableOpacity onPress={()=>this.arabe()}>
    <Flag
    code="TN"/>
    </TouchableOpacity>    
    </View>
    <View style={{marginTop:120}}></View>
<View style={styles.service1}>
                <TouchableOpacity style={{ alignItems: "center" }}
                 onPress={()=>this.props.navigation.navigate("reference")}
                >
                  <IconBadge                   
                  BadgeElement={
                    <FontAwesome5 name={'address-card'} size={30} color={'#136FAF'} />
                  }
                  IconBadgeStyle={
                    {position:'absolute',
                    top:-22,
                    right:-30,
                    width:60,
                    height:60,
                    borderRadius:55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#C0C0C0'}
                  }
                  />
                                   
                  <Text style={{ fontSize: 15.5, color: '#136FAF', fontWeight: 'bold', marginTop: 40,marginStart:10 }}>{strings.add_ref}</Text>
                </TouchableOpacity>
                </View>
          


                <View style={styles.menu}  >
           
            
           <View style={styles.menuItems}>
             <View style={styles.service}>
               <TouchableOpacity style={{ alignItems: "center" }}
                onPress={()=>this.props.navigation.navigate("reclamation")}
               >
                 <IconBadge                   
                 BadgeElement={
                   <FontAwesome5 name={'file-signature'} size={30} color={'#136FAF'} />
                 }
                 IconBadgeStyle={
                   {position:'absolute',
                   top:-20,
                   right:-20,
                   width:60,
                   height:60,
                   borderRadius:55,
                   alignItems: 'center',
                   justifyContent: 'center',
                   backgroundColor: '#C0C0C0'}
                 }
                 />               
                 <Text style={{ fontSize: 15.5, color: '#136FAF', fontWeight: 'bold', marginTop: 40,marginStart: 20 }}>{strings.envoyer_rec}</Text>
               </TouchableOpacity>
               </View>
           </View>



           <View style={styles.menuItems}>
              <View style={styles.service}>
                <TouchableOpacity style={{ alignItems: "center" }}
                 onPress={()=>this.props.navigation.navigate("branchement")}
                >
                  <IconBadge                   
                  BadgeElement={
                    <FontAwesome5 name={'money-bill'} size={30} color={'#136FAF'} />
                  }
                  IconBadgeStyle={
                    {position:'absolute',
                    top:-22,
                    right:-30,
                    width:60,
                    height:60,
                    borderRadius:55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#C0C0C0'}
                  }
                  />
                   
                
                  <Text style={{ fontSize: 15.5, color: '#136FAF', fontWeight: 'bold', marginTop: 40,marginStart: 5 }}>{strings.payer_fact}</Text>
                </TouchableOpacity>
                </View>
            </View>
            
            <View style={styles.menuItems}>
              <View style={styles.service}>
                <TouchableOpacity style={{ alignItems: "center" }}
                 onPress={()=>this.props.navigation.navigate("branchement")}
                >
                  <IconBadge                   
                  BadgeElement={
                    <FontAwesome5 name={'plug'} size={30} color={'#136FAF'} />
                  }
                  IconBadgeStyle={
                    {position:'absolute',
                    top:-22,
                    right:-30,
                    width:60,
                    height:60,
                    borderRadius:55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#C0C0C0'}
                  }
                  />
                   
                
                  <Text style={{ fontSize: 15.5, color: '#136FAF', fontWeight: 'bold', marginTop: 40,marginStart: 30 }}>{strings.add_brach}</Text>
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.menuItems}>
              <View style={styles.service}>
                <TouchableOpacity style={{ alignItems: "center" }}
                 onPress={()=>this.props.navigation.navigate("branchement")}
                >
                  <IconBadge                   
                  BadgeElement={
                    <FontAwesome5 name={'archive'} size={30} color={'#136FAF'} />
                  }
                  IconBadgeStyle={
                    {position:'absolute',
                    top:-22,
                    right:-30,
                    width:60,
                    height:60,
                    borderRadius:55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#C0C0C0'}
                  }
                  />
                   
                
                  <Text style={{ fontSize: 15.5, color: '#136FAF', fontWeight: 'bold', marginTop: 40,marginStart: 5 }}>{strings.historic}</Text>
                </TouchableOpacity>
                </View>
            </View>


            <View style={styles.menuItems}>
              <View style={styles.service}>
                <TouchableOpacity style={{ alignItems: "center" }}
                 onPress={()=>this.props.navigation.navigate("compteur")}
                >
                  <IconBadge                   
                  BadgeElement={
                    <FontAwesome5 name={'tachometer-alt'} size={30} color={'#136FAF'} />
                  }
                  IconBadgeStyle={
                    {position:'absolute',
                    top:-22,
                    right:-30,
                    width:60,
                    height:60,
                    borderRadius:55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#C0C0C0'}
                  }
                  />
                   
                
                  <Text style={{ fontSize: 15.5, color: '#136FAF', fontWeight: 'bold', marginTop: 40,marginStart: 35 }}>{strings.add_compteur}</Text>
                </TouchableOpacity>
                </View>
            </View>


            <View style={styles.menuItems}>
              <View style={styles.service}>
                <TouchableOpacity style={{ alignItems: "center" }}
                 onPress={()=>this.props.navigation.navigate("branchement")}
                >
                  <IconBadge                   
                  BadgeElement={
                    <FontAwesome5 name={'calculator'} size={30} color={'#136FAF'} />
                  }
                  IconBadgeStyle={
                    {position:'absolute',
                    top:-22,
                    right:-30,
                    width:60,
                    height:60,
                    borderRadius:55,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#C0C0C0'}
                  }
                  />
                   
                
                  <Text style={{ fontSize: 15.5, color: '#136FAF', fontWeight: 'bold', marginTop: 40,marginStart: 40 }}>{strings.estimer_fact}</Text>
                </TouchableOpacity>
                </View>
            </View>


</View>

  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>gggg
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  <Text></Text>
  
  
  
  

 
  

</ScrollView>
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

  service1:{
    width: '50%',
    height: '14%',
    opacity: 0.8,
    borderColor: '#fff',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius:20,
    marginStart:80,
    opacity: 0.8,
  },
  menu: {
    height: '50%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  menuItems: {
    width: '50%',
    height: '50%',
    padding: 15,
    marginTop:10

  },
  service: {
    width: '100%',
    height: '70%',
    opacity: 0.8,
    borderColor: '#fff',
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius:20,
   
  },
  scrollView: {
    marginHorizontal: 10,
  },
})




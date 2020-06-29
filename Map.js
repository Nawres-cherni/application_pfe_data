import React,{Component} from 'react';
import {StyleSheet,View,Text,Image,
   Alert,Platform,Dimensions} from 'react-native';
import MapView,{PROVIDER_GOOGLE,Marker,Callout,
Polygon,
Circle} from 'react-native-maps';
import Carousel from 'react-native-snap-carousel';
import Geolocation from '@react-native-community/geolocation';
import log from './image/log.png';
import {request,PERMISSIONS} from 'react-native-permissions'
export default class Map extends Component{
  state={

    markers:[],
    coordinates: [
      {name:'STEG Centrale Thermique-Rades', latitude: 36.797247,longitude: 10.283415,image:require('./image/283415.jpg')},
      {name:'STEG', latitude: 36.826180,longitude: 10.187232,image:require('./image/187232.jpg')},
      {name:'STEG', latitude: 36.810308,longitude: 10.147919,image:require('./image/147919.jpg')},
      {name:'STEG', latitude: 36.815599, longitude:10.163369,image:require('./image/163369.png')},
      {name:'STEG', latitude: 36.810445, longitude:10.183882,image:require('./image/163369.png')},
      {name:'STEG', latitude: 36.804384,longitude: 10.183569,image:require('./image/183569.jpg')},
      {name:'STEG', latitude: 36.795072, longitude:10.176789,image:require('./image/stegfadhel.jpg')},
      {name:'STEG', latitude: 36.802839, longitude:10.191466,image:require('./image/163369.png') },
      {name:'STEG', latitude:36.797247,longitude:10.283415,image:require('./image/283415.jpg')},
      {name:'STEG', latitude: 36.836545,longitude: 10.308820,image:require('./image/308820.jpg')},
      {name:'STEG', latitude: 36.844204, longitude:10.200810,image:require('./image/200810.jpg')},
      {name:'STEG', latitude:36.852822, longitude:10.192898,image:require('./image/192898.jpg')},
      {name:'STEG', latitude: 36.851861,longitude: 10.155161,image:require('./image/155161.jpg')},
      {name:'STEG',latitude:36.813536, longitude:10.146766,image:require('./image/146766.jpg')},
      {name:'STEG', latitude: 36.893225, longitude:10.182917,image:require('./image/163369.png')},

      
    ]
  }


componentDidMount(){
  this.requestLocationPermession();
}

  requestLocationPermession= async()=>{
if(Platform.OS=== 'ios'){
var response=await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
console.log('iPhone' + response);
if(response=== 'granted'){
  this.localCurrentPosition(); 
}
}else{
var response=await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
console.log('Android' + response);

if(response==='granted'){
  this.localCurrentPosition();
}
}
  }

  localCurrentPosition=()=>{
    Geolocation.getCurrentPosition(position=>{
      console.log(JSON.stringify(position));

  let initialPosition={
  latitude: position.coords.latitude, 
  longitude: position.coords.longitude,
  latitudeDelta:0.09,
  longitudeDelta:0.035
      }
      this.setState({initialPosition});
    },
    error=>Alert.alert(error.message),
    {enableHighAccuracy:true,timeout:1000,maximumAge:1000}
    )
  }


  onCarouselItemChange = (index) => {
    let location = this.state.coordinates[index];

    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    })

    this.state.markers[index].showCallout()
  }

  onMarkerPressed = (location, index) => {
    this._map.animateToRegion({
      latitude: location.latitude,
      longitude: location.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.035
    });

    this._carousel.snapToItem(index);
  }


renderCarouseItem=({item})=>
  <View style={styles.cardContainer}>
    <Text  style={styles.textContainer}>{item.name}</Text>
    <Image style={styles.imageContainer} source={item.image} />
  </View>


  render(){
    return(
      <View style={styles.container}>
<MapView provider={PROVIDER_GOOGLE}
ref={map => this._map = map}
showsUserLocation={true}
 style={styles.map}
initialRegion={this.state.initialPosition}>
<Polygon
coordinates={this.state.coordinates}
fillColor={'rgba0,0,0,0.3)'}
strokeWidth={0.2}
/>
<Circle 
center={{latitude:36.804759, longitude:10.183221}}
radius={500}
fillColor={'rgba(200,200,200,0.5)'}
/>
<Marker
draggable
coordinate={{latitude:36.804759, longitude:10.183221}}
image={require('./image/log.png')}>
<Callout style={{width:50,height:50}} >
  <Text>Steg</Text>
</Callout>


</Marker>


{
  this.state.coordinates.map((marker, index) =>(
    <Marker
    key={marker.name}
    ref={ref => this.state.markers[index]=ref}
    coordinate={{latitude: marker.latitude,longitude:marker.longitude}}
    onPress={() => this.onMarkerPressed(marker, index)}
    >
<Callout>
  
  <Text>{marker.name}</Text>
</Callout>
    </Marker>
  ))
}

</MapView>
<Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.coordinates}
              renderItem={this.renderCarouseItem}
              containerCustomStyle={styles.currsor}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={200}
              removeClippedSubviews={false}
              onSnapToItem={(index)=>this.onCarouselItemChange(index)}
            />
</View>
    );
  }
}

const styles=StyleSheet.create({
container:{
  ...StyleSheet.absoluteFillObject

},
  map:{
  ...StyleSheet.absoluteFillObject
  },
  currsor:{
    position:'relative',
    bottom:0,
    marginTop:550
  },
  cardContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    height: 200,
    width: 300,
    padding: 24,
    borderRadius: 24
  },
  imageContainer: {
    height: 120,
    width: 300,
    bottom: 0,
    position: 'absolute',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24
  },
  textContainer: {
    color: 'white',
    fontSize: 22,
    alignSelf: 'center'
  }
})
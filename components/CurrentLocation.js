import{useState,useEffect} from 'react';
import { Text, Button,SafeAreaView, StyleSheet,Linking,Platform,Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';





const CurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState({
    latitude:"not",
    longitude: "not"});

    useEffect(()=>{
        requestPermissions()
    },[]);

  const requestPermissions = async() => {
    const {permissionResult} = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
    if(permissionResult.status !== 'granted'){
      Alert.alert("Permission denied",'No use of location in this app'); 
    }

  }
//get current location
  const getCurrentPosition = async () => {
    console.log("get current location");
    const location = await Location.getCurrentPositionAsync({});
    setCurrentLocation({latitude: location.coords.latitude,
                        longitude: location.coords.longitude});
    console.log( location );
  }


  const showMapWithCurrentPosition =()=>{
    const url = Platform.select({
      android: `geo:${currentLocation.latitude},${currentLocation.longitude}`,
      ios: `maps:${currentLocation.latitude},${currentLocation.longitude}`
    });

    Linking.openURL(url);
  };

  return (
   <SafeAreaView style={styles.container}>
      <Text style={{fontSize:40, textAlign:'center'}}>{"Lat: "+currentLocation.latitude + "Lng: "+ currentLocation.longitude}</Text>
      <Button title="Get current position" onPress={getCurrentPosition}>
      </Button>
      <Button title="show  map" onPress={showMapWithCurrentPosition}>
      </Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});


export default CurrentLocation;
import { View, Text, StyleSheet,Image } from 'react-native';

const WeatherDataDisplay = ({ description,temperature, wind, weatherIcon}) => {


const weatherIconUrl = `http://openweathermap.org/img/w/${weatherIcon}.png`;

  return (
    <View style={{ alignItems: 'center'}}>
    <View style={styles.container}>
    <Image style = {styles.weatherImageStyle} source={{ uri: weatherIconUrl }}/>
      <View style={styles.containernext}>
      <Text style={styles.textStyle}>{description}</Text>
        <Text style={styles.textStyle}>{temperature}</Text>
        <Text style={styles.textStyle}>{wind}</Text>
       </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  containernext: {
    flexDirection: 'column',
    
  },

  textStyle: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 20,
    marginLeft: 150,
  },
  weatherImageStyle: {
    width: 80,
    height: 49,
  },
});

export default WeatherDataDisplay;

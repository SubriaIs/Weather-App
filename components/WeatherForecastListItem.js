import { View, Text, Image, StyleSheet } from 'react-native';


const WeatherForecastListItem = ({ time, description, temperature, windSpeed, icon }) => {
  
  const weatherIconUrl = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <View style={styles.container}> 
      <View style={styles.cardStyle}>
        <Text style={styles.textStyle}>{time}</Text>
        <Text style={styles.textStyle}>{description}</Text>
        <Text style={styles.textStyle}>{temperature}</Text>
        <Text style={styles.textStyle}>{windSpeed}</Text>
        <Image style={styles.weatherImageStyle} source={{ uri: weatherIconUrl }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    backgroundColor: "lightblue",
    padding: 15,
    borderRadius: 10, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, 
    alignItems: 'center', 
    marginVertical: 10, 
    width: '90%', 
    alignSelf: 'center', 
  },
  weatherImageStyle: {
    width: 40,
    height: 40,
  },
  textStyle: {
    fontSize: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20, 
  },
});

export default WeatherForecastListItem;

import { View, Text, Image, StyleSheet } from 'react-native';


const WeatherForecastListItem = ({ time, description, temperature, windSpeed, icon }) => {
  
  const weatherIconUrl = `http://openweathermap.org/img/w/${icon}.png`;

  return (
    <View>
      <Text style={styles.textStyle}>{time}</Text>
      <Text style={styles.textStyle}>{description}</Text>
      <Text style={styles.textStyle}>{temperature}</Text>
      <Text style={styles.textStyle}>{windSpeed}</Text>
      <Image style={styles.weatherImageStyle} source={{ uri: weatherIconUrl }} />
    </View>
  );
};

const styles = StyleSheet.create({
  weatherImageStyle: {
    width: 40,
    height: 40,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default WeatherForecastListItem;

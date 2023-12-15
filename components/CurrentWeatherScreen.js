import { useState, useEffect } from 'react';
import {View,Switch,Text,StyleSheet} from 'react-native'
import Header from '../components/Header';
import WeatherDataDisplay from '../components/WeatherDataDisplay';
import CityInput from '../components/CityInput'; 

const CurrentWeatherScreen = () => {
  const [cityName, setCityName] = useState('Tampere');
  const [description, setDescription] = useState('sunny')
  const [temperature, setTemperature] = useState('+3°C');
  const [wind, setWind] = useState('2 m/s');
  const [weatherIcon, SetWeatherIcon] = useState("10d");
  const [isCelsius, setIsCelsius] = useState(true); 
  const [isChange, setIsChange] = useState(true); 
  
  
   useEffect(() => {
     if(isChange){
       refreshData(cityName);
     }
    
  }, [cityName]);

  // Function to fetch the updated data from an API
  //lifting data (newCity)
  const refreshData = async (newCity) => {
    setIsChange(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=3588187a0e1748af7403db42bc9a4485`
      );
      const data = await response.json();
      setDescription(data.weather[0].main);
      setTemperature(`${isCelsius ? Math.floor(data.main.temp) : Math.round((data.main.temp * 9) / 5 + 32)}${isCelsius ? '°C' : '°F'}`);
      setWind(`${data.wind.speed} m/s`);
      setCityName(data.name);
      SetWeatherIcon(data.weather[0].icon);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
    setIsChange(false);
  };

const toggleTemperatureUnit = () => {
    setIsCelsius(!isCelsius);
     setTemperature(
      `${isCelsius ? Math.floor(temperature.slice(0, -2)) * 1.8 + 32 : Math.round((temperature.slice(0, -2) - 32) / 1.8)}${
        isCelsius ? '°F' : '°C'
      }`
    );
  };
 

  return (
    <View >
      <Header cityName={cityName}></Header>
      <WeatherDataDisplay 
      description={description} 
      temperature={temperature} 
      wind={wind}
      weatherIcon={weatherIcon}></WeatherDataDisplay>
      <View style={styles.toggleContainer}>
        <Text style={styles.unitText}>Celsius</Text>
        <Switch value={isCelsius} onValueChange={toggleTemperatureUnit} />
        <Text style={styles.unitText}>Fahrenheit</Text>
      </View>
      <CityInput refreshData={refreshData} />
    </View>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  unitText: {
    marginHorizontal: 10,
    fontSize: 16,
  },
});


export default CurrentWeatherScreen;
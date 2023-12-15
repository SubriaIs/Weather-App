import { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import Header from '../components/Header';
import WeatherForecastListItem from '../components/WeatherForecastListItem';

const WeatherForecastScreen = () => {
  const [weatherListData, setWeatherListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.openweathermap.org/data/2.5/forecast?q=Tampere&units=metric&appid=3588187a0e1748af7403db42bc9a4485'
        );

        if (response.ok) {
          const data = await response.json();

          // Group forecast data by day
          const dailyForecast = {};
          data.list.forEach(item => {
            const date = new Date(item.dt * 1000); // Convert Unix timestamp to milliseconds
            //console.log('Received Date:', date);
            const day = date.toLocaleDateString('en-US', { weekday: 'long' }); // Get the full weekday name
            //console.log('Formatted Day:', day);
          //not duplicate day information
            if (!dailyForecast[day]) {
              dailyForecast[day] = {
                time: day,
                description: item.weather[0].description,
                temperature: item.main.temp,
                windSpeed: item.wind.speed,
                icon: item.weather[0].icon
              };
            }
          });

          // Extract forecast data for each day from the grouped data
          const sevenDayForecast = Object.values(dailyForecast);

          setWeatherListData(sevenDayForecast);
          
        } else {
          console.error('Failed to fetch weather data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
//console.log(weatherListData);
  return (
    <View>
      <Header cityName="Tampere" />
      <FlatList
        data={weatherListData}
        renderItem={({ item }) => (
          <WeatherForecastListItem
            time={item.time}
            description={item.description}
            temperature={`${Math.floor(item.temperature)}°C`}
            windSpeed={`${item.windSpeed} m/s`}
            icon={item.icon}
          />
        )}
        
      />
    </View>
  );
};


export default WeatherForecastScreen;

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CurrentWeatherScreen from './components/CurrentWeatherScreen';
import WeatherForecastScreen from './components/WeatherForecastScreen';
import CurrentLocation from './components/CurrentLocation';


const Drawer = createDrawerNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Current Weather Screen" component={CurrentWeatherScreen} />
      <Drawer.Screen name="Weather Forecast Screen" component={WeatherForecastScreen} />
            <Drawer.Screen name="Current Location" component={CurrentLocation} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;

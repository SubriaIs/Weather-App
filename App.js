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
      <Drawer.Screen name="CurrentWeatherScreen" component={CurrentWeatherScreen} />
      <Drawer.Screen name="WeatherForecastScreen" component={WeatherForecastScreen} />
            <Drawer.Screen name="CurrentLocation" component={CurrentLocation} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default App;

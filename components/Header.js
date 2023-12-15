import {View,Text, StyleSheet} from 'react-native';
const Header = ({cityName}) => {

  return(
    <View style ={styles.backgroundColor} >
    <Text style ={styles.textStyle}>{cityName}</Text>
    </View>
  )}

const styles = StyleSheet.create({

  textStyle: {
      textAlign: 'center', 
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },

  backgroundColor: {
    backgroundColor: "lightblue",
    
  }
})
export default Header;
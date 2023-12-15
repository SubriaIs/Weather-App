
import { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { Button, View,ToastAndroid,Platform,ActionSheetIOS } from 'react-native';

const CityInput = ({ refreshData }) => {
  const [text, setText] = useState('');

  const handleTextChange = (newText) => {
    setText(newText);
  };

const showToast = () => {
  const options = ['Cancel', 'ClearCityName'];
    const cancelButtonIndex = 0;
    const refreshButtonIndex = 1;

  if(Platform.OS == "android"){
    ToastAndroid.show(`Refreshing weatherdata`, ToastAndroid.SHORT);
    }
  else{
     ActionSheetIOS.showActionSheetWithOptions(
      {
        options: options,
        cancelButtonIndex: cancelButtonIndex,
      },
      (buttonIndex) => {
        if (buttonIndex === refreshButtonIndex) {
          setText('');
        }
      }
    );
  }
  };

  return (
    <View style={{paddingTop: 100}}>
      <TextInput
        label="Enter City Name:"
        value={text}
        onChangeText={handleTextChange}
        style={{
          height: 50,
          borderColor: 'gray',
          padding: 5,
        }}
      /> 
      <Button title="Refresh" onPress={() => {
            refreshData(text);
            showToast();
          }}/>
    </View>
  );
};

export default CityInput;

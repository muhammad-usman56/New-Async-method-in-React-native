import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'



const UselessTextInput = () => {
  const [textInputValue, settextInputValue] = React.useState("");
  const [value, setvalue] = React.useState('');


const saveValue = () =>{
  if(textInputValue){
    AsyncStorage.setItem('any_key_here',textInputValue);
    settextInputValue('');
    alert('Data saved');

  }else{
    alert('something wrong');
  }
}

const getValue = () =>{
  AsyncStorage.getItem('any_key_here')
  .then((value)=>{
    setvalue(value);
  })
}
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(data) => settextInputValue(data)}
        value={textInputValue}
        placeholder="useless placeholder"
      />
     <Button
  onPress={saveValue}
  title="Save data"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>

<Button
  onPress={getValue}
  title="Fetch data"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
<Text>{value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    margin: '10%',
    textAlign: 'center',
    marginTop:'40%'
  }
});
export default UselessTextInput;
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";
// view -> container that will wrap multiple components together

export default function App() {

  const [value,setValue] = useState('')

  function handleOnChangeText(getEnteredText){
    setValue(getEnteredText)
  }

  function handleOnPressButton(){
    console.log(value)
  }

  return (
    <View style={{
      padding:60
    }}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={handleOnChangeText} style={styles.input} placeholder="Add Your Note Here" />
        <Button onPress={handleOnPressButton} color={'#000'} title="Add note" />
      </View>
      <View style={styles.listContainer}>
        <Text>Show Lists Here !</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer : {
    flexDirection: 'row',
    paddingBottom:30,
    borderBottomWidth:1
  },
  input : {
    borderWidth: 1,
    borderColor: '#ddd',
    flex: 1
  },
  listContainer : {
    paddingTop: 30
  }
});
